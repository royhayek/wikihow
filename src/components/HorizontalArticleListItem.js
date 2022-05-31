import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';
import * as RootNavigation from '../navigators/RootNavigation';
import { COLORS } from '../theme/color';
import { fontSize } from '../theme/fontSize';
import { URI } from '../variables';
import Entypo from 'react-native-vector-icons/Entypo';
import { t } from 'i18next';
import { withTranslation } from 'react-i18next';
import TimeAgo from 'react-native-timeago';

const HorizontalArticleListItem = ({ article }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        RootNavigation.navigate('ArticleDetails', { articleId: article.id });
      }}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={styles.imageThumbnail}
          source={{ uri: URI + '/uploads/articles/' + article.image }}
        />
        <View style={styles.informationText}>
          <Text style={styles.titleText} numberOfLines={2}>
            {article.title}
          </Text>
          <View style={styles.divider} />
          <View style={{ flexDirection: 'row', paddingHorizontal: ms(5) }}>
            <Entypo name="eye" size={15} color={COLORS.lightGray} />
            <Text style={styles.viewText}>
              {article.views} {article.views === 1 ? 'view' : t('VIEWS')}
            </Text>
            <View style={{ marginLeft: ms(10) }} />
            <Entypo name="back-in-time" size={15} color={COLORS.lightGray} />
            <TimeAgo time={article.created_at} style={styles.viewText} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: mvs(100),
    marginBottom: mvs(5),
    borderColor: COLORS.lightGray,
    borderWidth: ms(1)
  },
  imageThumbnail: {
    width: ms(100),
    height: mvs(100)
  },
  divider: {
    width: '100%',
    height: mvs(1),
    marginVertical: mvs(8),
    backgroundColor: COLORS.lightGray
  },
  informationText: {
    flex: 1,
    paddingTop: mvs(10),
    paddingBottom: mvs(5),
    color: COLORS.white
  },
  titleText: {
    fontSize: fontSize.size16,
    color: COLORS.white,
    paddingHorizontal: ms(5)
  },
  viewText: {
    marginLeft: ms(5),
    fontSize: fontSize.size13,
    color: COLORS.cloudyGrey
  }
});

export default withTranslation()(HorizontalArticleListItem);
