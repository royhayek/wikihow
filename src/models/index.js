import Realm from 'realm';

// importing the list of models of the USER APP!
//import all tables (realm- offline database)
import ArticleModel from './ArticleModel';

// defining the database structure
let realm = new Realm({
  schemaVersion: 2,
  schema: [ArticleModel],
  migration: (oldRealm, newRealm) => {
    // only apply this change if upgrading to schemaVersion 2
    if (oldRealm.schemaVersion < 1) {
      // const oldObjects = oldRealm.objects("UserModel");
      // const newObjects = newRealm.objects("UserModel");
      // adding the units variable to the User Model
      // for (let i = 0; i < oldObjects.length; i++) {
      //   newObjects[i].units = "metric";
      // }
    }
  },
});

// displaying the path of the realm file database
console.log('Realm Path: ', realm.path);

export default realm;
