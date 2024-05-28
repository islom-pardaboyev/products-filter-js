const productsContainer = document.getElementById('products-container');
const searchProducts = document.getElementById('searchProducts');

let products = [];

searchProducts.addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase();
  const filteredProducts = products.filter(product => product.title.toLowerCase().includes(value));
  displayProducts(filteredProducts);
});

const displayProducts = (products) => {
  productsContainer.innerHTML = '';
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('productsElement', "sm:col-span-12", "lg:col-span-4", "xl:col-span-4");
    productElement.innerHTML = `
            <img src="${product.images[0]}" alt="">
            <div class="p-3">
                <div class="flex mb-2 text-lg items-center justify-between">
                    <p class="font-medium">#${product.id}</p>
                    <h1 class="font-bold">${product.title}</h1>
                </div>
                <div class="flex items-center text-lg gap-3">
                        <i class="fa-solid fa-star text-yellow-400"></i>
                        <p class="font-medium">${product.rating}</p>
                </div>
            </div>`;
    productsContainer.appendChild(productElement);
  });
};

fetch('https://dummyjson.com/products')
  .then(resp => resp.json())
  .then(data => {
    products = data.products;
    displayProducts(products);
  })
  .catch(error => console.error('Error: ', error));