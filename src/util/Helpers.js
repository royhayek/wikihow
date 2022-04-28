import moment from 'moment';
import {Alert, Share} from 'react-native';
import realm from '../models';

export const formatDate = date => {
  return moment(date).format('MMM D, YYYY');
};

export const validateWebsite = website => {
  if (!website.includes('https://') || !website.includes('http://')) {
    return 'http://' + website;
  } else {
    return website;
  }
};

export const share = async ({title, message, callback}) => {
  try {
    const result = await Share.share({
      title: title,
      message: message,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
    callback();
  } catch (error) {
    Alert.alert(error.message);
    callback();
  }
};

export const bookmark = ({id, callback}) => {
  const articles = realm.objects('ArticleModel').filter(article => article.id === String(id));
  realm.write(() => {
    if (articles.length > 0) {
      realm.delete(
        realm.objects('ArticleModel').filter(ArticleModel => ArticleModel.id === String(id)),
      );
    } else {
      realm.create('ArticleModel', {id: String(id)}, true);
    }
  });
  callback();
};
