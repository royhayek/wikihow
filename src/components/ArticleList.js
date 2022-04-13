import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ArticleListItem from './ArticleListItem';

const ArticleList = ({articles}) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={articles}
      keyExtractor={(item, index) => index.toString()}
      renderItem={article => <ArticleListItem article={article.item} />}
    />
  );
};

const styles = StyleSheet.create({});

export default ArticleList;
