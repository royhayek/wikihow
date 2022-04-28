import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import {URI} from '../variables';
import {fontSize} from '../theme/fontSize';
import {ms, mvs} from 'react-native-size-matters';
import {COLORS} from '../theme/color';

const CategoryListItem = ({category, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(category)}>
      <View style={styles.container}>
        <FastImage
          style={styles.image}
          source={{uri: URI + '/uploads/categories/' + category.item.icon}}
        />
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
          {category.item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: ms(15),
    paddingVertical: mvs(5),
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    marginRight: ms(10),
    width: ms(38),
    height: ms(38),
  },
  text: {
    flex: 1,
    fontSize: fontSize.size14,
    color: COLORS.forestGreen,
  },
});

export default CategoryListItem;
