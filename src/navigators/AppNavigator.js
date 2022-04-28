import React, {Component} from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import DrawerContent from './DrawerContent';

import {SafeAreaProvider, initialWindowMetrics} from 'react-native-safe-area-context';

//// Screens
import HomePage from '../screens/HomePage';
import ArticlesPage from '../screens/ArticlesPage';
import CategoriesPage from '../screens/CategoriesPage';
import ArticleDetailsPage from '../screens/ArticleDetailsPage';
import AboutPage from '../screens/AboutPage';
import AuthorProfilePage from '../screens/AuthorProfilePage';
import SearchPage from '../screens/SearchPage';
import BookmarksPage from '../screens/BookmarksPage';

// import {check_authentication} from './actions';
import {COLORS} from '../theme/color';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {showSearchBar, hideSearchBar, setSearchKeyword} from './actions';
import FastImage from 'react-native-fast-image';
import SearchBar from '../components/SearchBar';

import * as RootNavigation from './RootNavigation';

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const CategoriesStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const BookmarksStack = createStackNavigator();

//-----------------------------------------------//
//          this is the home stack
//-----------------------------------------------//

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomePage}
        options={({route, navigation}) => ({
          headerShown: false,
          headerTintColor: COLORS.black,
          backgroundColor: COLORS.white,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false,
        })}
      />
      <HomeStack.Screen
        name="Articles"
        component={ArticlesPage}
        options={({route, navigation}) => ({
          headerShown: false,
          headerTintColor: COLORS.black,
          backgroundColor: COLORS.white,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false,
          unmountOnBlur: true,
        })}
      />
      <HomeStack.Screen
        name="ArticleDetails"
        component={ArticleDetailsPage}
        options={({route, navigation}) => ({
          headerShown: false,
          headerTintColor: COLORS.black,
          backgroundColor: COLORS.white,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false,
        })}
      />
      <HomeStack.Screen
        name="AuthorProfile"
        component={AuthorProfilePage}
        options={({route, navigation}) => ({
          headerShown: false,
          headerTintColor: COLORS.black,
          backgroundColor: COLORS.white,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false,
        })}
      />
      <HomeStack.Screen
        name="SearchPage"
        component={SearchPage}
        options={({route, navigation}) => ({
          headerShown: false,
          headerTintColor: COLORS.black,
          backgroundColor: COLORS.white,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false,
        })}
      />
    </HomeStack.Navigator>
  );
  // }
};

const CategoriesStackScreen = () => {
  return (
    <CategoriesStack.Navigator>
      <CategoriesStack.Screen
        name="Categories"
        component={CategoriesPage}
        options={({route, navigation}) => ({
          headerShown: false,
          headerTintColor: COLORS.black,
          backgroundColor: COLORS.headerColor,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false,
        })}
      />
    </CategoriesStack.Navigator>
  );
  // }
};

const BookmarksStackScreen = () => {
  return (
    <BookmarksStack.Navigator>
      <CategoriesStack.Screen
        name="Bookmarks"
        component={BookmarksPage}
        options={({route, navigation}) => ({
          headerShown: false,
          headerTintColor: COLORS.black,
          backgroundColor: COLORS.headerColor,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false,
        })}
      />
    </BookmarksStack.Navigator>
  );
  // }
};

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="About"
        component={AboutPage}
        options={({route, navigation}) => ({
          // title: I18n.t('SettingsStack'),
          headerShown: false,
          headerTintColor: COLORS.black,
          backgroundColor: COLORS.headerColor,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false,
          headerStyle: {
            //here i color the background of
            backgroundColor: COLORS.white,
            shadowOffset: {width: 3, height: 1},
            shadowColor: COLORS.burgundy,
            shadowRadius: 10,
            shadowOpacity: 0.5,
            height: 110,
          },
          headerTitleStyle: {
            marginRight: 16,
            fontSize: 25,
            textAlign: 'left',
          },
        })}
      />
      {/* <SettingsStack.Screen
        name="SettingsAccountDetails"
        component={SettingsAccountDetailsPage}
        options={({route, navigation}) => ({
          headerShown: false,
          headerTintColor: COLORS.black,
          backgroundColor: COLORS.headerColor,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false,
        })}
      /> */}
    </SettingsStack.Navigator>
  );
  // }
};

class AppContainer extends Component {
  render() {
    return (
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.olivine2} />
        <Drawer.Navigator
          drawerContent={props => <DrawerContent {...props} />}
          screenOptions={({route}) => ({
            headerTitle: props =>
              this.props.searchBarShown ? (
                <SearchBar
                  value={this.props.searchKeyword}
                  onSearchTextChange={text => this.props.setSearchKeyword(text)}
                  onSearchSubmit={() =>
                    RootNavigation.navigate('SearchPage', {
                      searchKeyword: this.props.searchKeyword,
                    })
                  }
                />
              ) : (
                <FastImage
                  style={{width: 115, height: 19}}
                  source={{
                    uri: 'https://www.wikihow.com/extensions/wikihow/mobile/images/wikihow_logo_230.png',
                  }}
                />
              ),
            headerTitleStyle: {fontSize: 20},
            headerTintColor: 'white',
            headerStyle: {elevation: 0, backgroundColor: COLORS.olivine2},
            headerRight: () =>
              this.props.searchBarShown ? (
                <TouchableOpacity
                  style={{marginRight: 20}}
                  onPress={() => {
                    this.props.hideSearchBar();
                    this.props.setSearchKeyword('');
                  }}>
                  <FontAwesome name="close" size={20} color="white" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{marginRight: 20}}
                  onPress={() => this.props.showSearchBar()}>
                  <FontAwesome5 name="search" size={18} color="white" />
                </TouchableOpacity>
              ),
          })}>
          <Drawer.Screen name="HomeScreen" component={HomeStackScreen} />
          <Drawer.Screen
            name="CategoriesScreen"
            component={CategoriesStackScreen}
            options={{unmountOnBlur: true}}
          />
          <Drawer.Screen
            name="BookmarksScreen"
            component={BookmarksStackScreen}
            options={{unmountOnBlur: true}}
          />
          <Drawer.Screen name="AboutScreen" component={SettingsStackScreen} />
        </Drawer.Navigator>
      </SafeAreaProvider>
    );
  }
}

const mapStateToProps = ({mainNavigationRed}) => {
  return {
    searchBarShown: mainNavigationRed.searchBarShown,
    searchKeyword: mainNavigationRed.searchKeyword,
  };
};

export default connect(mapStateToProps, {showSearchBar, hideSearchBar, setSearchKeyword})(
  AppContainer,
);
