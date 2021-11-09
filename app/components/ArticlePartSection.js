import React from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import {DOMAIN} from '../api/ApiList';
import HTML from 'react-native-render-html';

const ArticlePartSection = ({method}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.methodContainer}>
      <Image
        style={{height: 250}}
        source={{
          uri: `${DOMAIN}uploads/articles/methods/${method.image}`,
        }}
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
    flexWrap: 'wrap',
    marginHorizontal: 15,
  },
  methodNumber: {
    fontSize: 30,
    color: '#545454',
    fontWeight: 'bold',
    lineHeight: 39,
    paddingRight: 15,
  },
});

const tagsStyles = {
  body: {
    alignSelf:'baseline',
    fontSize: 16,
    color: '#545454',
    lineHeight: 26,
  },
};

export default ArticlePartSection;
