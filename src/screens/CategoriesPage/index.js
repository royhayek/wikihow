import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';

// packages
import {connect} from 'react-redux';

// components
import SafeArea from '../../components/SafeArea';
import CategoryListItem from '../../components/CategoryListItem';

// theme
import styles from './style';

// actions
import {getCategories, navigateTo_ArticlesScreen} from './actions';
import Loader from '../../components/Loader';

class index extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  goToArticlesScreen = category => {
    this.props.navigateTo_ArticlesScreen({category});
  };

  render() {
    const {categories, loadingScreen} = this.props;
    return (
      <SafeArea>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerStyle}>Categories</Text>
          </View>
          <View style={styles.background}>
            <View style={styles.categoriesListContainer}>
              {loadingScreen ? (
                <Loader />
              ) : (
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={categories}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={category => (
                    <CategoryListItem
                      category={category}
                      onPress={this.goToArticlesScreen}
                    />
                  )}
                />
              )}
            </View>
          </View>
        </View>
      </SafeArea>
    );
  }
}

function mapStateToProps({categoriesPageRed}) {
  return {
    categories: categoriesPageRed.data,
    loadingScreen: categoriesPageRed.loading_screen,
  };
}

export default connect(mapStateToProps, {
  getCategories,
  navigateTo_ArticlesScreen,
})(index);
