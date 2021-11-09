import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ArticleListItem from './ArticleListItem';

const ArticleList = ({articles}) => {
  return (
    <FlatList
      style={styles.container}
      scrollEnabled={false}
      data={articles}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      renderItem={article => <ArticleListItem article={article.item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 3,
  },
});

export default ArticleList;
