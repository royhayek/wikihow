import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';

// packages
import {connect} from 'react-redux';
import HTML from 'react-native-render-html';

// components
import SafeArea from '../../components/SafeArea';

// theme
import {styles, tagsStyles} from './style';

//actions
import {getArticleDetails, navigateTo_ArticleScreen} from './actions';
import ArticlePartHeader from '../../components/ArticlePartHeader';
import ArticlePartSection from '../../components/ArticlePartSection';

// utils
import {formatDate} from '../../util/Helpers';

import * as RootNavigation from '../../navigators/RootNavigation';

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
          <View>
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
                  <Text style={styles.authorNameText}>
                    {' ' + details?.author?.name}
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.updatedDate}>
                Last Updated: {formatDate(details.updated_at)}
              </Text>
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
          </View>
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
