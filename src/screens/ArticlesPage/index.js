import React, {Component} from 'react';
import {Text, View, Image, TextInput, ScrollView} from 'react-native';

// packages
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

// components
import ArticleList from '../../components/ArticleList';
import SafeArea from '../../components/SafeArea';
import SectionHeader from '../../components/SectionHeader';

// theme
import styles from './style';

//actions
import {getCategoryArticles, navigateTo_ArticleScreen} from './actions';

class index extends Component {
  componentDidMount() {
    const categoryId = this.props.route.params.category.item.id;
    this.props.getCategoryArticles(categoryId);
  }

  goToArticleScreen = article => {
    this.props.navigateTo_ArticleScreen('Article', {article});
  };

  render() {
    const category = this.props.route.params.category.item;
    return (
      <SafeArea>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.categoryInfo}>
              <Image
                style={styles.categoryCover}
                source={{
                  uri: 'https://www.wikihow.com/extensions/wikihow/categories/images/Categories_Header_Arts.jpg',
                }}
              />
              <Text style={styles.categoryName}>{category.name}</Text>
              <View style={styles.categorySearchContainer}>
                <TextInput
                  style={styles.categorySearchInput}
                  placeholder="I want to learn how to..."
                />
                <Icon
                  style={{alignSelf: 'center'}}
                  name="search"
                  size={15}
                  color="gray"
                />
              </View>
            </View>
            <Text style={styles.categoryDescription}>
              {category.description}
            </Text>

            <SectionHeader text="Recent Articles" noIcon />
            <ArticleList articles={this.props.articles} />

            <SectionHeader text="Featured Articles" noIcon />
            <ArticleList articles={this.props.articles} />
          </View>
        </ScrollView>
      </SafeArea>
    );
  }
}

function mapStateToProps({articlesPageRed}) {
  return {
    articles: articlesPageRed.data,
  };
}

export default connect(mapStateToProps, {
  getCategoryArticles,
  navigateTo_ArticleScreen,
})(index);
