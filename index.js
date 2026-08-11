const products = [
  {
    image: "image/Female2.png",
    name: "Winter Coat",
    price: "$120",
  },

  {
    image: "image/Female1.png",
    name: "Silk Blouse",
    price: "$60",
  },

  {
    image: "image/Female3.png",
    name: "Suit",
    price: "$60",
  },

  {
    image: "image/male1.png",
    name: "T-Shirt",
    price: "$40",
  },
];

const sliderTrack = document.getElementById("sliderTrack");

// Duplicate products for infinite scrolling
const duplicatedProducts = [...products, ...products];

duplicatedProducts.forEach((product, index) => {
  const productCard = document.createElement("div");

  productCard.className = "product-card";

  productCard.innerHTML = `
  
        <div class="product-image-wrapper">

            <img
                src="${product.image}"
                alt="${product.name}"
                class="product-image"
                loading="lazy"
            >

        </div>

        <div class="product-info">

            <h3 class="product-name">
                ${product.name}
            </h3>

            <p class="product-price">
                ${product.price}
            </p>

        </div>
    `;

  sliderTrack.appendChild(productCard);
});
