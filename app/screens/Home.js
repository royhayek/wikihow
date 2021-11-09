import React, {useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SectionHeader from '../components/SectionHeader';
import ArticleList from '../components/ArticleList';
import {fetchTrendingArticles} from '../redux/actions/ArticleActions';
import {useDispatch, useSelector} from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrendingArticles());
  }, []);

  const trendingArticles = useSelector(
    state => state.articleReducer.trendingArticles,
  );

  return (
    <View style={styles.mainContainer}>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.container}>
          <Text style={styles.welcomeTitle}>
            Welcome to wikiHow, the most trusted how-to site on the internet.
          </Text>
          <Text style={styles.welcomeSubtitle}>
            What will you learn on wikihow today?
          </Text>
          <Image
            style={styles.cover}
            source={{
              uri: 'https://www.wikihow.com/extensions/wikihow/homepage/images/books2.webp',
            }}
          />
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputRow}>
            <Icon
              style={{alignSelf: 'center'}}
              name="search"
              size={22}
              color="gray"
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search how to..."
            />
          </View>
        </View>
        <SectionHeader text="Trending How-To Articles" />
        <ArticleList articles={trendingArticles} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    height: 250,
    position: 'relative',
    paddingHorizontal: 15,
  },
  cover: {
    width: '45%',
    height: 120,
    position: 'absolute',
    right: 15,
    bottom: 0,
  },
  welcomeTitle: {
    fontSize: 26,
    textAlign: 'left',
    color: '#444F45',
    paddingTop: 15,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  welcomeSubtitle: {
    width: '50%',
    fontSize: 19,
    color: '#444f45',
    textAlign: 'left',
  },
  searchContainer: {
    backgroundColor: '#94B778',
    height: 72,
    paddingHorizontal: 15,
  },
  searchInputRow: {
    width: '100%',
    backgroundColor: '#F3F3F3',
    borderRadius: 8,
    marginTop: 14,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  searchInput: {
    textAlign: 'left',
    paddingHorizontal: 10,
    fontSize: 20,
    lineHeight: 36,
    color: '#69726A',
  },
});

const mapStateToProps = state => {
  const {articles} = state;
  return articles;
};

export default Home;
