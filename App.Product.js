// ===== Hamburger Menu (dono pages pe kaam karega) =====
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');

if (hamburgerBtn && navLinks) {
  hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburgerBtn.classList.toggle('open');
  });
}

// ===== Product Grid: map() loop se cards banao (sirf kids.html pe) =====
const productGrid = document.getElementById('productGrid');

if (productGrid) {
  productGrid.innerHTML = products
    .map(
      (product) => `
    <a href="kidsProduct.html?id=${product.id}" class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.category}</p>
      <p class="price">$${product.price}</p>
    </a>
  `
    )
    .join('');
}
