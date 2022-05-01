import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { DrawerMenuButton } from '../components/DrawerMenuButton';
import { displayName as appName } from '../../app.json';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { COLORS } from '../theme/color';
import * as RootNavigation from './RootNavigation';
import i18n from '../lang/i18n';
import { withTranslation } from 'react-i18next';
import { t } from 'i18next';

const drawerMenuList = [
  {
    id: 0,
    title: t('HOME'),
    key: 'home',
    icon: 'home',
    width: 31.5,
    height: 31.5
  },
  {
    id: 2,
    title: t('RANDOM'),
    key: 'random',
    icon: 'dice',
    width: 23.5,
    height: 28
  },
  {
    id: 3,
    title: t('BROWSE_CATEGORIES'),
    key: 'categories',
    icon: 'th-large',
    width: 23.5,
    height: 28
  },
  {
    id: 4,
    title: t('BOOKMARKS'),
    key: 'bookmarks',
    icon: 'star',
    width: 23.5,
    height: 28
  },
  {
    id: 5,
    title: t('ABOUT'),
    key: 'about',
    icon: 'info-circle',
    width: 23.5,
    height: 28
  }
];

class DrawerContent extends React.Component {
  state = {
    showWarning: false,
    warningMsg: '',
    componentTheme: {},
    currentLanguage: 'en'
  };

  changeLanguage = (value) => {
    const { changeLanguage } = this.props.i18n;
    changeLanguage(value)
      .then(() => this.setState({ currentLanguage: value }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.changeLanguage('de');
  }

  onPress(event, caption, data) {
    console.log(caption);
    switch (caption.key) {
      case 'home':
        this.props.navigation.navigate('HomeScreen', { screen: 'Home' });
        break;
      case 'random':
        this.props.navigation.navigate('ArticleDetails', { isRandom: true });
        break;
      case 'categories':
        this.props.navigation.navigate('CategoriesScreen');
        break;
      case 'bookmarks':
        this.props.navigation.navigate('BookmarksScreen');
        // RootNavigation.reset(0, 'BookmarksScreen');
        break;
      case 'about':
        this.props.navigation.navigate('AboutScreen');
        break;
      default:
    }
  }

  mapDrawerList() {
    return drawerMenuList.map((data, i) => {
      const drawerConfig = {
        key: i,
        onPress: (event) => this.onPress(event, data),
        title: data.title,
        icon: data.icon
        // action_key: data.url,
      };
      return <DrawerMenuButton {...drawerConfig} />;
    });
  }

  render() {
    const { container, menuList } = styles;
    return (
      <View style={container}>
        <ScrollView style={menuList}>{this.mapDrawerList()}</ScrollView>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    position: 'relative',
    backgroundColor: COLORS.carbonGrey,
    paddingTop: 70
  },
  menuList: {
    flex: 1
  }
};

export default withTranslation()(DrawerContent);
