import {Divider} from 'native-base';
import React, {useEffect} from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {BASE_URL, DOMAIN} from '../api/ApiList';
import ProfileArticleItem from '../components/ProfileArticleItem';
import {fetchAuthorInfo} from '../redux/actions/AuthorActions';

const Profile = ({route}) => {
  const id = route.params.authorId;
  const dispatch = useDispatch();

  const authorInfo = useSelector(state => state.authorReducer.authorInfo);

  useEffect(() => {
    dispatch(fetchAuthorInfo({id}));
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={{uri: `${DOMAIN}uploads/users/${authorInfo.avatar}`}}
        />
        <TouchableOpacity
          style={styles.websiteBtn}
          onPress={() => console.log('website pressed')}>
          <Text style={styles.websiteBtnText}>Website</Text>
        </TouchableOpacity>
        <View style={styles.moreInfoContainer}>
          <Text style={styles.name}>{authorInfo.name}</Text>
          <Text style={styles.bio}>{authorInfo.bio}</Text>
          <Divider style={styles.divider} bgColor="#515151" thickness={0.5} />
          <Text style={styles.articlesHeader}>
            Co-authored Articles ({authorInfo.articles?.length}){' '}
          </Text>
          <FlatList
            data={authorInfo.articles}
            keyExtractor={article => article.id}
            renderItem={article => <ProfileArticleItem article={article.item} /> }
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  avatar: {
    marginTop: 10,
    width: 160,
    height: 160,
    borderRadius: 14,
    alignSelf: 'center',
  },
  websiteBtn: {
    backgroundColor: '#94b778',
    borderRadius: 7,
    padding: 0,
    marginVertical: 10,
    width: 230,
    borderWidth: 1,
    borderColor: '#94b778',
    alignSelf: 'center',
  },
  websiteBtnText: {
    color: '#fff',
    textAlign: 'center',
    lineHeight: 30,
    fontSize: 16,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingRight: 5,
    color: '#515151',
  },
  bio: {
    marginTop: 10,
    fontSize: 16,
    paddingRight: 5,
    color: '#545454',
    lineHeight: 25,
  },
  moreInfoContainer: {
    marginHorizontal: 15,
  },
  divider: {
    marginVertical: 20,
    color: 'black',
  },
  articlesHeader: {
    color: '#515151',
    fontSize: 19,
    marginBottom: 20,
  },
});

export default Profile;
