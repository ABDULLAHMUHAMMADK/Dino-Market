// ===== URL se product id nikalo (?id=1, ?id=2, ...) =====
const params = new URLSearchParams(window.location.search);
const productId = Number(params.get('id'));

// ===== Us id ka product products.js array mein se dhundo =====
const product = products.find((p) => p.id === productId);

if (product) {
  // Page title
  document.title = product.name + ' - Dine Market';

  // Main image
  const mainImage = document.getElementById('mainImage');
  mainImage.src = product.image;
  mainImage.alt = product.name;

  // Text content
  document.getElementById('productName').textContent = product.name;
  document.getElementById('productCategory').textContent = product.category;
  document.getElementById('productPrice').textContent = '$' + product.price.toFixed(2);

  // Thumbnails: same image 4 baar (jaisa original design mein tha) — map() se
  const thumbnailRow = document.getElementById('thumbnailRow');
  const thumbs = [product.image, product.image, product.image, product.image];

  thumbnailRow.innerHTML = thumbs
    .map(
      (imgSrc, index) => `
    <img src="${imgSrc}" class="${index === 0 ? 'active' : ''}" onclick="changeImage(this)">
  `
    )
    .join('');
} else {
  // Agar id na mile ya galat ho to listing page pe wapas bhej do
  document.querySelector('.detail-info').innerHTML = '<p>Product not found.</p>';
}

// ===== Thumbnail click pe main image change karo =====
function changeImage(thumb) {
  document.getElementById('mainImage').src = thumb.src;
  document.querySelectorAll('.thumbnail-row img').forEach((img) => img.classList.remove('active'));
  thumb.classList.add('active');
}
