import moment from 'moment';

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
