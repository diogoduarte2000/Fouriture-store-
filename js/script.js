const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");

const modal = document.getElementById("productModal");
const closeModal = document.getElementById("closeModal");

const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");

// Renderizar produtos
function renderProducts(category = "all") {
    productList.innerHTML = "";

    const filtered = category === "all"
        ? products
        : products.filter(p => p.category === category);

    filtered.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>${product.price.toFixed(2)}€</p>
        `;

        card.addEventListener("click", () => openProduct(product));

        productList.appendChild(card);
    });
}

// Abrir modal
function openProduct(product) {
    modalImage.src = product.image;
    modalName.textContent = product.name;
    modalPrice.textContent = product.price.toFixed(2) + "€";

    modal.style.display = "flex";
}

// Fechar modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fechar ao clicar fora
window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});

// Filtro de categorias
categoryFilter.addEventListener("change", (e) => {
    renderProducts(e.target.value);
});

// Inicializar
renderProducts();
