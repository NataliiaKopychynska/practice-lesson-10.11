import apiInstance from '../services/api.js';

export async function getAllProducts() {
  try {
    const { data } = await apiInstance.get('/products');
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
