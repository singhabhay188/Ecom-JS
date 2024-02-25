let cart = JSON.parse(localStorage.getItem("cart")) || [];

import {productLoader} from '../data/productLoader.js';
import {productLoaderHorizontal} from '../data/productLoader.js';

let productsContainer = document.getElementById("productsContainer");

productLoaderHorizontal(cart,productsContainer);

productsContainer.addEventListener("click", function(e){
    let ele = e.target;
    if(ele.tagName === "BUTTON"){
        //check if button clicked is for removing item or not
        let cid = ele.id;
        if(cid.length === 3){
            cart = cart.filter(p => p.ProductID !== cid);
            localStorage.setItem("cart", JSON.stringify(cart));
            productLoaderHorizontal(cart,productsContainer);
        }
        else{
            if(ele.classList.contains('increase')){
                console.log('Quantity increased');
            }
            else if(ele.classList.contains('decrease')){
                console.log('Quantity decreased');
            }
        }
    }

    //check if button clicked is 
});