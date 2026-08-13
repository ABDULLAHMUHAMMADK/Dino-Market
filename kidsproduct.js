

const products = [
  {
    id: 1,
    name: "suit",
    category: "pent",
    price: 60,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800"
  },
  {
    id: 2,
    name: "jacket",
    category: "coat",
    price: 85,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800"
  },
  {
    id: 3,
    name: "dress",
    category: "gown",
    price: 45,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800"
  },
  {
    id: 4,
    name: "shoes",
    category: "sneakers",
    price: 70,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800"
  },
  {
    id: 5,
    name: "shirt",
    category: "casual",
    price: 30,
    image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800"
  },
  {
    id: 6,
    name: "bag",
    category: "handbag",
    price: 55,
    image: "https://images.unsplash.com/photo-1542060748-10c28b62716f?w=800"
  },
  {
    id: 7,
    name: "sneakers",
    category: "sports",
    price: 65,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
  },
  {
    id: 8,
    name: "watch",
    category: "accessory",
    price: 120,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800"
  }
];

const listingView = document.getElementById('listingView');
const detailView = document.getElementById('detailView');
const productGrid = document.getElementById('productGrid');
const backLink = document.getElementById('backLink');

function renderGrid() {
  productGrid.innerHTML = products
    .map(
      (product) => `
    <a href="#" class="product-card" data-id="${product.id}">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.category}</p>
      <p class="price">$${product.price}</p>
    </a>
  `
    )
    .join('');


  document.querySelectorAll('.product-card').forEach((card) => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const id = Number(card.getAttribute('data-id'));
      showDetail(id);
    });
  });
}
function showDetail(id) {
  const product = products.find((p) => p.id === id);
  if (!product) return;

  document.getElementById('mainImage').src = product.image;
  document.getElementById('mainImage').alt = product.name;
  document.getElementById('productName').textContent = product.name;
  document.getElementById('productCategory').textContent = product.category;
  document.getElementById('productPrice').textContent = '$' + product.price.toFixed(2);

  const thumbnailRow = document.getElementById('thumbnailRow');
  const thumbs = [product.image, product.image, product.image, product.image];

  thumbnailRow.innerHTML = thumbs
    .map(
      (imgSrc, index) => `
    <img src="${imgSrc}" class="${index === 0 ? 'active' : ''}" onclick="changeImage(this)">
  `
    )
    .join('');

  listingView.style.display = 'none';
  detailView.style.display = 'block';
  window.scrollTo(0, 0);
}
function changeImage(thumb) {
  document.getElementById('mainImage').src = thumb.src;
  document.querySelectorAll('.thumbnail-row img').forEach((img) => img.classList.remove('active'));
  thumb.classList.add('active');
}

backLink.addEventListener('click', (e) => {
  e.preventDefault();
  detailView.style.display = 'none';
  listingView.style.display = 'block';
  window.scrollTo(0, 0);
});

const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');

if (hamburgerBtn && navLinks) {
  hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburgerBtn.classList.toggle('open');
  });
}

renderGrid();