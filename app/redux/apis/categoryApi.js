import axios from './axiosDeclaration';
import {APIS} from '../../api/ApiList';

export const getAllCategories = async () => {
  try {
    const categories = await axios.get(APIS.GET_CATEGORIES);
    return categories.data;
  } catch (err) {
    return console.log(err);
  }
};

export const getCategoryArticles = async payload => {
  try {
    const articles = await axios.get(`${APIS.GET_CATEGORIES}/${payload.id}`);
    return articles.data;
  } catch (err) {
    return console.log(err);
  }
};
