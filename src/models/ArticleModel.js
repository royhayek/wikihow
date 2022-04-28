import Realm from 'realm';

class ArticleModel {}
ArticleModel.schema = {
  name: 'ArticleModel',
  primaryKey: 'id',
  properties: {
    id: {type: 'string'},
  },
};

export default ArticleModel;
