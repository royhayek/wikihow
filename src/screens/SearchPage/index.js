import React, {Component} from 'react';
import {ScrollView, View, FlatList} from 'react-native';

// packages
import {connect} from 'react-redux';

// theme
import {styles} from './style';

// actions
import {getSearchResult} from './actions';
import SafeArea from '../../components/SafeArea';
import HorizontalArticleListItem from './components/HorizontalArticleListItem';

class index extends Component {
  componentDidMount() {
    const searchKeyword = this.props.route.params.searchKeyword;
    this.props.getSearchResult(searchKeyword);
  }

  render() {
    console.log('this.props', this.props);

    return (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.props.articles}
          keyExtractor={(item, index) => index.toString()}
          renderItem={article => <HorizontalArticleListItem article={article.item} />}
        />
      </View>
    );
  }
}

const mapStateToProps = ({searchPageRed}) => {
  return {
    articles: searchPageRed.data,
    loadingScreen: searchPageRed.loading_screen,
  };
};
export default connect(mapStateToProps, {getSearchResult})(index);
