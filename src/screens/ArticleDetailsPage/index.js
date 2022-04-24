import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Dimensions, Image} from 'react-native';

// packages
import {connect} from 'react-redux';
import HTML from 'react-native-render-html';

// components
import SafeArea from '../../components/SafeArea';

// theme
import {aticleInfoStyles, styles, tagsStyles, tipsStyles} from './style';

//actions
import {getArticleDetails, navigateTo_ArticleScreen} from './actions';
import ArticlePartHeader from '../../components/ArticlePartHeader';
import ArticlePartSection from '../../components/ArticlePartSection';

// utils
import {formatDate} from '../../util/Helpers';

import {URI} from '../../variables';
import Video from 'react-native-video';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as RootNavigation from '../../navigators/RootNavigation';
import ArticleParagraphHeader from './components/ArticleParagraphHeader';
import {mvs} from 'react-native-size-matters';
import {fontSize} from '../../theme/fontSize';

const width = Dimensions.get('window').width;

class index extends Component {
  componentDidMount() {
    const articleId = this.props.route.params.articleId;
    this.props.getArticleDetails(articleId);
  }

  goToArticleScreen = article => {
    this.props.navigateTo_ArticleScreen('Article', {article});
  };

  render() {
    const {details} = this.props;
    return (
      <SafeArea>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.articleTitleText}>{details.title}</Text>
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
          {/* {details.parts?.map(part => (
            <View key={part.id}>
              <ArticlePartHeader part={part} count={details.parts.length} />
              {part.methods?.map(method => (
                <ArticlePartSection method={method} />
              ))}
            </View>
          ))} */}
          {details?.video && (
            <View>
              <Text style={styles.aboutThisArticleText}>Video</Text>
              <View style={styles.whiteContainer}>
                <Video
                  source={{uri: 'background'}} // Can be a URL or a local file.
                  ref={ref => {
                    this.player = ref;
                  }} // Store reference
                  // onBuffer={this.onBuffer} // Callback when remote video is buffering
                  // onError={this.videoError} // Callback when video cannot be loaded
                  style={styles.backgroundVideo}
                />
              </View>
            </View>
          )}
          <ArticleParagraphHeader
            title="Tips"
            icon={
              <MaterialCommunityIcon name="lightbulb-multiple-outline" size={35} color="white" />
            }
          />
          <View style={styles.whiteContainer}>
            <HTML contentWidth={width} source={{html: details.tips}} tagsStyles={tipsStyles} />
          </View>
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
                  tagsStyles={tipsStyles}
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
          <Text style={styles.aboutThisArticleText}>About This Article</Text>
          <View style={styles.container}>
            <View
              style={{
                paddingVertical: 15,
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderColor: '#f3f3f3',
              }}>
              <Image
                source={{
                  uri: URI + '/uploads/users/' + details?.author?.avatar,
                }}
                style={{width: 50, height: 50, borderRadius: 8}}
              />
              <View style={{marginLeft: 15, justifyContent: 'center'}}>
                <Text style={{fontSize: fontSize.size14, color: '#545454', fontWeight: 'bold'}}>
                  Authored by:
                </Text>
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
              tagsStyles={aticleInfoStyles}
            />
            <View style={{borderBottomWidth: 1, borderColor: '#f3f3f3', paddingVertical: 10}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: fontSize.size15, color: '#545454'}}>Updated: </Text>
                <Text style={{fontSize: fontSize.size15, color: '#545454', fontWeight: 'bold'}}>
                  {formatDate(details.updated_at)}
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Text style={{fontSize: fontSize.size15, color: '#545454'}}>Views: </Text>
                <Text style={{fontSize: fontSize.size15, color: '#545454', fontWeight: 'bold'}}>
                  {details.views}
                </Text>
              </View>
            </View>
            <View style={{borderBottomWidth: 1, borderColor: '#f3f3f3', paddingVertical: 10}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: fontSize.size15, color: '#545454'}}>Categories: </Text>
                <Text style={{fontSize: fontSize.size15, color: '#545454', fontWeight: 'bold'}}>
                  {details?.categories?.map(category => category.name).join(' | ')}
                </Text>
              </View>
            </View>
          </View>
          <View style={{height: mvs(50)}} />
        </ScrollView>
      </SafeArea>
    );
  }
}

function mapStateToProps({articleDetailsPageRed}) {
  return {
    details: articleDetailsPageRed.data,
  };
}

export default connect(mapStateToProps, {
  getArticleDetails,
  navigateTo_ArticleScreen,
})(index);
