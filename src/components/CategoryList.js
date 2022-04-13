import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import CategoryListItem from './CategoryListItem';

const CategoryList = ({categories}) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.container}
      data={categories}
      keyExtractor={category => category.id}
      renderItem={category => <CategoryListItem category={category} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 10,
  },
});

export default CategoryList;
