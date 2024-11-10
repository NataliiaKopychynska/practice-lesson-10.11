import './styles/normalize.css';
import './styles/index.css';
import { getAllProducts } from './requests/products';
import { createMarkupAllProducts } from './services/markupService';

const container = document.querySelector('#allProducts');

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

renderAllProducts();
