import data from './data.js';
console.log(data);

const productList = document.getElementById("productList");

data.forEach((product) => {
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
                            `<td><i class="fas fa-circle"></i> ${spec.specName}</td>
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

    card.addEventListener("click", () => {
        console.log(product);
        window.location.href = `productDetails.html?productId=${product.id}`;
    });

    productList.appendChild(card);
});
