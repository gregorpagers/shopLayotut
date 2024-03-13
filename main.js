let currentProducts = products;
const mainSpace = document.querySelector('main');
const collectCounter = document.querySelector('.collect-counter');
const collectAmount = document.querySelector('.collect-amount');
const nav = document.querySelector('nav');
const menuBtn = document.querySelector('.burger');
const sideNav = document.querySelector('.side-nav');
const collectCounterTab = [];
let colletCounterTabLength = 0;
let amount = 0;
let categories = new Set(); //set nie możę mieć powtórzonych wartości
const navMainPageBtn = document.querySelector('.nav-main-page-button');
const navAllProductsBtn = document.querySelector('.nav-all-products');
const navCategoriesDiv = document.querySelector('.nav-categories-div');

const generateCategoriesInMenu = () => {

    navCategoriesDiv.innerHTML = "";

    currentProducts.forEach(product => {
        categories.add(product.category);  //add - metoda Set
    });

    categories.forEach(category => {
        const navCategory = document.createElement('button');
        navCategory.classList = "nav-category-button";
        navCategory.innerHTML = category.toString();
        navCategoriesDiv.appendChild(navCategory);
    }
    );

    const allCategoriesButtons = document.querySelectorAll('.nav-category-button');

    allCategoriesButtons.forEach(categoryButton => {
        categoryButton.addEventListener('click', () => {
            showMenu();
            showProdctsByCategory(this.document.activeElement.innerHTML);
        });
    });
}

const showProdctsByCategory = (categoryName) => {
    const productsByCategoryNameTab = [];
    currentProducts.forEach((product) => {
        if (categoryName.toString() === product.category.toString()) {
            productsByCategoryNameTab.push({
                id: product.id,
                name: `${product.name}`,
                description: `${product.description}`,
                category: `${product.category}`,
                price: product.price,
                image: `${product.image}`
            }) //push end
        }
    });//foreach
    renderProducts(productsByCategoryNameTab, categoryName);
}

const cartFunctions = () => {

    const addToCollectCounter = (quantity) => {
        collectCounter.classList.add("active");
        collectCounter.textContent = quantity;
    }

    const countOrderAmount = (collectTab) => {
        let amount = 0;
        // collectTab.forEach(productPrice => {
        //     productPrice += productPrice;
        // })

        for (let i = 0; i < collectTab.length; i++) {
            amount = amount + collectTab[i];
        }

        collectAmount.classList.add("active");
        collectAmount.textContent = amount + " zł";
    }

    const addToCartMiniBtns = document.querySelectorAll('.fa-cart-plus');
    const addToCartMini = (e) => {
        const productId = e.target.dataset.id;
        products.forEach(product => {
            if (productId === product.id.toString()) {
                collectCounterTab.push(product.price);
                collectCounterTabLength = collectCounterTab.length;
            }
        });
        addToCollectCounter(collectCounterTabLength);
        countOrderAmount(collectCounterTab);
    }

    addToCartMiniBtns.forEach((addToCartMiniBtn) => {
        addToCartMiniBtn.addEventListener('click', addToCartMini);
    });

}

const loadProduct = () => {

    const sliderElement = document.querySelector('header');
    const previewBtns = document.querySelectorAll('.preview');

    const showProduct = (e) => {
        if (sliderElement)
            sliderElement.remove();

        currentProducts.forEach(product => {
            if (e.target.dataset.id === product.id.toString()) {
                mainSpace.innerHTML = `
                <div class="product-wrapper">
                    <div class="product-photo">
                        <div class="photo"><img src="${product.image}" alt="${product.name}"></div>
                    </div>
                    <div class="product-collect">
                        <h2>${product.name}</h2>
                        <div class="product-price">${product.price} zł</div>
                        <div class="product-volume">
                            <div class="label"><label for="volume">Ilość (kg):</label></div>
                            <input type="number" id="volume" name="volume" min="1" value="1">
                        </div>
                        <button data-id="${product.id}">Dodaj do koszyka</button>
                    </div>
                    <div class="product-description">
                        ${product.description}
                    </div>
                </div> 
                `
            }
        })

    }

    previewBtns.forEach((previewBtn) => {
        previewBtn.addEventListener('click', showProduct);
    });
}

