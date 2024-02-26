let cart = JSON.parse(localStorage.getItem("cart")) || [];
import {productLoaderHorizontal} from '../data/productLoader.js';
let productsContainer = document.getElementById("productsContainer");

//my toast
let mytoast = document.getElementById("mytoast");

productLoaderHorizontal(cart,productsContainer);

productsContainer.addEventListener("click", function(e){
    let ele = e.target;
    if(ele.tagName === "BUTTON"){
        //check if button clicked is for removing item or not
        let cid = ele.id;
        if(cid.length === 3){
            let cp = cart.find(p => p.ProductID === cid);
            mytoast.classList.add("show");
            mytoast.innerHTML = `${cp.Name} removed from cart`;
            setTimeout(function(){
                mytoast.classList.remove("show");
            }, 2000);
            cart = cart.filter(p => p.ProductID !== cid);
            localStorage.setItem("cart", JSON.stringify(cart));
            updatePriceInfo();
            productLoaderHorizontal(cart,productsContainer);
        }
        else{
            if(ele.classList.contains('increase')){
                cid = ele.parentElement.parentElement.parentElement.children[3].children[0].children[0].id;
                if(cart.find(p => p.ProductID === cid).Qty === 10) return;
                let tcart = [...cart];
                cart = [];
                for(let product of tcart){
                    if(product.ProductID === cid){
                        product.Qty++;
                    }
                    cart.push(product);
                }
                localStorage.setItem("cart", JSON.stringify(cart));
                productLoaderHorizontal(cart, productsContainer);
                console.log('Quantity increased');
                updatePriceInfo();
            }
            else if(ele.classList.contains('decrease')){
                cid = ele.parentElement.parentElement.parentElement.children[3].children[0].children[0].id;
                if(cart.find(p => p.ProductID === cid).Qty === 1) return;
                let tcart = [...cart];
                cart = [];
                for(let product of tcart){
                    if(product.ProductID === cid){
                        product.Qty--;
                    }
                    cart.push(product);
                }
                localStorage.setItem("cart", JSON.stringify(cart));
                productLoaderHorizontal(cart, productsContainer);
                console.log('Quantity decreased');
                updatePriceInfo();
            }
        }
    }
});

function updatePriceInfo(){
    if(cart.length==0){
        document.getElementById("totalCost").innerHTML = `<h2 class="center">Your cart is empty</h2>`;
        return;
    }

    let originalPrice = 0;
    let discountPrice = 0;
    let deliveryPrice = 10;
    for(let product of cart){
        originalPrice += product.OldPrice * product.Qty;
        discountPrice += (product.OldPrice - product.NewPrice) * product.Qty;

        let temp = (product.OldPrice - product.NewPrice) * product.Qty;
    }
    console.log(discountPrice,originalPrice);

    let netPrice = originalPrice - discountPrice;
    let savings = originalPrice - netPrice;

    document.getElementById("totalPrice").innerText = `$${originalPrice.toFixed(2)}`;
    document.getElementById("totalItems").innerText = `Price (${cart.length}) items`;
    document.getElementById("discountPrice").innerText = `-$${discountPrice.toFixed(2)}`;
    document.getElementById("netPrice").innerText = `$${(netPrice+10).toFixed(2)}`;
    document.getElementById("savings").innerText = `You will save $${savings.toFixed(2)} on this order`;
}

updatePriceInfo();
