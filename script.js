import {products} from './data/data.js';
import {productLoader} from './data/productLoader.js';

let productsContainer = document.getElementById("productsContainer");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

productLoader(products,productsContainer,false);

//my toast
let mytoast = document.getElementById("mytoast");

productsContainer.addEventListener("click", function(e){
    let ele = e.target;
    //also if we click shopping logo it will not work so we need to check if the parent is button
    if(ele.tagName !== "BUTTON"){
        ele = ele.parentElement;
    }
    if(ele.tagName === "BUTTON"){  
        let cid = ele.id;
        if(cart.find(p=>p.ProductID === cid)){
            location.href = "/cartecom/cart.html";
        }
        else{
            ele.innerHTML = `<i class="ri-shopping-cart-2-fill"></i> Go to Cart`;
            let cp = products.find(p => p.ProductID === cid);
            mytoast.classList.add("show");
            mytoast.innerHTML = `${cp.Name} added to cart`;
            setTimeout(function(){
                mytoast.classList.remove("show");
            }, 2000);
            cart.push(cp);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }
})