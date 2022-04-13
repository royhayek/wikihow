import axios from './axiosDeclaration';
import {APIS} from '../../api/ApiList';

export const getAbout = async () => {
  try {
    const about = await axios.get(APIS.GET_ABOUT);
    console.log(about);
    return about.data;
  } catch (err) {
    return console.log(err);
  }
};

