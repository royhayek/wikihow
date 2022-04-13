import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import {DOMAIN} from '../api/ApiList';
import HTML from 'react-native-render-html';
import {Divider, NativeBaseProvider} from 'native-base';
import {COLORS} from '../theme/color';
import {URI} from '../variables';
import FastImage from 'react-native-fast-image';
import * as RootNavigation from '../navigators/RootNavigation';

const ProfileArticleItem = ({article}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          RootNavigation.push('ArticleDetails', {articleId: article.id})
        }>
        <View style={styles.headerContainer}>
          <FastImage
            style={styles.image}
            source={{uri: URI + '/uploads/articles/' + article.image}}
          />
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.howTo}>How To</Text>
            <Text style={styles.title}>{article.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <HTML
        contentWidth={width}
        source={{html: article.description}}
        tagsStyles={tagsStyles}
      />
      <NativeBaseProvider>
        <Divider
          style={styles.divider}
          bgColor={COLORS.vampireGrey}
          thickness={0.5}
        />
      </NativeBaseProvider>
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
    flex: 1,
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
    color: COLORS.granite,
    fontSize: 13,
    lineHeight: 13,
    marginBottom: 2,
    flexBasis: '50%',
  },
  title: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
    lineHeight: 22,
    width: '60%',
    flexBasis: '50%',
  },
  divider: {
    marginVertical: 20,
    color: 'black',
  },
});

const tagsStyles = {
  body: {
    fontSize: 16,
    color: COLORS.davyGrey,
    lineHeight: 25,
  },
};

export default ProfileArticleItem;
