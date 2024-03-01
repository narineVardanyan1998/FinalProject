import data from './data.js';

function Slider() {
    const carouselSlides = document.querySelectorAll('.slide');
    const btnPrev = document.querySelector('.prev');
    const btnNext = document.querySelector('.next');
    const dotsSlide = document.querySelector('.dots-container');
    let currentSlide = 0;
  
    const activeDot = function (slide) {
        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
        document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('active');
    };
    activeDot(currentSlide);

    const changeSlide = function (slides) {
        carouselSlides.forEach((slide, index) => (slide.style.transform = `translateX(${100 * (index - slides)}%)`));
    };
    changeSlide(currentSlide);

    btnNext.addEventListener('click', function () {
        currentSlide++; 
        if (carouselSlides.length - 1 < currentSlide) {
            currentSlide = 0;
        };
        changeSlide(currentSlide);
        activeDot(currentSlide);
});
    btnPrev.addEventListener('click', function () {
        currentSlide--;
        if (0 >= currentSlide) {
            currentSlide = 0;
        }; 
        changeSlide(currentSlide);
        activeDot(currentSlide);
    });

    dotsSlide.addEventListener('click', function (e) {
        if (e.target.classList.contains('dot')) {
            const slide = e.target.dataset.slide;
            changeSlide(slide);
            activeDot(slide);
        }
    });
  };
Slider();

const sortedData = data.sort((a, b) => b.rating - a.rating);

const top9Products = sortedData.slice(0, 9);

console.log(top9Products);

const productList = document.getElementById("productList");

top9Products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("col-4");
    card.innerHTML = `
        ${product.image.map((image) => 
            `<img src="${image.url}" class="card-img-top" alt="${image.alt}">`
        ).join('')}
        <div class="card-img-overlay d-flex justify-content-end"></div>
        <div class="card-body">
            <h4 class="card-title">${product.name}</h4>
            ${product.categories.map((category) => 
                category.categoryName === "Electronics" ?
                    `<span class="badge bg-danger">${category.categoryName}</span>` :
                    `<span class="badge bg-primary">${category.categoryName}</span>`
            ).join('')}
            <p class="card-text">${product.details.description}</p>
            <div class="options d-flex flex-fill">
                <table class="table">
                    <tr class="d-flex justify-content-between">
                        ${product.details.specs.map((spec) => 
                            `<td><i class="fas fa-circle"></i> ${spec.specName}:</td>
                            <td>${spec.specValue}</td>`
                        ).join('')}
                    </tr>
                </table>
            </div>
            <div class="buy d-flex justify-content-between align-items-center">
                <div class="price text-success"><h5 class="mt-4">$${product.price}</h5></div>
                <a href="#" class="btn btn-danger mt-3"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
            </div>
        </div>
    `;
    
    productList.appendChild(card);

    card.addEventListener("click", () => {
        console.log(product);
        window.location.href = `productDetails.html?productId=${product.id}`;
    });
});
