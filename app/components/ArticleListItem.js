import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import {DOMAIN} from '../api/ApiList';
import * as RootNavigation from '../RootNavigation';

const ArticleListItem = ({article}) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        RootNavigation.navigate('ArticleDetails', {articleId: article.id})
      }>
      <Image
        style={styles.imageThumbnail}
        source={{
          uri: `${DOMAIN}uploads/articles/${article.image}`,
        }}
      />
      <View style={styles.information}>
        <Text style={{fontSize: 11, color: '#808080'}}>How To</Text>
        <Text style={styles.title}>{article.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'column',
    margin: 2,
    borderColor: '#dfdfdf',
    borderWidth: 1,
    borderRadius: 5,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    height: 120,
  },
  information: {
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  title: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default ArticleListItem;
