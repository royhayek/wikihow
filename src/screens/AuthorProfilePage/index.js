import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Linking,
} from 'react-native';
import {Divider, NativeBaseProvider} from 'native-base';

// packages
import {connect} from 'react-redux';

// components
import SafeArea from '../../components/SafeArea';

// theme
import {styles} from './style';
import {COLORS} from '../../theme/color';

//actions
import {getAuthorDetails, navigateTo_ArticleScreen} from './actions';

// utils
import FastImage from 'react-native-fast-image';

import {URI} from '../../variables';
import ProfileArticleItem from '../../components/ProfileArticleItem';
import {validateWebsite} from '../../util/Helpers';

class index extends Component {
  componentDidMount() {
    const authorId = this.props.route.params.authorId;
    this.props.getAuthorDetails(authorId);
  }

  goToArticleScreen = article => {
    this.props.navigateTo_ArticleScreen('Article', {article});
  };

  render() {
    const {authorInfo} = this.props;
    console.log('authorInfo', authorInfo);

    return (
      <SafeArea>
        <ScrollView>
          <View style={styles.container}>
            <FastImage
              style={styles.avatar}
              source={{uri: URI + '/uploads/users/' + authorInfo.avatar}}
            />
            <TouchableOpacity
              style={styles.websiteBtn}
              onPress={() =>
                Linking.openURL(validateWebsite(authorInfo.website))
              }>
              <Text style={styles.websiteBtnText}>Website</Text>
            </TouchableOpacity>
            <View style={styles.moreInfoContainer}>
              <Text style={styles.name}>{authorInfo.name}</Text>
              <Text style={styles.bio}>{authorInfo.bio}</Text>
              <NativeBaseProvider>
                <Divider
                  style={styles.divider}
                  bgColor={COLORS.vampireGrey}
                  thickness={0.5}
                />
              </NativeBaseProvider>
              <Text style={styles.articlesHeader}>
                Co-authored Articles ({authorInfo.articles?.length}){' '}
              </Text>
              {authorInfo?.articles?.map(article => (
                <ProfileArticleItem key={article.id} article={article} />
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeArea>
    );
  }
}

function mapStateToProps({authorProfilePageRed}) {
  return {
    authorInfo: authorProfilePageRed.data,
  };
}

export default connect(mapStateToProps, {
  getAuthorDetails,
  navigateTo_ArticleScreen,
})(index);
