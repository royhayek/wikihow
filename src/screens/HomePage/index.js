import React, {Component} from 'react';
import {Text, View, ScrollView, TextInput, ActivityIndicator, RefreshControl} from 'react-native';

// packages
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/FontAwesome5';

// components
import SafeArea from '../../components/SafeArea';
import SectionHeader from '../../components/SectionHeader';
import ArticleListItem from '../../components/ArticleListItem';

// theme
import styles from './style';
import {COLORS} from '../../theme/color';

// actions
import {getHomeScreenData} from './actions';
import {showSearchBar, setSearchKeyword} from '../../navigators/actions';

// navigation
import * as RootNavigation from '../../navigators/RootNavigation';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: '',
      refreshing: false,
    };
  }

  componentDidMount() {
    this.props.getHomeScreenData();
  }

  onRefresh = () => {
    this.setState({refreshing: true});
    this.props.getHomeScreenData().then(() => this.setState({refreshing: false}));
  };

  render() {
    const {loading, recentArticles, featuredArticles} = this.props;
    return (
      <ScrollView
        style={styles.mainContainer}
        refreshControl={
          <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
        }>
        <View style={styles.container}>
          <Text style={styles.welcomeTitle}>
            Welcome to wikiHow, the most trusted how-to site on the internet.
          </Text>
          <Text style={styles.welcomeSubtitle}>What will you learn on wikihow today?</Text>
          <FastImage
            style={styles.cover}
            source={{
              uri: 'https://www.wikihow.com/extensions/wikihow/homepage/images/books2.webp',
            }}
          />
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputRow}>
            <Icon style={{alignSelf: 'center'}} name="search" size={22} color="gray" />
            <TextInput
              style={styles.searchInput}
              selectionColor={COLORS.olivine2}
              placeholder="Search how to..."
              onChangeText={text => this.props.setSearchKeyword(text)}
              onSubmitEditing={() => {
                RootNavigation.navigate('SearchPage', {
                  searchKeyword: this.props.searchKeyword,
                });
                this.props.showSearchBar();
              }}
            />
          </View>
        </View>
        <SectionHeader text="Recent Articles" />
        <View style={styles.articleWrapList}>
          {loading ? (
            <ActivityIndicator size="small" color={COLORS.olivine} style={styles.loaderStyle} />
          ) : (
            recentArticles.slice(0, 6).map(article => <ArticleListItem article={article} />)
          )}
        </View>
        <SectionHeader text="Featured Articles" />
        {loading ? (
          <ActivityIndicator size="small" color={COLORS.olivine} style={styles.loaderStyle} />
        ) : (
          <View style={styles.articleWrapList}>
            {featuredArticles.slice(0, 6).map(article => (
              <ArticleListItem article={article} />
            ))}
          </View>
        )}
      </ScrollView>
    );
  }
}

function mapStateToProps({homePageRed, mainNavigationRed}) {
  return {
    loading: homePageRed.loading_screen,
    recentArticles: homePageRed.recentArticles,
    featuredArticles: homePageRed.featuredArticles,
    searchKeyword: mainNavigationRed.searchKeyword,
  };
}

export default connect(mapStateToProps, {getHomeScreenData, setSearchKeyword, showSearchBar})(
  index,
);
