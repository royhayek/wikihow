import React from 'react';
import { Text, View, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native';
import HTML from 'react-native-render-html';
import { COLORS } from '../theme/color';
import { URI } from '../variables';
import FastImage from 'react-native-fast-image';
import * as RootNavigation from '../navigators/RootNavigation';
import { mvs } from 'react-native-size-matters';
import { withTranslation } from 'react-i18next';

const ProfileArticleItem = ({ t, article }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => RootNavigation.push('ArticleDetails', { articleId: article.id })}>
        <View style={styles.headerContainer}>
          <FastImage
            style={styles.image}
            source={{ uri: URI + '/uploads/articles/' + article.image }}
          />
          <View style={{ flexDirection: 'column', flex: 1 }}>
            <Text style={styles.howTo}>{t('HOW_TO')}</Text>
            <Text style={styles.title}>{article.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <HTML contentWidth={width} source={{ html: article.description }} tagsStyles={tagsStyles} />
      <View style={styles.divider} bgColor={COLORS.vampireGrey} thickness={0.5} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1
  },
  image: {
    width: 120,
    height: 90,
    borderRadius: 14,
    alignSelf: 'center',
    marginRight: 20
  },
  howTo: {
    marginTop: 5,
    color: COLORS.granite,
    fontSize: 13,
    lineHeight: 13,
    marginBottom: 2
  },
  title: {
    flex: 1,
    color: 'green',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
    lineHeight: 22
  },
  divider: {
    marginVertical: 20,
    backgroundColor: COLORS.vampireGrey,
    height: mvs(0.5)
  }
});

const tagsStyles = {
  body: {
    fontSize: 16,
    color: COLORS.davyGrey,
    lineHeight: 25
  }
};

export default withTranslation()(ProfileArticleItem);
