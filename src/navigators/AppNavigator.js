import React, { Component } from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { SafeAreaView } from 'react-native-safe-area-context';

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
import { COLORS } from '../theme/color';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { showSearchBar, hideSearchBar, setSearchKeyword, setCurrentLanguage } from './actions';
import FastImage from 'react-native-fast-image';
import SearchBar from '../components/SearchBar';

import * as RootNavigation from './RootNavigation';
import { URI } from '../variables';

import { withTranslation, Translation } from 'react-i18next';
import { fontSize } from '../theme/fontSize';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppStack = createStackNavigator();
const HomeStack = createStackNavigator();
const RandomArticleStack = createStackNavigator();
const CategoriesStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const BookmarksStack = createStackNavigator();

//this function checks if the screen name in order to remove tab bar
//works on nested navigators
const getTabBarVisibility = (route) => {
  const routeName = route.state ? route.state.routes[route.state.index].name : '';
  if (
    routeName === 'ArticleDetails' ||
    routeName === 'Articles' ||
    routeName === 'AuthorProfile' ||
    routeName === 'SearchPage'
  ) {
    return false;
  }

  return true;
};

//-----------------------------------------------//
//          this is the home stack
//-----------------------------------------------//

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomePage}
        options={({ route, navigation }) => ({
          headerShown: false,
          headerTintColor: COLORS.black,
          backgroundColor: COLORS.black,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false
        })}
      />
      <HomeStack.Screen
        name="ArticleDetails"
        component={ArticleDetailsPage}
        options={({ route, navigation }) => ({
          headerShown: false,
          headerTintColor: COLORS.black,
          backgroundColor: COLORS.black,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false
        })}
      />
      <HomeStack.Screen
        name="AuthorProfile"
        component={AuthorProfilePage}
        options={({ route, navigation }) => ({
          headerShown: false,
          headerTintColor: COLORS.black,
          backgroundColor: COLORS.black,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false
        })}
      />
      <HomeStack.Screen
        name="SearchPage"
        component={SearchPage}
        options={({ route, navigation }) => ({
          headerShown: false,
          headerTintColor: COLORS.black,
          backgroundColor: COLORS.black,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false
        })}
      />
    </HomeStack.Navigator>
  );
  // }
};

const RandomArticleStackScreen = () => {
  return (
    <RandomArticleStack.Navigator>
      <RandomArticleStack.Screen
        name="RandomArticle"
        component={ArticleDetailsPage}
        options={({ route, navigation }) => ({
          headerShown: false,
          headerTintColor: COLORS.black,
          backgroundColor: COLORS.headerColor,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false
        })}
      />
      <HomeStack.Screen
        name="ArticleDetails"
        component={ArticleDetailsPage}
        options={({ route, navigation }) => ({
          headerShown: false,
          headerTintColor: COLORS.black,
          backgroundColor: COLORS.black,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false
        })}
      />
      <HomeStack.Screen
        name="AuthorProfile"
        component={AuthorProfilePage}
        options={({ route, navigation }) => ({
          headerShown: false,
          headerTintColor: COLORS.black,
          backgroundColor: COLORS.black,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false
        })}
      />
      <HomeStack.Screen
        name="SearchPage"
        component={SearchPage}
        options={({ route, navigation }) => ({
          headerShown: false,
          headerTintColor: COLORS.black,
          backgroundColor: COLORS.black,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false
        })}
      />
    </RandomArticleStack.Navigator>
  );
  // }
};

