let cart = JSON.parse(localStorage.getItem("cart")) || [];

import {productLoader} from '../data/productLoader.js';

let productsContainer = document.getElementById("productsContainer");

productLoader(cart,productsContainer,false);

productsContainer.addEventListener("click", function(e){
    let ele = e.target;
    if(ele.tagName !== "BUTTON"){
        ele = ele.parentElement;
    }
    if(ele.tagName === "BUTTON"){
        let cid = ele.id;
        cart = cart.filter(p => p.ProductID !== cid);
        localStorage.setItem("cart", JSON.stringify(cart));
        productLoader(cart,productsContainer,"Remove from Cart");
    }
});