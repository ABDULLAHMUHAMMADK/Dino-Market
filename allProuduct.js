const products = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones Pro",
    category: "Electronics",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description: "Premium over-ear headphones with 40-hour battery life"
  },
  {
    id: 2,
    name: "Classic Leather Backpack",
    category: "Fashion",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    description: "Handcrafted genuine leather backpack with laptop compartment"
  },
  {
    id: 3,
    name: "Smart Fitness Tracker Watch",
    category: "Electronics",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&h=500&fit=crop",
    description: "Track heart rate, sleep, and 20+ sports modes"
  },
  {
    id: 4,
    name: "Organic Cotton T-Shirt (3 Pack)",
    category: "Clothing",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    description: "100% organic cotton, breathable and eco-friendly"
  },
  {
    id: 5,
    name: "Stainless Steel Water Bottle",
    category: "Home & Living",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop",
    description: "Double-walled vacuum insulated, keeps drinks cold for 24 hours"
  },
  {
    id: 6,
    name: "Mechanical Gaming Keyboard RGB",
    category: "Electronics",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33a6a1d0?w=500&h=500&fit=crop",
    description: "Blue switches with customizable RGB lighting effects"
  },
  {
    id: 7,
    name: "Designer Sunglasses Aviator",
    category: "Fashion",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop",
    description: "Polarized UV400 protection with metal frame"
  },
  {
    id: 8,
    name: "Premium Yoga Mat with Carry Strap",
    category: "Sports",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500&h=500&fit=crop",
    description: "Non-slip 6mm thick mat for comfortable practice"
  },
  {
    id: 9,
    name: "Wireless Bluetooth Earbuds",
    category: "Electronics",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop",
    description: "IPX5 waterproof with noise-isolation technology"
  },
  {
    id: 10,
    name: "Minimalist Wall Clock",
    category: "Home & Living",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&h=500&fit=crop",
    description: "Silent quartz movement with modern design"
  },
  {
    id: 11,
    name: "Running Sneakers Air Max",
    category: "Clothing",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    description: "Lightweight cushioning for ultimate comfort during runs"
  },
  {
    id: 12,
    name: "Portable Power Bank 20000mAh",
    category: "Electronics",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=500&h=500&fit=crop",
    description: "Fast-charging with dual USB ports and LED indicator"
  },
  {
    id: 13,
    name: "Wooden Chopping Board Set (3 Pieces)",
    category: "Home & Living",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1594839749411-5f3943d4c6b9?w=500&h=500&fit=crop",
    description: "Bamboo wood with juice groove and built-in handles"
  },
  {
    id: 14,
    name: "Smartphone Camera Lens Kit",
    category: "Electronics",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=500&h=500&fit=crop",
    description: "Includes macro, wide-angle, and fisheye lenses"
  },
  {
    id: 15,
    name: "Cozy Knit Beanie Hat Winter",
    category: "Clothing",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500&h=500&fit=crop",
    description: "100% acrylic, one-size-fits-all with fold-over cuff"
  },
  {
    id: 16,
    name: "Ceramic Coffee Mug Set (4 Colors)",
    category: "Home & Living",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&h=500&fit=crop",
    description: "Microwave and dishwasher safe with ergonomic handle"
  }
  
];



      const ProductRender = document.getElementById("ProductRender");

     function cardRender(products){ 
const card= products.map(product =>{
        
      return  `
 <div class="card"  onclick= "viewProduct(${product.id})" >
                <img src="${product.image}" alt="">
                <h3>${product.name}</h3>
            <p>${product.description}</p>
                <p>${product.price}</p>
            </div>
            
 `    }).join("")




    ProductRender.innerHTML=card
     }

      function viewProduct(id){
    window.location.href=(`abProduct.html?id=${id}`)
    
 }
     cardRender(products)

 

      
