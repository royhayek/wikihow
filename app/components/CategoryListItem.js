import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Actions} from 'react-native-router-flux';
import {APIS, BASE_URL, DOMAIN} from '../api/ApiList';
import * as RootNavigation from '../RootNavigation';

const CategoryListItem = ({category}) => {
  return (
    <TouchableOpacity
      onPress={() => RootNavigation.navigate('Articles', {category: category})}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: `${DOMAIN}uploads/categories/${category.item.icon}`}}
        />
        <Text style={styles.text}>{category.item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    marginRight: 5,
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 14,
    lineHeight: 16,
    color: '#307530',
  },
});

export default CategoryListItem;
