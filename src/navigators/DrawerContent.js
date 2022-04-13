import React from 'react';
import {View, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {DrawerMenuButton} from '../components/DrawerMenuButton';
import {name as appName} from '../../app.json';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {COLORS} from '../theme/color';

const drawerMenuList = [
  {
    id: 0,
    title: 'Home',
    key: 'home',
    icon: 'home',
    width: 31.5,
    height: 31.5,
  },
  {
    id: 2,
    title: 'Random',
    key: 'random',
    icon: 'dice',
    width: 23.5,
    height: 28,
  },
  {
    id: 3,
    title: 'Browse Categories',
    key: 'categories',
    icon: 'th-large',
    width: 23.5,
    height: 28,
  },
  {
    id: 4,
    title: 'Bookmarks',
    key: 'bookmarks',
    icon: 'star',
    width: 23.5,
    height: 28,
  },
  {
    id: 5,
    title: `About ${appName}`,
    key: 'about',
    icon: 'info-circle',
    width: 23.5,
    height: 28,
  },
];

class DrawerContent extends React.Component {
  state = {
    showWarning: false,
    warningMsg: '',
    componentTheme: {},
  };
  componentDidMount() {}

  onPress(event, caption, data) {
    console.log(caption);
    switch (caption.key) {
      case 'home':
        this.props.navigation.navigate('HomeScreen', {screen: 'Home'});
        break;
      case 'categories':
        this.props.navigation.navigate('CategoriesScreen');
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
        onPress: event => this.onPress(event, data),
        title: data.title,
        icon: data.icon,
        // action_key: data.url,
      };
      return <DrawerMenuButton {...drawerConfig} />;
    });
  }

  render() {
    const {container, menuList} = styles;

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
    paddingTop: 70,
    // paddingTop: NAVBAR_TOP_PADDING + NAVBAR_HEIGHT
  },
  menuList: {
    flex: 1,
  },
};

export default DrawerContent;
