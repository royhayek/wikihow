import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

// packages
import {connect} from 'react-redux';
import HTML from 'react-native-render-html';

// components
import SafeArea from '../../components/SafeArea';
import Loader from '../../components/Loader';

// theme
import {styles, tagsStyles} from './style';

//actions
import {getRandomArticle} from './actions';
import ArticlePartHeader from '../../components/ArticlePartHeader';
import ArticlePartSection from '../../components/ArticlePartSection';

// utils
import {formatDate} from '../../util/Helpers';

import * as RootNavigation from '../../navigators/RootNavigation';

const width = Dimensions.get('window').width;

class index extends Component {
  componentDidMount() {
    this.props.getRandomArticle();
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    // if(this.props.nextProps.data != )
  }

  goToArticleScreen = article => {
    this.props.navigateTo_ArticleScreen('Article', {article});
  };

  render() {
    const {loading, details} = this.props;
    return (
      <SafeArea>
        {loading ? (
          <Loader />
        ) : (
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
        )}
      </SafeArea>
    );
  }
}

function mapStateToProps({randomArticlePageRed}) {
  return {
    loading: randomArticlePageRed.loading_screen,
    details: randomArticlePageRed.data,
  };
}

export default connect(mapStateToProps, {
  getRandomArticle,
})(index);
