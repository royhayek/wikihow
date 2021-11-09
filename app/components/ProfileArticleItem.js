import React from 'react';
import {Text, Image, View, StyleSheet, useWindowDimensions} from 'react-native';
import {DOMAIN} from '../api/ApiList';
import HTML from 'react-native-render-html';
import { Divider } from 'native-base';

const ProfileArticleItem = ({article}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.image}
          source={{uri: `${DOMAIN}uploads/articles/${article.image}`}}
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.howTo}>How To</Text>
          <Text style={styles.title}>{article.title}</Text>
        </View>
      </View>
      <HTML
        contentWidth={width}
        source={{html: article.description}}
        tagsStyles={tagsStyles}
      />
      <Divider style={styles.divider} bgColor="#515151" thickness={0.5} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  image: {
    width: 120,
    height: 90,
    borderRadius: 14,
    alignSelf: 'center',
    marginRight: 20,
  },
  howTo: {
    marginTop: 5,
    color: '#808080',
    fontSize: 13,
    lineHeight: 13,
    marginBottom: 2,
  },
  title: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
    lineHeight: 22,
  },
  divider: {
    marginVertical: 20,
    color: 'black',
  },
});

const tagsStyles = {
  body: {
    fontSize: 16,
    color: '#545454',
    lineHeight: 25,
  },
};

export default ProfileArticleItem;
