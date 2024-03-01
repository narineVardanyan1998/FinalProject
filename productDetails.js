import products from './data.js';

const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('productId'));

const productData = products.find(product => product.id === productId);

if (productData) {
    const productDetailsContainer = document.getElementById('productDetails');

    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
     <div class="card-body">
         <div class="product-images">
           ${productData.image.map((img) => {
                 return `<img src="${img.url}" class="card-img-top" alt="${img.alt}" onerror="this.src='placeholder.jpg';">`;
           })}
                      </div>

              <div class="card-main">
                <div class="product-info">
                 <h2 class="card-title">${productData.name}</h2>
                 <div class="categories">
                      ${productData.categories.map((category) => {
                         return `<span class="badge ${category.categoryName === 'Electronics' ? 'bg-danger' : 'bg-primary'}">${category.categoryName}</span>`;
                     })}
                    </div>
                  <p class="card-text">${productData.details.description}</p>
                    <div class="specs">
                    ${productData.details.specs.map((spec) => 
                      `<td><i class="fas fa-circle"></i> ${spec.specName}:</td>
                      <td>${spec.specValue}</p></td>`
                  ).join('')}
                      </div>
                   <div class="buy d-flex justify-content-between align-items-center">
                       <div class="price text-success"><h5 class="mt-4">$${productData.price}</h5></div>
                   <a href="#" class="btn btn-danger mt-3"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                     </div>
                    </div>
                    </div>
                    </div>
                   `;

productDetailsContainer.appendChild(card);
    productDetailsContainer.appendChild(card);
} else {
    console.error('Product not found');
    // You may redirect the user to an error page or handle the error in another way.
}
