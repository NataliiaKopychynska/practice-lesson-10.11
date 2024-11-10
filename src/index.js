import './styles/normalize.css';
import './styles/index.css';
import { getAllProducts, getProductById } from './requests/products';
import {
  createMarkupAllProducts,
  createMarkupOneProduct,
} from './services/markupService';

const container = document.querySelector('#allProducts');
const productForm = document.querySelector('#singleProductForm');
const singleProduct = document.querySelector('#singleProduct');

productForm.addEventListener('submit', renderProductById);

// getAllProducts()
//   .then(data => {
//     container.insertAdjacentHTML(
//       'beforeend',
//       createMarkupAllProducts(data.products)
//     );
//   })
//   .catch(error => console.log(error));

async function renderAllProducts() {
  const data = await getAllProducts();
  container.insertAdjacentHTML(
    'beforeend',
    createMarkupAllProducts(data.products)
  );
}

async function renderProductById(event) {
  event.preventDefault();

  singleProduct.innerHTML = '';

  const inputValueId = event.target.elements.id.value;

  const productById = await getProductById(inputValueId);

  singleProduct.insertAdjacentHTML(
    'beforeend',
    createMarkupOneProduct(productById)
  );

  event.target.reset();
}

renderAllProducts();
