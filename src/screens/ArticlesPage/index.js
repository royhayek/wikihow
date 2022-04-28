import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

// packages
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

// components
import SectionHeader from '../../components/SectionHeader';
import ArticleListItem from '../../components/ArticleListItem';
import Loader from '../../components/Loader';

// theme
import styles from './style';
import {COLORS} from '../../theme/color';

//actions
import {getCategoryArticles} from './actions';
import {showSearchBar, setSearchKeyword} from '../../navigators/actions';

// variables
import {URI} from '../../variables';

// navigation
import * as RootNavigation from '../../navigators/RootNavigation';

class index extends Component {
  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      const categoryId = this.props.route.params.category.item.id;
      this.props.getCategoryArticles(categoryId);
    });
  }

  render() {
    const category = this.props.route.params.category.item;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.categoryInfo}>
            <Image
              style={styles.categoryCover}
              source={{uri: URI + '/uploads/categories/thumbnails/' + category.thumbnail}}
            />
            <Text style={styles.categoryName}>{category.name}</Text>
            <View style={styles.categorySearchContainer}>
              <TextInput
                selectionColor={COLORS.olivine2}
                style={styles.categorySearchInput}
                placeholder="I want to learn how to..."
                onChangeText={text => this.props.setSearchKeyword(text)}
                onSubmitEditing={() => {
                  RootNavigation.navigate('SearchPage', {
                    searchKeyword: this.props.searchKeyword,
                  });
                  this.props.showSearchBar();
                }}
              />
              <TouchableOpacity
                style={styles.alignSelfCenter}
                onPress={() => {
                  RootNavigation.navigate('SearchPage', {
                    searchKeyword: this.props.searchKeyword,
                  });
                  this.props.showSearchBar();
                }}>
                <Icon name="search" size={16} color="gray" />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.categoryDescription}>{category.description}</Text>
          <SectionHeader text="Articles" noIcon />
          {this.props.loading ? (
            <ActivityIndicator size="small" color={COLORS.olivine} style={styles.loaderStyle} />
          ) : (
            <View style={styles.wrapListContainer}>
              {this.props.articles.length > 0 ? (
                this.props.articles.map(article => (
                  <ArticleListItem key={article.id} article={article} />
                ))
              ) : (
                <View style={styles.noArticlesContainer}>
                  <Text>No articles added yet</Text>
                </View>
              )}
            </View>
          )}
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps({articlesPageRed, mainNavigationRed}) {
  return {
    articles: articlesPageRed.data,
    loading: articlesPageRed.loading_screen,
    searchKeyword: mainNavigationRed.searchKeyword,
  };
}

export default connect(mapStateToProps, {getCategoryArticles, setSearchKeyword, showSearchBar})(
  index,
);
