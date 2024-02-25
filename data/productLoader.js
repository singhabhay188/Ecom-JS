let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function productLoader(products,productsContainer,isMainPage){
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
                    <i class="ri-shopping-cart-2-fill"></i> ${isMainPage ? (cart.find(p=> p.ProductID === product.id) ? "Go to Cart" : "Add to Cart") : "Remove from Cart"}
                </button>
            </div>
        </div>`;

        productsContainer.appendChild(mdiv);
    }
}