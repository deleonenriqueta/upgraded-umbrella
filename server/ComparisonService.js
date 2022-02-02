const axios = require('axios');
require('dotenv').config();
const CONFIG = require('../config.js');


const createProductObj = (productId) => {
  return axios({
      baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp',
      url: `/products/${productId}`,
      method: 'get',
      headers: { 'Authorization': CONFIG.API_TOKEN }
  });
}

const addRatingsData = (productId) => {
  return axios({
    baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp',
    // url: `/reviews/meta/?product_id=${productId}`,
    url: 'reviews/meta',
    method: 'get',
    headers: { 'Authorization': CONFIG.API_TOKEN },
    params: {product_id: productId}
  });
}

const addRelatedData = (productId) => {
  return axios({
    baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp',
    url: `/products/${productId}/related/`,
    method: 'get',
    headers: { 'Authorization': CONFIG.API_TOKEN },
  });
}

const addImageData = (productId) => {
  return axios({
    baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp',
    url: `/products/${productId}/styles/`,
    method: 'get',
    headers: { 'Authorization': CONFIG.API_TOKEN },
  });
}

module.exports = {
  createProductObj,
  addRatingsData,
  addRelatedData,
  addImageData
}