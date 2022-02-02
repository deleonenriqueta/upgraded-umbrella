const axios = require('axios');
require('dotenv').config();
const CONFIG = require('../config.js');

const getAllReviews = (productId) => {
  return axios({
    baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp',
    url: '/reviews',
    method: 'get',
    headers: {'Authorization' : CONFIG.API_TOKEN },
    params: {
      product_id: productId,
      sort: 'newest',
      count: 10
    }
  });
}

const getAllReviewsMeta = (productId) => {
  return axios({
    baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp',
    url: '/reviews/meta',
    method: 'get',
    headers: {'Authorization' : CONFIG.API_TOKEN },
    params: { product_id: productId }
  });
}

const addReview = (productId, rating, summary, body, recommend, name, email) => {
  return getAllReviewsMeta(productId).then(result => {
    return result.data.characteristics;
  }).then(characteristics => {
    let charId;
    let charValue;
    for (let element in characteristics) {
      charId = String(characteristics[element]['id']);
    }
    let characteristic = {};
    characteristic[charId] = 3;
    return axios({
      baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp',
      url: '/reviews',
      method: 'post',
      headers: {'Authorization' : CONFIG.API_TOKEN },
      data: {
        'product_id': productId,
        'rating': rating,
        'summary': summary,
        'body': body,
        'recommend': recommend,
        'name': name,
        'photos': [],
        'email': email,
        'characteristics': characteristic
      }
    }).catch(err => {
      console.log(`Error posting review for product ${productId}`, err);
    })
  })
}

const markHelpful = (reviewId) => {
  return axios({
    baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp',
    url: `/reviews/${reviewId}/helpful`,
    method: 'put',
    headers: {'Authorization' : CONFIG.API_TOKEN },
  });
}

const reportReview = (reviewId) => {
  return axios({
    baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp',
    url: `/reviews/${reviewId}/report`,
    method: 'put',
    headers: {'Authorization' : CONFIG.API_TOKEN },
  });
}

module.exports = {
  getAllReviews,
  getAllReviewsMeta,
  addReview,
  markHelpful,
  reportReview
}