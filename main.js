let currentProducts = products;
const productsWrapper = document.querySelector('.products-wrapper');
const colletCounter = document.querySelector('.collect-counter');
const colletAmount = document.querySelector('.collect-amount');
const colletCounterTab = [];
let colletCounterTabLength = 0;


const renderProducts = (products) => {
    console.log(products);

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList = "product";
        productDiv.innerHTML = `
        <div class="product-image" style="background-image:url(${product.image})">
            <div class="overlay"></div>
            <div class="preview" data-id="${product.id}">Podgląd</div>
        </div>
        <div class="product-title">${product.name}</div>
        <div class="product-price"><i class="fas fa-cart-plus" data-id=${product.id}></i>${product.price} zł</div>
    `
        productsWrapper.appendChild(productDiv);
        console.log(product.image)
    });

}

document.onload = renderProducts(currentProducts);

const addToCollectCounter = (quantity) => {
    colletCounter.classList.add("active");
    console.log(quantity);
    colletCounter.textContent = quantity;
}
const addToCartMiniBtns = document.querySelectorAll('.fa-cart-plus');
const addToCartMini = (e) => {
    console.log(e.target.dataset.id);
    const productId = e.target.dataset.id;
    products.forEach(product => {
        if (productId == product.id) {
            console.log(product.name);
            colletCounterTab.push(product.price);
            colletCounterTabLength = colletCounterTab.length;
        }
    });
    console.log(colletCounterTabLength);
    addToCollectCounter(colletCounterTabLength);
}


addToCartMiniBtns.forEach((addToCartMiniBtn) => {
    addToCartMiniBtn.addEventListener('click', addToCartMini);
});








// <div class="product">
//     <div class="product-image">
//         <div class="overlay"></div>
//         <div class="preview">Podgląd</div>
//     </div>
//     <div class="product-title">Jabłko</div>
//     <div class="product-price"><i class="fas fa-cart-plus"></i>10,00 zł</div>
// </div> 