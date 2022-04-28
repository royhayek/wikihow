import React, {Component} from 'react';
import {View, FlatList, Text, RefreshControl} from 'react-native';

// packages
import {connect} from 'react-redux';

// theme
import styles from './style';

// actions
import {getBookmarkedArticles} from './actions';

// components
import Loader from '../../components/Loader';
import HorizontalArticleListItem from '../../components/HorizontalArticleListItem';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  componentDidMount() {
    this.props.getBookmarkedArticles();
  }

  onRefresh = () => {
    this.setState({refreshing: true});
    this.props.getBookmarkedArticles().then(() => this.setState({refreshing: false}));
  };

  render() {
    return (
      <View>
        {this.props.loadingScreen ? (
          <Loader />
        ) : this.props.articles.length > 0 ? (
          <FlatList
            refreshControl={
              <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
            }
            style={styles.articlesList}
            data={this.props.articles}
            keyExtractor={(item, index) => index.toString()}
            renderItem={article => <HorizontalArticleListItem article={article.item} />}
          />
        ) : (
          <View style={styles.noBookmarksText}>
            <Text>You don't have any bookmarks</Text>
          </View>
        )}
      </View>
    );
  }
}

function mapStateToProps({bookmarksPageRed}) {
  return {
    articles: bookmarksPageRed.data,
    loadingScreen: bookmarksPageRed.loading_screen,
  };
}

export default connect(mapStateToProps, {getBookmarkedArticles})(index);
