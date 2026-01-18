
// main.js

// --- Render products on products.html ---
function renderProductsGrid() {
  const list = document.getElementById('productList');
  if (!list) return;

  list.innerHTML = '';
  products.forEach(p => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="sale-tag">Sale!</div>
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <div class="muted">${p.category}</div>
      <div class="product-price">$${p.priceFrom.toFixed(2)} - $${p.priceTo.toFixed(2)}</div>
      <div class="variations">
        ${p.colors.map(c => `<span class="dot" style="background:${c}"></span>`).join('')}
      </div>
      <a class="sr-only" href="product.html?id=${p.id}">Ver ${p.name}</a>
    `;
    // click -> product page
    card.addEventListener('click', () => {
      window.location.href = `product.html?id=${p.id}`;
    });
    list.appendChild(card);
  });
}

// --- Render product details on product.html ---
function renderProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10);
  if (!id) return;

  const p = products.find(x => x.id === id);
  if (!p) return;

  const img = document.getElementById('detailImage');
  const name = document.getElementById('detailName');
  const cat = document.getElementById('detailCategory');
  const price = document.getElementById('detailPrice');
  const desc = document.getElementById('detailDesc');

  if (img) img.src = p.image;
  if (name) name.textContent = p.name;
  if (cat) cat.textContent = p.category;
  if (price) price.textContent = `$${p.priceFrom.toFixed(2)} - $${p.priceTo.toFixed(2)}`;
  if (desc) desc.textContent = 'Descrição do produto — substitui com o texto real do PDF.';
}

// --- Contact form fake submit ---
document.addEventListener('submit', (e) => {
  if (e.target && e.target.id === 'contactForm') {
    e.preventDefault();
    alert('Mensagem enviada! (demo)');
    e.target.reset();
  }
});

// --- Init on DOM load ---
document.addEventListener('DOMContentLoaded', () => {
  renderProductsGrid();
  renderProductDetail();

  // smooth scroll for single-page links (header nav)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (ev) => {
      ev.preventDefault();
      const t = document.querySelector(a.getAttribute('href'));
      if (t) t.scrollIntoView({ behavior:'smooth', block:'start' });
    });
  });

  // keyboard accessibility: open product if Enter pressed on card
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') card.click();
    });
  });
});
