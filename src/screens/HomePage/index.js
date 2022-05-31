import React, { Component } from 'react';
import { Text, View, ScrollView, TextInput, ActivityIndicator, RefreshControl } from 'react-native';

// packages
import { connect } from 'react-redux';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/FontAwesome5';

// components
import SafeArea from '../../components/SafeArea';
import SectionHeader from '../../components/SectionHeader';
import ArticleListItem from '../../components/ArticleListItem';

// theme
import styles from './style';
import { COLORS } from '../../theme/color';

// actions
import { getHomeScreenData } from './actions';
import { showSearchBar, setSearchKeyword } from '../../navigators/actions';

// navigation
import * as RootNavigation from '../../navigators/RootNavigation';
import { withTranslation } from 'react-i18next';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: '',
      refreshing: false
    };
  }

  componentDidMount() {
    this.props.getHomeScreenData();
  }

  onRefresh = () => {
    this.setState({ refreshing: true });
    this.props.getHomeScreenData().then(() => this.setState({ refreshing: false }));
  };

  render() {
    const { t, loading, recentArticles, featuredArticles } = this.props;
    return (
      <ScrollView
        style={styles.mainContainer}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
            tintColor={COLORS.white}
            progressBackgroundColor={COLORS.white}
          />
        }>
        <View style={styles.container}>
          <Text style={styles.welcomeTitle}>{t('WELCOME_TO_APP')} </Text>
          <Text style={styles.welcomeSubtitle}>{t('WHAT_WILL_YOU_LEARN')}</Text>
          <FastImage style={styles.cover} source={require('../../../assets/bbq-grill-good.png')} />
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputRow}>
            <Icon style={{ alignSelf: 'center' }} name="search" size={22} color="gray" />
            <TextInput
              style={styles.searchInput}
              selectionColor={COLORS.orange}
              placeholder={t('SEARCH_HOW_TO')}
              placeholderTextColor={COLORS.cloudyGrey}
              onChangeText={(text) => this.props.setSearchKeyword(text)}
              onSubmitEditing={() => {
                RootNavigation.navigate('SearchPage', {
                  searchKeyword: this.props.searchKeyword
                });
                this.props.showSearchBar();
              }}
            />
          </View>
        </View>
        <SectionHeader text={t('RECENT_ARTICLES')} />
        <View style={styles.articleWrapList}>
          {loading ? (
            <ActivityIndicator size="small" color={COLORS.orange} style={styles.loaderStyle} />
          ) : (
            recentArticles
              .slice(0, 6)
              .map((article) => <ArticleListItem key={article.id} article={article} />)
          )}
        </View>
        <SectionHeader text={t('FEATURED_ARTICLES')} />
        {loading ? (
          <ActivityIndicator size="small" color={COLORS.orange} style={styles.loaderStyle} />
        ) : (
          <View style={styles.articleWrapList}>
            {featuredArticles.slice(0, 6).map((article) => (
              <ArticleListItem key={article.id} article={article} />
            ))}
          </View>
        )}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    );
  }
}

function mapStateToProps({ homePageRed, mainNavigationRed }) {
  return {
    loading: homePageRed.loading_screen,
    recentArticles: homePageRed.recentArticles,
    featuredArticles: homePageRed.featuredArticles,
    searchKeyword: mainNavigationRed.searchKeyword
  };
}

export default connect(mapStateToProps, { getHomeScreenData, setSearchKeyword, showSearchBar })(
  withTranslation()(index)
);