const CategoriesStackScreen = () => {
  return (
    <CategoriesStack.Navigator>
      <CategoriesStack.Screen
        name="Categories"
        component={CategoriesPage}
        options={({ route, navigation }) => ({
          headerShown: false,
          headerTintColor: COLORS.black,
          backgroundColor: COLORS.headerColor,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false
        })}
      />
      <HomeStack.Screen
        name="Articles"
        component={ArticlesPage}
        options={({ route, navigation }) => ({
          headerShown: false,
          headerTintColor: COLORS.black,
          backgroundColor: COLORS.black,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false
        })}
      />
      <HomeStack.Screen
        name="ArticleDetails"
        component={ArticleDetailsPage}
        options={({ route, navigation }) => ({
          headerShown: false,
          headerTintColor: COLORS.black,
          backgroundColor: COLORS.black,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false
        })}
      />
      <HomeStack.Screen
        name="AuthorProfile"
        component={AuthorProfilePage}
        options={({ route, navigation }) => ({
          headerShown: false,
          headerTintColor: COLORS.black,
          backgroundColor: COLORS.black,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false
        })}
      />
      <HomeStack.Screen
        name="SearchPage"
        component={SearchPage}
        options={({ route, navigation }) => ({
          headerShown: false,
          headerTintColor: COLORS.black,
          backgroundColor: COLORS.black,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false
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
        options={({ route, navigation }) => ({
          headerShown: false,
          headerTintColor: COLORS.black,
          backgroundColor: COLORS.headerColor,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false
        })}
      />
      <HomeStack.Screen
        name="ArticleDetails"
        component={ArticleDetailsPage}
        options={({ route, navigation }) => ({
          headerShown: false,
          headerTintColor: COLORS.black,
          backgroundColor: COLORS.black,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false
        })}
      />
      <HomeStack.Screen
        name="AuthorProfile"
        component={AuthorProfilePage}
        options={({ route, navigation }) => ({
          headerShown: false,
          headerTintColor: COLORS.black,
          backgroundColor: COLORS.black,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false
        })}
      />
      <HomeStack.Screen
        name="SearchPage"
        component={SearchPage}
        options={({ route, navigation }) => ({
          headerShown: false,
          headerTintColor: COLORS.black,
          backgroundColor: COLORS.black,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false
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
        options={({ route, navigation }) => ({
          // title: I18n.t('SettingsStack'),
          headerShown: false,
          headerTintColor: COLORS.black,
          backgroundColor: COLORS.headerColor,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false,
          headerStyle: {
            //here i color the background of
            backgroundColor: COLORS.black,
            shadowOffset: { width: 3, height: 1 },
            shadowColor: COLORS.burgundy,
            shadowRadius: 10,
            shadowOpacity: 0.5,
            height: 110
          },
          headerTitleStyle: {
            marginRight: 16,
            fontSize: 25,
            textAlign: 'left'
          }
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

//-------------------------------//
//Main tab for the logged in user//
//-------------------------------//
export const MainTab = () => {
  return (
    <Translation>
      {(t, { i18n }) => (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            unmountOnBlur: true,
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: COLORS.black,
            tabBarInactiveTintColor: COLORS.white,
            tabBarShowLabel: true,
            tabBarActiveBackgroundColor: COLORS.orange,
            tabBarInactiveBackgroundColor: COLORS.orange,
            tabBarStyle: { backgroundColor: COLORS.black },
            tabBarIcon: ({ focused, color, size, tintColor }) => {
              if (route.name === t('HOME')) {
                if (focused) {
                  return <Ionicons name="ios-home" size={19} color={COLORS.black} />;
                } else {
                  return <Ionicons name="ios-home" size={19} color={COLORS.white} />;
                }
              } else if (route.name === t('RANDOM')) {
                if (focused) {
                  return <MaterialIcons name="article" size={20} color={COLORS.black} />;
                } else {
                  return <MaterialIcons name="article" size={20} color={COLORS.white} />;
                }
              } else if (route.name === t('CATEGORIES')) {
                if (focused) {
                  return <Entypo name="grid" size={25} color={COLORS.black} />;
                } else {
                  return <Entypo name="grid" size={25} color={COLORS.white} />;
                }
              } else if (route.name === t('BOOKMARKS')) {
                if (focused) {
                  return <Ionicons name="bookmarks" size={18} color={COLORS.black} />;
                } else {
                  return <Ionicons name="bookmarks" size={18} color={COLORS.white} />;
                }
              } else if (route.name === t('ABOUT')) {
                if (focused) {
                  return <Entypo name="info-with-circle" size={18} color={COLORS.black} />;
                } else {
                  return <Entypo name="info-with-circle" size={18} color={COLORS.white} />;
                }
              }
            }
          })}>
          <Tab.Screen
            name={t('HOME')}
            component={HomeStackScreen}
            options={({ route }) => ({
              tabBarVisible: getTabBarVisibility(route)
            })}
          />
          <Tab.Screen
            name={t('RANDOM')}
            component={RandomArticleStackScreen}
            options={({ route }) => ({
              tabBarVisible: getTabBarVisibility(route)
            })}
          />
          <Tab.Screen
            name={t('CATEGORIES')}
            component={CategoriesStackScreen}
            options={({ route }) => ({
              tabBarVisible: getTabBarVisibility(route)
            })}
          />
          <Tab.Screen
            name={t('BOOKMARKS')}
            component={BookmarksStackScreen}
            options={({ route }) => ({
              tabBarVisible: getTabBarVisibility(route)
            })}
          />
          <Tab.Screen
            name={t('ABOUT')}
            component={SettingsStackScreen}
            options={({ route }) => ({
              tabBarVisible: getTabBarVisibility(route)
            })}
          />
        </Tab.Navigator>
      )}
    </Translation>
  );
};

//calls the mainTab of the user
export const AppScreen = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="MainTab" component={MainTab} />
    </AppStack.Navigator>
  );
};

class AppContainer extends Component {
  changeLanguage = () => {
    const { i18n } = this.props;
    i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en');
    this.props.setCurrentLanguage(i18n.language === 'en' ? 'de' : 'en');
    let moment = require('moment');
    require('moment/locale/de');
    moment.locale(this.props.language);
  };

  render() {
    console.log(this.props);
    const { i18n } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.orange }}>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.orange} />
        <Stack.Navigator
          initialRouteName={'Welcome'}
          screenOptions={{
            cardStyle: { backgroundColor: COLORS.black },
            gestureEnabled: false,
            headerTitleStyle: { fontSize: 20 },
            headerTintColor: COLORS.orange,
            headerStyle: { elevation: 0, backgroundColor: COLORS.orange },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity
                style={{ paddingHorizontal: 20, paddingVertical: 10 }}
                onPress={this.changeLanguage}>
                <Text
                  style={{ color: COLORS.white, fontWeight: 'bold', fontSize: fontSize.size16 }}>
                  {i18n.language === 'en' ? 'DE' : 'EN'}
                </Text>
              </TouchableOpacity>
            ),
            headerTitle: (props) =>
              this.props.searchBarShown ? (
                <View style={{ marginLeft: 20 }}>
                  <SearchBar
                    onSearchTextChange={(text) => this.setState({ searchKeyword: text })}
                    onSearchSubmit={() =>
                      RootNavigation.navigate('SearchPage', {
                        searchKeyword: this.state.searchKeyword
                      })
                    }
                  />
                </View>
              ) : (
                <FastImage
                  style={{ width: 125, height: 40 }}
                  source={{ uri: URI + '/uploads/app-logo.png' }}
                />
              ),
            headerRight: () =>
              this.props.searchBarShown ? (
                <TouchableOpacity
                  style={{
                    marginRight: 20,
                    width: 30,
                    height: 25,
                    alignItems: 'center'
                  }}
                  onPress={() => this.props.hideSearchBar()}>
                  <FontAwesome name="close" size={20} color="white" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{ marginRight: 20, width: 30, height: 25, alignItems: 'center' }}
                  onPress={() => this.props.showSearchBar()}>
                  <FontAwesome5 name="search" size={18} color="white" />
                </TouchableOpacity>
              )
          }}>
          <Stack.Screen name="App" component={AppScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({ mainNavigationRed }) => {
  return {
    searchBarShown: mainNavigationRed.searchBarShown,
    searchKeyword: mainNavigationRed.searchKeyword,
    language: mainNavigationRed.language
  };
};

export default connect(mapStateToProps, {
  showSearchBar,
  hideSearchBar,
  setSearchKeyword,
  setCurrentLanguage
})(withTranslation()(AppContainer));
