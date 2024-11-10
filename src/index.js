import './styles/normalize.css';
import './styles/index.css';
import {
  getAllProducts,
  getProductById,
  addProduct,
} from './requests/products';
import {
  createMarkupAllProducts,
  createMarkupOneProduct,
  createMarkupNewProduct,
} from './services/markupService';

const container = document.querySelector('#allProducts');
const productForm = document.querySelector('#singleProductForm');
const singleProduct = document.querySelector('#singleProduct');
const newProductForm = document.querySelector('#newProductForm');
const newProductSection = document.querySelector('#newProductSection');

productForm.addEventListener('submit', renderProductById);
newProductForm.addEventListener('submit', handleNewProduct);
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

async function handleNewProduct(event) {
  event.preventDefault();

  const title = event.target.elements.title.value;
  const description = event.target.elements.description.value;
  const price = event.target.elements.price.value;

  const newProductObj = { title, description, price };

  const addedProduct = await addProduct(newProductObj);

  newProductSection.innerHTML = '';

  newProductSection.insertAdjacentHTML(
    'beforeend',
    createMarkupNewProduct(addedProduct)
  );
}
