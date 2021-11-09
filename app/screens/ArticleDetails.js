import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchArticleDetails} from '../redux/actions/ArticleActions';
import HTML from 'react-native-render-html';
import {ScrollView} from 'react-native';
import {FlatList} from 'react-native';
import ArticlePartHeader from '../components/ArticlePartHeader';
import ArticlePartSection from '../components/ArticlePartSection';
import * as RootNavigation from '../RootNavigation';

const ArticleDetails = ({route}) => {
  const {width} = useWindowDimensions();
  const id = route.params.articleId;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticleDetails({id}));
  }, []);

  const details = useSelector(state => state.articleReducer.articleDetails);

  console.log(details);
  return (
    <ScrollView>
      <View>
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 25,
              color: '#222222',
              fontWeight: 'bold',
              marginTop: 15,
            }}>
            {details.title}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 12, color: '#222222', fontWeight: 'bold'}}>
              Co-authored by
            </Text>
            <TouchableOpacity
              onPress={() =>
                RootNavigation.navigate('Profile', {
                  authorId: details?.author?.id,
                })
              }>
              <Text
                style={{fontSize: 12, color: '#307530', fontWeight: 'bold'}}>
                {' '}
                {details?.author?.name}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.updatedDate}>
            Last Updated: {details.updated_at}
          </Text>
        </View>
        <View style={styles.tabContainer}>
          <View style={styles.tab}>
            <Text style={styles.tabTitle}>ARTICLE</Text>
            <View style={styles.tabLine} />
          </View>
        </View>
        <View style={styles.container}>
          <HTML
            contentWidth={width}
            source={{html: details.description}}
            tagsStyles={tagsStyles}
          />
        </View>
        <FlatList
          data={details.parts}
          keyExtractor={part => part.id}
          renderItem={part => {
            return (
              <View>
                <ArticlePartHeader
                  part={part.item}
                  count={details.parts.length}
                />
                <FlatList
                  data={part.item.methods}
                  keyExtractor={method => method.id}
                  renderItem={method => (
                    <ArticlePartSection method={method.item} />
                  )}
                />
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  updatedDate: {
    color: '#595959',
    fontSize: 12,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  tabContainer: {
    position: 'relative',
    borderWidth: 1,
    borderColor: '#E6EEE0',
    backgroundColor: '#f7faf6',
    marginHorizontal: -15,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowRadius: 6,
    elevation: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tab: {
    position: 'relative',
    marginHorizontal: 10,
    marginVertical: 0,
    fontWeight: 'bold',
    fontSize: 12,
    paddingVertical: 10,
  },
  tabTitle: {
    color: '#707070',
    fontSize: 12.8,
    fontWeight: 'bold',
  },
  tabLine: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#6d9d6c',
    height: 4,
    width: '90%',
    marginLeft: '5%',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  partsContainer: {
    width: '100%',
    position: 'relative',
    backgroundColor: 'white',
  },
  partsContainerHeader: {
    flexDirection: 'row',
  },
});

const tagsStyles = {
  body: {
    fontSize: 18,
    color: '#545454',
    lineHeight: 26,
  },
};

export default ArticleDetails;
