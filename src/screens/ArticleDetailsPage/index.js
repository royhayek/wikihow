import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  Modal,
  Share,
  Alert,
  RefreshControl,
} from 'react-native';

// packages
import {connect} from 'react-redux';
import HTML from 'react-native-render-html';

// components
import SafeArea from '../../components/SafeArea';

// theme
import {
  articleInfoStyles,
  styles,
  tagsStyles,
  tipsStyles,
  videoTranscriptStyles,
  referencesStyles,
  warningsStyles,
} from './style';

//actions
import {
  getArticleDetails,
  getRandomArticle,
  updateArticleViews,
  navigateTo_ArticleScreen,
} from './actions';

// utils
import {bookmark, formatDate, share} from '../../util/Helpers';

import {URI} from '../../variables';
import Video from 'react-native-video';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as RootNavigation from '../../navigators/RootNavigation';
import ArticleParagraphHeader from './components/ArticleParagraphHeader';
import ArticlePartHeader from '../../components/ArticlePartHeader';
import ArticlePartSection from '../../components/ArticlePartSection';

import {ms, mvs} from 'react-native-size-matters';
import {fontSize} from '../../theme/fontSize';
import {COLORS} from '../../theme/color';

import realm from '../../models';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Menu, MenuItem} from 'react-native-material-menu';
import {name as appName} from '../../../app.json';
import Loader from '../../components/Loader';

