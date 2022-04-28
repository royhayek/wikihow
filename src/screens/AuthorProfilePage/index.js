import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Linking,
  RefreshControl,
} from 'react-native';

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
import Loader from '../../components/Loader';

import {validateWebsite} from '../../util/Helpers';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }
  componentDidMount() {
    const authorId = this.props.route.params.authorId;
    this.props.getAuthorDetails(authorId);
  }

  onRefresh = () => {
    const authorId = this.props.route.params.authorId;
    this.setState({refreshing: true});
    this.props.getAuthorDetails(authorId).then(() => this.setState({refreshing: false}));
  };

  goToArticleScreen = article => {
    this.props.navigateTo_ArticleScreen('Article', {article});
  };

  render() {
    const {loading, authorInfo} = this.props;

    return (
      <View>
        {loading ? (
          <Loader />
        ) : (
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
            }>
            <View style={styles.container}>
              <View>
                <FastImage
                  style={styles.avatar}
                  source={{uri: URI + '/uploads/users/' + authorInfo.avatar}}
                />
                <TouchableOpacity
                  style={styles.websiteBtn}
                  onPress={() => Linking.openURL(validateWebsite(authorInfo.website))}>
                  <Text style={styles.websiteBtnText}>Website</Text>
                </TouchableOpacity>
                <View style={styles.moreInfoContainer}>
                  <Text style={styles.name}>{authorInfo.name}</Text>
                  <Text style={styles.bio}>{authorInfo.bio}</Text>
                  <View style={styles.divider} />
                  <Text style={styles.articlesHeader}>
                    Articles ({authorInfo.articles?.length}){' '}
                  </Text>
                  {authorInfo?.articles?.map(article => (
                    <ProfileArticleItem key={article.id} article={article} />
                  ))}
                </View>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    );
  }
}

function mapStateToProps({authorProfilePageRed}) {
  return {
    authorInfo: authorProfilePageRed.data,
    loading: authorProfilePageRed.loading_screen,
  };
}

export default connect(mapStateToProps, {
  getAuthorDetails,
  navigateTo_ArticleScreen,
})(index);
