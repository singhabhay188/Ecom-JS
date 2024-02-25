import {products} from './data/data.js';
import {productLoader} from './data/productLoader.js';

let productsContainer = document.getElementById("productsContainer");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

productLoader(products,productsContainer,true);

productsContainer.addEventListener("click", function(e){
    let ele = e.target;
    if(ele.tagName !== "BUTTON"){
        ele = ele.parentElement;
    }
    if(ele.tagName === "BUTTON"){  
        let cid = ele.id;
        if(cart.find(p => p.ProductID === cid)){
            console.log("Product already in cart Going to cart page");
            location.href = "/cartecom/cart.html";
            return;
        }

        ele.innerHTML = `<i class="ri-shopping-cart-2-fill"></i> Go to Cart`;
        cart.push(products.find(p => p.ProductID === cid));
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(cart);
    }
})