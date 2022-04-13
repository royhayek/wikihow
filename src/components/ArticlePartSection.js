import React from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import {DOMAIN} from '../api/ApiList';
import HTML from 'react-native-render-html';
import {COLORS} from '../theme/color';
import {URI} from '../variables';
import FastImage from 'react-native-fast-image';

const ArticlePartSection = ({method}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.methodContainer}>
      <FastImage
        style={{height: 250}}
        source={{uri: URI + '/uploads/articles/methods/' + method.image}}
      />
      <View style={styles.methodBodyContainer}>
        <Text style={styles.methodNumber}>{method.number}</Text>
        <HTML
          contentWidth={width}
          source={{html: method.description}}
          tagsStyles={tagsStyles}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  methodContainer: {
    width: '100%',
    marginBottom: 20,
    textAlign: 'center',
    position: 'relative',
    backgroundColor: 'white',
  },
  methodBodyContainer: {
    flexDirection: 'row',
  },
  methodNumber: {
    fontSize: 30,
    color: COLORS.davyGrey,
    fontWeight: 'bold',
    lineHeight: 39,
    margin: 15,
  },
});

const tagsStyles = {
  body: {
    alignSelf: 'baseline',
    fontSize: 16,
    color: COLORS.davyGrey,
    width: '88%',
    lineHeight: 26,
  },
};

export default ArticlePartSection;
