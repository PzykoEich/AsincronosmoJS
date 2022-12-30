import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1'

function fetchData(urlApi){
  return fetch(urlApi);
}

fetchData(`${API}/products`)
  .then(response => response.json())
  .then(products => {
    console.log(products);
  })
  .then(() => {
    console.log('Ok');
  })
  .catch(error => console.error(error));



fetchData(`${API}/products`)
  .then(response => response.json())
  .then(products => {
    return fetchData(`${API}/products/${products[0].id}`)
  })
  .then(response => response.json())
  .then(product => {
    return fetchData(`${API}/gategories/${product.category.id}`)
  })
  .then(response => response.json())
  .then(category => {
    console.log(category.name);
  })
  .catch(error => console.error(error));