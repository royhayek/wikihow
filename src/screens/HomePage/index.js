import React, {Component} from 'react';
import {Text, View, ScrollView, TextInput} from 'react-native';

// packages
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/FontAwesome5';

// components
import SafeArea from '../../components/SafeArea';
import SectionHeader from '../../components/SectionHeader';
import ArticleList from '../../components/ArticleList';

// theme
import styles from './style';

// actions
import {getHomeScreenData} from './actions';

class index extends Component {
  componentDidMount() {
    this.props.getHomeScreenData();
  }

  render() {
    const {trendingArticles, trendingArticlesLoading} = this.props;
    return (
      <SafeArea>
        <ScrollView>
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
              <TextInput style={styles.searchInput} placeholder="Search how to..." />
            </View>
          </View>

          <SectionHeader text="Recent Articles" />
          <ArticleList articles={trendingArticles} />

          <SectionHeader text="Featured Articles" />
          <ArticleList articles={trendingArticles} />
        </ScrollView>
      </SafeArea>
    );
  }
}

function mapStateToProps({homePageRed}) {
  return {
    trendingArticles: homePageRed.data,
  };
}

export default connect(mapStateToProps, {getHomeScreenData})(index);
