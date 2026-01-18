// products.js - Base de dados de produtos
const products = [
    // DECOR
    {
        id: 1,
        name: "Vaso Cerâmico Moderno",
        price: 32.50,
        priceFrom: 25.00,
        priceTo: 40.00,
        category: "Decor",
        image: "https://images.pexels.com/photos/112812/pexels-photo-112812.jpeg",
        description: "Vaso cerâmico com acabamento moderno, perfeito para decoração minimalista.",
        inStock: true,
        sale: false
    },
    {
        id: 2,
        name: "Quadro Abstracto",
        price: 55.00,
        priceFrom: 45.00,
        priceTo: 65.00,
        category: "Decor",
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
        description: "Quadro abstracto com cores vibrantes para dar vida ao seu espaço.",
        inStock: true,
        sale: true
    },
    {
        id: 3,
        name: "Conjunto de Velas",
        price: 25.00,
        priceFrom: 18.00,
        priceTo: 32.00,
        category: "Decor",
        image: "https://images.pexels.com/photos/3940895/pexels-photo-3940895.jpeg",
        description: "Conjunto de velas aromáticas de alta qualidade.",
        inStock: true,
        sale: false
    },
    {
        id: 4,
        name: "Espelho Oval",
        price: 85.00,
        priceFrom: 75.00,
        priceTo: 95.00,
        category: "Decor",
        image: "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg",
        description: "Espelho oval com moldura elegante.",
        inStock: true,
        sale: false
    },
    {
        id: 5,
        name: "Tapete Geométrico",
        price: 104.50,
        priceFrom: 89.00,
        priceTo: 120.00,
        category: "Decor",
        image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
        description: "Tapete com padrão geométrico moderno.",
        inStock: true,
        sale: true
    },
    {
        id: 6,
        name: "Relógio de Parede",
        price: 65.00,
        priceFrom: 55.00,
        priceTo: 75.00,
        category: "Decor",
        image: "https://images.pexels.com/photos/5824497/pexels-photo-5824497.jpeg",
        description: "Relógio de parede com design minimalista.",
        inStock: true,
        sale: false
    },

    // OFFICE
    {
        id: 7,
        name: "Cadeira de Escritório Ergonómica",
        price: 185.00,
        priceFrom: 150.00,
        priceTo: 220.00,
        category: "Office",
        image: "https://images.pexels.com/photos/8197497/pexels-photo-8197497.jpeg",
        description: "Cadeira ergonómica com ajuste de altura e apoio lombar.",
        inStock: true,
        sale: true
    },
    {
        id: 8,
        name: "Mesa de Escritório",
        price: 349.00,
        priceFrom: 299.00,
        priceTo: 399.00,
        category: "Office",
        image: "https://images.pexels.com/photos/5089217/pexels-photo-5089217.jpeg",
        description: "Mesa de escritório espaçosa com acabamento em madeira.",
        inStock: true,
        sale: false
    },
    {
        id: 9,
        name: "Estante Modular",
        price: 215.00,
        priceFrom: 180.00,
        priceTo: 250.00,
        category: "Office",
        image: "https://images.pexels.com/photos/5089226/pexels-photo-5089226.jpeg",
        description: "Estante modular versátil para organização.",
        inStock: true,
        sale: false
    },
    {
        id: 10,
        name: "Organizador de Documentos",
        price: 42.50,
        priceFrom: 35.00,
        priceTo: 50.00,
        category: "Office",
        image: "https://images.pexels.com/photos/5089237/pexels-photo-5089237.jpeg",
        description: "Organizador prático para documentos e papelaria.",
        inStock: true,
        sale: true
    },
    {
        id: 11,
        name: "Candeeiro de Mesa",
        price: 55.00,
        priceFrom: 45.00,
        priceTo: 65.00,
        category: "Office",
        image: "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg",
        description: "Candeeiro de mesa com design contemporâneo.",
        inStock: true,
        sale: false
    },
    {
        id: 12,
        name: "Cadeira de Conferência",
        price: 150.00,
        priceFrom: 120.00,
        priceTo: 180.00,
        category: "Office",
        image: "https://images.pexels.com/photos/5089238/pexels-photo-5089238.jpeg",
        description: "Cadeira confortável para salas de reunião.",
        inStock: true,
        sale: false
    },

    // BEDROOM
    {
        id: 13,
        name: "Cama King Size",
        price: 550.00,
        priceFrom: 450.00,
        priceTo: 650.00,
        category: "Bedroom",
        image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
        description: "Cama King Size com cabeceira estofada.",
        inStock: true,
        sale: true
    },
    {
        id: 14,
        name: "Mesa de Cabeceira",
        price: 92.50,
        priceFrom: 75.00,
        priceTo: 110.00,
        category: "Bedroom",
        image: "https://images.pexels.com/photos/5089224/pexels-photo-5089224.jpeg",
        description: "Mesa de cabeceira com gaveta e design moderno.",
        inStock: true,
        sale: false
    },
    {
        id: 15,
        name: "Guarda-Roupa Casal",
        price: 425.00,
        priceFrom: 350.00,
        priceTo: 500.00,
        category: "Bedroom",
        image: "https://images.pexels.com/photos/5089225/pexels-photo-5089225.jpeg",
        description: "Guarda-roupa espaçoso com espelho.",
        inStock: true,
        sale: false
    },
    {
        id: 16,
        name: "Cómoda 4 Gavetas",
        price: 215.00,
        priceFrom: 180.00,
        priceTo: 250.00,
        category: "Bedroom",
        image: "https://images.pexels.com/photos/5089227/pexels-photo-5089227.jpeg",
        description: "Cómoda com 4 gavetas amplas.",
        inStock: true,
        sale: true
    },
    {
        id: 17,
        name: "Espelho de Quarto",
        price: 110.00,
        priceFrom: 90.00,
        priceTo: 130.00,
        category: "Bedroom",
        image: "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg",
        description: "Espelho grande com moldura elegante.",
        inStock: true,
        sale: false
    },
    {
        id: 18,
        name: "Cama Solteiro",
        price: 270.00,
        priceFrom: 220.00,
        priceTo: 320.00,
        category: "Bedroom",
        image: "https://images.pexels.com/photos/5089230/pexels-photo-5089230.jpeg",
        description: "Cama de solteiro confortável e resistente.",
        inStock: true,
        sale: false
    },

    // LIVING ROOM
    {
        id: 19,
        name: "Sofá Moderno",
        price: 349.00,
        priceFrom: 299.00,
        priceTo: 399.00,
        category: "Living Room",
        image: "https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg",
        description: "Sofá de 3 lugares com design contemporâneo.",
        inStock: true,
        sale: true
    },
    {
        id: 20,
        name: "Cadeirão Premium",
        price: 92.00,
        priceFrom: 85.00,
        priceTo: 99.00,
        category: "Living Room",
        image: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
        description: "Cadeirão premium com estofado de alta qualidade.",
        inStock: true,
        sale: true
    },
    {
        id: 21,
        name: "Mesa de Apoio Minimalista",
        price: 59.50,
        priceFrom: 49.00,
        priceTo: 70.00,
        category: "Living Room",
        image: "https://images.pexels.com/photos/37347/pexels-photo-37347.jpeg",
        description: "Mesa de apoio com design minimalista.",
        inStock: true,
        sale: false
    },
    {
        id: 22,
        name: "Candeeiro Cobre",
        price: 70.00,
        priceFrom: 60.00,
        priceTo: 80.00,
        category: "Living Room",
        image: "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg",
        description: "Candeeiro com acabamento em cobre.",
        inStock: true,
        sale: false
    }
];

// Função para buscar produtos por categoria
function getProductsByCategory(category) {
    if (category === 'all') return products;
    return products.filter(p => p.category === category);
}

// Função para buscar produto por ID
function getProductById(id) {
    return products.find(p => p.id === parseInt(id));
}

// Função para buscar produtos em promoção
function getSaleProducts() {
    return products.filter(p => p.sale);
}