const renderProducts = (products, buttonCategoryName) => {
    console.log(buttonCategoryName);
    const sliderWraper = document.querySelector('.slider');
    if (sliderWraper) { sliderWraper.remove(); };
    mainSpace.innerHTML = `
    <div class="products">
        <h3>${buttonCategoryName === undefined ?
            'Wszystkie produkty' :
            buttonCategoryName}</h3>
        <div class="products-wrapper">

        </div>
    </div>
    `
    const productsWrapper = document.querySelector('.products-wrapper');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList = "product";
        productDiv.innerHTML = `
        <div class="product-image" style="background-image:url(${product.image})">
            <div class="overlay"></div>
            <div class="preview" data-id="${product.id}">Podgląd</div>
        </div>
        <div class="product-title product-name-btn">${product.name}</div>
        <div class="product-price"><i class="fas fa-cart-plus" data-id=${product.id}></i>${product.price} zł</div>
    `
        productsWrapper.appendChild(productDiv);
    });
    cartFunctions();
    loadProduct();
}

const renderMainPage = (products) => {

    const sliderWraper = document.querySelector('.slider');

    if (sliderWraper) { console.log(sliderWraper); }
    else {
        const slider = document.createElement('header');
        slider.classList = "slider";
        slider.innerHTML = `
        <div class="description-wrapper">
            <h2>Świeżość jakiej oczekujesz</h2>
            <p>Opis najlepszego produktu w najlepszej możliwej cenie do uzgodnienia</p>
            <button>Sprawdź</button>
        </div>
        <div class="arrow-left"><i class="fa-solid fa-chevron-left"></i></div>
        <div class="arrow-right"><i class="fa-solid fa-chevron-right"></i></div>
    `
        nav.after(slider);
    }

    mainSpace.innerHTML = `
        <div class="bestsellers">
            <h3>Bestsellery</h3>
            <div class="bestsellers-wrapper">
            
            </div>
        </div>
        <div class="show-all">
            <button class="showAllProducts">Pokaż wszystkie produkty</button>
        </div>
        <div class="recommended">
            <h3>Polecane dla Ciebie</h3>
        </div>
    `

    const bestsellersWrapper = document.querySelector('.bestsellers-wrapper');
    products.forEach(product => {
        if (product.bestseller === true) {
            const bestsellerDiv = document.createElement('div');
            bestsellerDiv.classList = "bestseller";
            bestsellerDiv.innerHTML = `
                <div class="bestseller-image" style="background-image: url(${product.image});">
                    <div class="overlay"></div>
                    <div class="preview" data-id="${product.id}">Podgląd</div>
                </div>
                <div class="bestseller-title product-name-btn">${product.name}</div>
                <div class="bestseller-price"><i class="fas fa-cart-plus" data-id="${product.id}"></i>${product.price} zł</div>
            `
            bestsellersWrapper.appendChild(bestsellerDiv);
        }
    });

    const recommendedWrapper = document.querySelector('.recommended');
    products.forEach(product => {
        if (product.recommend === true) {
            const recommendDiv = document.createElement("div");
            recommendDiv.classList = "recommend";
            recommendDiv.innerHTML = `
                <div class="recommend-image" style="background-image: url(${product.image});"></div>
                <div class="overlay"><button class="preview" data-id="${product.id}">Sprawdź</button></div>
                <div class="recommend-title product-name-btn">${product.name}</div>
                <div class="recommend-price"><i class="fas fa-cart-plus" data-id="${product.id}"></i>${product.price} zł</div>
            `
            recommendedWrapper.appendChild(recommendDiv);
        }
    });

    cartFunctions();
    loadProduct();
    generateCategoriesInMenu();

    const showAllProductsBtn = document.querySelector(".showAllProducts");
    showAllProductsBtn.addEventListener("click", () => {
        const sliderElement = document.querySelector('header');
        sliderElement.remove();
        renderProducts(currentProducts);
    })
}

const showMenu = () => {
    sideNav.classList.toggle("active");
}

menuBtn.addEventListener('click', showMenu);
navMainPageBtn.addEventListener('click', () => {
    showMenu();
    renderMainPage(currentProducts);
});
navAllProductsBtn.addEventListener('click', (e) => {
    console.log(e.target.textContent);
    renderProducts(currentProducts, e.target.textContent);
    showMenu();
})
// document.onload = renderProducts(currentProducts);
document.onload = renderMainPage(currentProducts);