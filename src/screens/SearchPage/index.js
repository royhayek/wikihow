import React, { Component } from 'react';
import { View, FlatList, Text, RefreshControl } from 'react-native';

// packages
import { connect } from 'react-redux';

// theme
import { styles } from './style';

// actions
import { getSearchResult } from './actions';
import HorizontalArticleListItem from '../../components/HorizontalArticleListItem';
import Loader from '../../components/Loader';
import { t } from 'i18next';
import { withTranslation } from 'react-i18next';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }

  componentDidMount() {
    const searchKeyword = this.props.route.params.searchKeyword;
    this.props.getSearchResult(searchKeyword);
  }

  componentDidUpdate(prevProps, prevState) {
    const searchKeyword = this.props.route.params.searchKeyword;
    if (prevProps.route.params.searchKeyword !== searchKeyword) {
      this.props.getSearchResult(searchKeyword);
    }
  }

  onRefresh = () => {
    const searchKeyword = this.props.route.params.searchKeyword;
    this.setState({ refreshing: true });
    this.props.getSearchResult(searchKeyword).then(() => this.setState({ refreshing: false }));
  };

  render() {
    const { t } = this.props;
    return (
      <View style={styles.container}>
        {this.props.loading ? (
          <Loader />
        ) : this.props.articles.length > 0 ? (
          <FlatList
            refreshControl={
              <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
            }
            showsVerticalScrollIndicator={false}
            data={this.props.articles}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(article) => <HorizontalArticleListItem article={article.item} />}
          />
        ) : (
          <View style={styles.noArticlesText}>
            <Text>{t('NO_ARTICLES_FOUND')}</Text>
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = ({ searchPageRed }) => {
  return {
    articles: searchPageRed.data,
    loading: searchPageRed.loading_screen
  };
};
export default connect(mapStateToProps, { getSearchResult })(withTranslation()(index));
