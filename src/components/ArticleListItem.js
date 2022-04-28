import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import {ms, mvs} from 'react-native-size-matters';
import * as RootNavigation from '../navigators/RootNavigation';
import {COLORS} from '../theme/color';
import {fontSize} from '../theme/fontSize';
import {URI} from '../variables';

const ArticleListItem = ({article}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          RootNavigation.navigate('ArticleDetails', {articleId: article.id});
        }}>
        <Image
          style={styles.imageThumbnail}
          source={{uri: URI + '/uploads/articles/' + article.image}}
        />
        <View style={styles.informationText}>
          <Text style={{fontSize: 11, color: COLORS.granite}}>How To</Text>
          <Text style={styles.titleText} numberOfLines={2}>
            {article.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '50%',
  },
  container: {
    marginRight: ms(5),
    marginBottom: ms(5),
    borderColor: COLORS.gainsboro,
    borderWidth: ms(1),
    borderRadius: 5,
    height: mvs(190),
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    height: mvs(120),
  },
  informationText: {
    paddingTop: mvs(10),
    paddingHorizontal: ms(10),
    paddingBottom: mvs(5),
  },
  titleText: {
    fontSize: fontSize.size16,
    color: COLORS.black,
    fontWeight: 'bold',
  },
});

export default ArticleListItem;
