import axios from 'axios';

export const baseUrl = axios.create({
  baseURL: 'https://donev-nc-games.herokuapp.com/api',
});

export const getAllReviews = (category) => {
  return baseUrl
    .get('/reviews', {
      params: {
        category,
      },
    })
    .then((res) => {
      return res.data;
    });
};

export const getAllCategories = () => {
  return baseUrl.get('/categories').then((res) => {
    return res.data;
  });
};
