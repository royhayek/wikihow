import axios from './axiosDeclaration';
import {APIS} from '../../api/ApiList';

export const getAuthorInfo = async payload => {
  console.log('authorId', payload.id);

  try {
    const author = await axios.get(`${APIS.GET_AUTHORS}/${payload.id}`);
    console.log(author);
    return author.data;
  } catch (err) {
    return console.log(err);
  }
};
