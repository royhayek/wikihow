import React, { Component } from 'react';
import { Text, View, FlatList, RefreshControl } from 'react-native';

// packages
import { connect } from 'react-redux';

// components
import CategoryListItem from '../../components/CategoryListItem';

// theme
import styles from './style';

// actions
import { getCategories, navigateTo_ArticlesScreen } from './actions';
import Loader from '../../components/Loader';
import { withTranslation } from 'react-i18next';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }

  componentDidMount() {
    this.props.getCategories();
  }

  goToArticlesScreen = (category) => {
    this.props.navigateTo_ArticlesScreen({ category });
  };

  onRefresh = () => {
    this.setState({ refreshing: true });
    this.props.getCategories().then(() => this.setState({ refreshing: false }));
  };

  render() {
    const { t, categories, loadingScreen } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerStyle}>{t('CATEGORIES')}</Text>
        </View>
        <View style={styles.background}>
          <View style={styles.categoriesListContainer}>
            {loadingScreen ? (
              <Loader />
            ) : (
              <FlatList
                refreshControl={
                  <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
                }
                showsVerticalScrollIndicator={false}
                data={categories}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(category) => (
                  <CategoryListItem category={category} onPress={this.goToArticlesScreen} />
                )}
              />
            )}
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps({ categoriesPageRed }) {
  return {
    categories: categoriesPageRed.data,
    loadingScreen: categoriesPageRed.loading_screen
  };
}

export default connect(mapStateToProps, {
  getCategories,
  navigateTo_ArticlesScreen
})(withTranslation()(index));
