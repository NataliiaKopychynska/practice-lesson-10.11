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