const width = Dimensions.get('window').width;

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playVideo: false,
      videoTranscriptVisible: false,
      dropdownVisible: false,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.fetchArticleDetails(false);
  }

  onRefresh = () => {
    this.setState({refreshing: true});
    this.fetchArticleDetails(true).then(() => this.setState({refreshing: false}));
  };

  fetchArticleDetails = async refreshing => {
    const {articleId, isRandom} = this.props.route.params;
    if (isRandom) {
      if (!refreshing) {
        this.props.navigation.addListener('focus', () => {
          this.props.getRandomArticle();
        });
      } else {
        this.props.getRandomArticle();
      }
    } else {
      await this.props.getArticleDetails(articleId);
      await this.props.updateArticleViews(articleId);
    }
  };

  goToArticleScreen = article => {
    this.props.navigateTo_ArticleScreen('Article', {article});
  };

  videoError = error => {
    console.log('Video loading error', error);
  };

  videoOnBuffer = data => {
    console.log('data', data);
  };

  toggleVideoTranscriptVisible = () => {
    this.setState({videoTranscriptVisible: !this.state.videoTranscriptVisible});
  };

  hideMenu = () => this.setState({dropdownVisible: false});

  showMenu = () => this.setState({dropdownVisible: true});

  bookmarkArticle = id => {
    bookmark({id: id, callback: this.hideMenu});
  };

  shareArticle = async () => {
    share({
      title: 'Check out this ' + appName + ' article on ' + this.props.details.title,
      message:
        'I read this great article on ' +
        this.props.details.title +
        '. Download ' +
        appName +
        ' and check it out!',
      callback: this.hideMenu,
    });
  };

  isArticleBookmarked = id => {
    return realm.objects('ArticleModel').filter(article => article.id === String(id)).length > 0;
  };

  render() {
    const {loading, details} = this.props;
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
              <View style={styles.titleAndActionBtnContainer}>
                <Text style={styles.articleTitleText}>{details.title}</Text>
                <Menu
                  visible={this.state.dropdownVisible}
                  anchor={
                    <TouchableOpacity onPress={this.showMenu}>
                      <MaterialIcons name="more-vert" size={25} color={COLORS.black} />
                    </TouchableOpacity>
                  }
                  onRequestClose={this.hideMenu}>
                  <MenuItem onPress={() => this.bookmarkArticle(details.id)}>
                    {this.isArticleBookmarked(details.id) ? 'Remove bookmark' : 'Bookmark'}
                  </MenuItem>
                  <MenuItem onPress={this.shareArticle}>Share article...</MenuItem>
                </Menu>
              </View>
              <View style={styles.publisherContainer}>
                <Text style={styles.publishedByText}>Published by</Text>
                <TouchableOpacity
                  onPress={() =>
                    RootNavigation.navigate('AuthorProfile', {
                      authorId: details?.author?.id,
                    })
                  }>
                  <Text style={styles.authorNameText}>{' ' + details?.author?.name}</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.updatedDate}>Last Updated: {formatDate(details.updated_at)}</Text>
            </View>
            <View style={styles.tabContainer}>
              <View style={styles.tab}>
                <Text style={styles.tabTitle}>ARTICLE</Text>
                <View style={styles.tabLine} />
              </View>
            </View>
            <View style={styles.container}>
              <HTML
                contentWidth={width}
                source={{html: details.description}}
                tagsStyles={tagsStyles}
              />
            </View>
            {details.parts?.map(part => (
              <View key={part.id}>
                <ArticlePartHeader part={part} count={details.parts.length} />
                {part.methods?.map(method => (
                  <ArticlePartSection method={method} />
                ))}
              </View>
            ))}
            {details?.video ? (
              <View>
                <View
                  style={[
                    styles.rowContainer,
                    {justifyContent: 'space-between', alignItems: 'center', marginRight: ms(14)},
                  ]}>
                  <Text style={styles.aboutThisArticleText}>Video</Text>
                  <TouchableOpacity
                    style={styles.videoTranscriptBtn}
                    onPress={() => this.toggleVideoTranscriptVisible()}>
                    <Text style={{color: COLORS.white}}>Read Video Transcript</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.articleVideoContainer}>
                  <Video
                    controls={true}
                    onFullscreenPlayerWillPresent={() => this.setState({playVideo: true})}
                    onFullscreenPlayerDidPresent={() => this.setState({playVideo: true})}
                    onFullscreenPlayerWillDismiss={() => this.setState({playVideo: false})}
                    onFullscreenPlayerDidDismiss={() => this.setState({playVideo: false})}
                    posterResizeMode={'contain'}
                    rate={1}
                    paused={!this.state.playVideo}
                    volume={1}
                    minLoadRetryCount={5}
                    source={{
                      uri: URI + '/uploads/articles/' + details?.video,
                    }}
                    poster={URI + '/uploads/articles/' + details?.video}
                    ref={ref => {
                      this.player = ref;
                    }}
                    ignoreSilentSwitch="obey"
                    onError={this.videoError}
                    style={styles.articleVideo}
                    resizeMode={'contain'}
                  />
                </View>
              </View>
            ) : null}
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.videoTranscriptVisible}
              onRequestClose={() => {
                this.toggleVideoTranscriptVisible();
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: COLORS.olivine2, flex: 1, fontSize: fontSize.size18}}>
                      Video Transcript
                    </Text>
                    <TouchableOpacity onPress={this.toggleVideoTranscriptVisible}>
                      <Text>Close</Text>
                    </TouchableOpacity>
                  </View>
                  <HTML
                    contentWidth={width}
                    source={{html: details?.videoTranscript}}
                    tagsStyles={videoTranscriptStyles}
                  />
                </View>
              </View>
            </Modal>
            {details.warnings && (
              <View>
                <ArticleParagraphHeader
                  title="Tips"
                  icon={
                    <MaterialCommunityIcon
                      name="lightbulb-multiple-outline"
                      size={35}
                      color="white"
                    />
                  }
                />
                <View style={styles.whiteContainer}>
                  <HTML
                    contentWidth={width}
                    source={{html: details.tips}}
                    tagsStyles={tipsStyles}
                  />
                </View>
              </View>
            )}
            {details.warnings && (
              <View>
                <ArticleParagraphHeader
                  title="Warnings"
                  icon={<AntDesign name="warning" size={35} color="white" />}
                />
                <View style={styles.whiteContainer}>
                  <HTML
                    contentWidth={width}
                    source={{html: details.warnings}}
                    tagsStyles={warningsStyles}
                  />
                </View>
              </View>
            )}
            {details?.thingsNeeded && (
              <View>
                <Text style={styles.aboutThisArticleText}>Things You'll Need</Text>
                <View style={styles.whiteContainer}>
                  <HTML
                    contentWidth={width}
                    source={{html: details?.thingsNeeded}}
                    tagsStyles={tipsStyles}
                  />
                </View>
              </View>
            )}
            {details?.videoTranscript && (
              <View>
                <ArticleParagraphHeader
                  title="Warnings"
                  icon={<AntDesign name="warning" size={35} color="white" />}
                />
                <View style={styles.whiteContainer}>
                  <HTML
                    contentWidth={width}
                    source={{html: details?.videoTranscript}}
                    tagsStyles={tipsStyles}
                  />
                </View>
              </View>
            )}
            {details?.references && (
              <View>
                <Text style={styles.aboutThisArticleText}>References</Text>
                <View style={styles.whiteContainer}>
                  <HTML
                    contentWidth={width}
                    source={{html: details?.references}}
                    tagsStyles={referencesStyles}
                  />
                </View>
              </View>
            )}
            <Text style={styles.aboutThisArticleText}>About This Article</Text>
            <View style={styles.container}>
              <View style={styles.authorInfoContainer}>
                <Image
                  source={{
                    uri: URI + '/uploads/users/' + details?.author?.avatar,
                  }}
                  style={styles.authorAvatar}
                />
                <View style={styles.authoredByContainer}>
                  <Text style={styles.authoredByText}>Authored by:</Text>
                  <TouchableOpacity
                    onPress={() =>
                      RootNavigation.navigate('AuthorProfile', {
                        authorId: details?.author?.id,
                      })
                    }>
                    <Text style={{fontSize: fontSize.size16, fontWeight: 'bold'}}>
                      {details?.author?.name}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <HTML
                contentWidth={width}
                source={{html: details.articleInfo}}
                tagsStyles={articleInfoStyles}
              />
              <View style={styles.additionalInfoContainer}>
                <View style={styles.rowContainer}>
                  <Text style={styles.additionalInfoText}>Updated: </Text>
                  <Text style={styles.additionalInfoValueText}>
                    {formatDate(details.updated_at)}
                  </Text>
                </View>
                <View style={[styles.rowContainer, {marginTop: 5}]}>
                  <Text style={styles.additionalInfoText}>Views: </Text>
                  <Text style={styles.additionalInfoValueText}>{details.views}</Text>
                </View>
              </View>
              <View style={styles.additionalInfoContainer}>
                <View style={styles.rowContainer}>
                  <Text style={styles.additionalInfoText}>Categories: </Text>
                  <Text style={styles.additionalInfoValueText}>
                    {details?.categories?.map(category => category.name).join(' | ')}
                  </Text>
                </View>
              </View>
            </View>
            <View style={{height: mvs(50)}} />
          </ScrollView>
        )}
      </View>
    );
  }
}

function mapStateToProps({articleDetailsPageRed}) {
  return {
    details: articleDetailsPageRed.data,
    loading: articleDetailsPageRed.loading_screen,
  };
}

export default connect(mapStateToProps, {
  getArticleDetails,
  getRandomArticle,
  updateArticleViews,
  navigateTo_ArticleScreen,
})(index);
