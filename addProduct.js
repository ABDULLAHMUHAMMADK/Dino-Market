const form = document.getElementById("productForm");
console.log("abdullah")
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("productName").value;
  const category = document.getElementById("productCategory").value;
  const price = parseFloat(document.getElementById("productPrice").value);
  const image = document.getElementById("productImage").value;
  const description = document.getElementById("productDescription").value;

  const newProduct = {
    id: Date.now(),
    name: name,
    category: category,
    price: price,
    image: image,
    description: description,
  };


  products.push(newProduct)
  localStorage.setItem("products",JSON.stringify(products))
//   console.log(JSON.parse(localStorage.getItem("products")))

form.reset();

window.location.href = "allProduct.html"
});
