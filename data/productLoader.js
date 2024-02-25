let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function hasCart(pid){
    return cart.find(p => p.ProductID === pid);
}

export function productLoader(products,productsContainer,isCartPage){
    productsContainer.innerHTML="";
    for(let product of products){
        let mdiv = document.createElement("div");
        mdiv.classList.add("card","card-vertical","d-flex","direction-column","relative","shadow");
        
        mdiv.innerHTML = 
        `<div class="card-image-container">
            <img class="card-image" src="${product.Image}" alt="${product.ImageAltText}">
        </div>
        <div class="card-details">
            <div class="card-title">${product.Name}</div>
            <div class="card-description">
                <p class="card-des">${product.Brand}</p>
                <p class="card-price">
                    $${product.NewPrice}
                    <span class="price-strike-through">$${product.OldPrice}</span>
                    <span class="discount">(${product.Discount}% OFF)</span>
                </p>
                <p class="card-price">
                    <i class="ri-star-fill star"></i> ${product.Rating}
                </p>
            </div>
            <div class="cta-btn">
                <button id=${product.ProductID} class="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                    <i class="ri-shopping-cart-2-fill"></i> ${isCartPage ? "Remove from Cart" : (hasCart(product.ProductID) ? "Go to Cart" : "Add to Cart")}
                </button>
            </div>
        </div>`;

        productsContainer.appendChild(mdiv);
    }
}

export function productLoaderHorizontal(products,productsContainer){
    productsContainer.innerHTML="";
    for(let product of products){
        let mdiv = document.createElement("div");
        mdiv.classList.add("card","card-horizontal","d-flex","shadow");
       
        mdiv.innerHTML = 
        `
        <div class="card-horizontal d-flex shadow">
            <div class="card-hori-image-container relative">
                <img class="card-image" src="${product.Image}" alt="${product.ImageAltText}">
            </div>
            <div class="card-details d-flex direction-column">
                    <div class="card-title">${product.Name}</div>
                    <div class="card-description">
                        <p class="card-des">${product.Brand}</p>
                        <p class="card-price">$${product.NewPrice}<span class="price-strike-through padding-all-8">$${product.OldPrice}</span>
                            <span class="discount padding-all-8">(${product.Discount}% OFF)</span>
                        </p>
                    </div>
                    <div class="quantity-container d-flex gap">
                        <p class="q-title">Quantity: </p>
                        <div class="count-container d-flex align-center gap">
                            <button class="count decrease">-</button>
                            <span class="count-value">1</span>
                            <button class="count increase">+</button>
                        </div>
                    </div>
                    <div class="cta-btn d-flex gap">
                        <div class="cta-btn">
                            <button id=${product.ProductID} class="button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin">${"Remove from Cart"}</button>
                        </div>
                        <div class="cta-btn">
                            <button class="button hori-btn btn-outline-primary btn-icon d-flex align-center justify-center gap cursor btn-margin">
                            ${"Move to ❤️"}</button>
                        </div>
                    </div>
            </div>
        </div>
        `

        productsContainer.appendChild(mdiv);
    }
}

