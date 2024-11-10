export function createMarkupAllProducts(products) {
  return products
    .map(
      ({ thumbnail, title, description }) => `<li class="list-card">
        <img src="${thumbnail}" alt="${title}" />
        <h3>${title}</h3>
        <p class="description">${description}</p>
      </li>`
    )
    .join('');
}

export function createMarkupOneProduct({ thumbnail, title, description }) {
  return `<div class="list-card">
        <img src="${thumbnail}" alt="${title}" />
        <h3>${title}</h3>
        <p class="description">${description}</p>
      </div>`;
}

export function createMarkupNewProduct({ title, description, price }) {
  return `<div class="list-card">
        <h3>${title}</h3>
        <p class="description">${description}</p>
        <p class="description">${price}</p>
      </div>`;
}
