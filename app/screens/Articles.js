import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';
import {fetchCategoryArticles} from '../redux/actions/CategoryActions';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ArticleList from '../components/ArticleList';

const Articles = ({route}) => {
  const category = route.params.category.item;
  const dispatch = useDispatch();
  const payload = {
    id: category.id,
  };

  useEffect(() => {
    dispatch(fetchCategoryArticles(payload));
  }, []);

  const articles = useSelector(state => state.categoryReducer.articles);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.categoryInfo}>
          <Image
            style={styles.categoryCover}
            source={{
              uri: 'https://www.wikihow.com/extensions/wikihow/categories/images/Categories_Header_Arts.jpg',
            }}
          />
          <Text style={styles.categoryName}>{category.name}</Text>
          <View style={styles.categorySearchContainer}>
            <TextInput
              style={styles.categorySearchInput}
              placeholder="I want to learn how to..."
            />
            <Icon
              style={{alignSelf: 'center'}}
              name="search"
              size={15}
              color="gray"
            />
          </View>
        </View>
        <Text style={styles.categoryDescription}>{category.description}</Text>
        <Text style={styles.header}>{`Articles about ${category.name}`}</Text>
        <ArticleList articles={articles} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  categoryInfo: {
    height: 300,
    marginTop: 30,
    justifyContent: 'center',
  },
  categoryCover: {
    height: 300,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  categoryName: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
  categorySearchContainer: {
    backgroundColor: 'white',
    borderRadius: 30,
    height: 30,
    marginTop: 5,
    paddingLeft: 10,
    paddingRight: 20,
    width: '60%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  categorySearchInput: {
    color: '#767676',
    paddingVertical: 0,
    fontSize: 12,
    alignSelf: 'center',
  },
  categoryDescription: {
    fontSize: 16,
    color: '#000',
    lineHeight: 25,
    fontWeight: 'normal',
    marginTop: 15,
    marginBottom: 5,
    marginHorizontal: 5,
  },
  header: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    marginHorizontal: 4,
  },
});

export default Articles;
