import apiInstance from '../services/api.js';

export async function getAllProducts() {
  try {
    const { data } = await apiInstance.get('/products');
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getProductById(id) {
  try {
    const { data } = await apiInstance.get(`/products/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function addProduct(newProduct) {
  try {
    const { data } = await apiInstance.post(`/products/add`, newProduct);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
