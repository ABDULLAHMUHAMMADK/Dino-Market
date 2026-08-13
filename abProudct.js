const product_div = document.getElementById("product-detail");

function renderProduct() {
  const urlPram = new URLSearchParams(window.location.search),
    productId = parseInt(urlPram.get("id"));

  const product = products.find((p) => {
   return p.id === productId;
  });


  product_div.innerHTML= `
  
  <div class="product-image">
            <div class="big_img">
              <img
                src="${product.image}"
                alt="prouduct img"
              />
            </div>
            <div class="small_img_div">
              <img
               src="${product.image}"
                alt="prouduct img"
              />
              <img
               src="${product.image}"
                alt="prouduct img"
              />
              <img
               src="${product.image}"
                alt="prouduct img"
              />
              <img
               src="${product.image}"
                alt="prouduct img"
              />
            </div>
          </div>



<div class="product-info">
            <h1 class="product-title">${product.name}</h1>
            <h3 class="product-category">${product.category}</h3>
            <p class="product-price">${product.price}</p>

            <div class="product-description-section">
              <h4>Description</h4>
              <p>${product.description}</p>
            </div>

            <button class="add-to-cart">
              <i class="fa-solid fa-cart-plus"></i> Add to Cart
            </button>
            <div class="product-details-section">
              <h4>Product Details</h4>
              <ul>
                <li><span>Material:</span> Premium quality</li>
                <li><span>Color:</span> As shown in image</li>
                <li><span>Size:</span> Standard fit</li>
                <li><span>Care:</span> Machine washable</li>
              </ul>
            </div>

          </div>




  
  
  `
}
renderProduct();
