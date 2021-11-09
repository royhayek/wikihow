import axios from './axiosDeclaration';
import {APIS} from '../../api/ApiList';

export const getAllTrendingArticles = async () => {
  try {
    const articles = await axios.get(APIS.GET_ARTICLES);
    console.log(articles);
    return articles.data;
  } catch (err) {
    return console.log(err);
  }
};

export const getArticleDetails = async payload => {
  console.log('payload', payload.id);
  try {
    const details = await axios.get(`${APIS.GET_ARTICLES}/${payload.id}`);
    console.log(details);
    return details.data;
  } catch (err) {
    return console.log(err);
  }
};
