import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategories} from '../redux/actions/CategoryActions';
import CategoryList from '../components/CategoryList';

const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const categories = useSelector(state => state.categoryReducer.categories);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerStyle}>Categories</Text>
      </View>
      <View style={styles.background}>
        <CategoryList categories={categories} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 18,
  },
  headerStyle: {
    color: '#222222',
    fontSize: 18,
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    margin: 10,
    elevation: 0,
    backgroundColor: '#f3f3f3',
  },
  container: {
    backgroundColor: 'white',
    paddingVertical: 10,
  },
});

export default Categories;
