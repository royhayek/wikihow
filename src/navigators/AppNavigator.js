import React, {Component, useState} from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';
import DrawerContent from './DrawerContent';

import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

//// Screens
import HomePage from '../screens/HomePage';
import ArticlesPage from '../screens/ArticlesPage';
import CategoriesPage from '../screens/CategoriesPage';
import ArticleDetailsPage from '../screens/ArticleDetailsPage';
import AboutPage from '../screens/AboutPage';
import AuthorProfilePage from '../screens/AuthorProfilePage';
import SearchPage from '../screens/SearchPage';
import RandomArticlePage from '../screens/RandomArticlePage';

// import {check_authentication} from './actions';
import {COLORS} from '../theme/color';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {toggleSearchBar} from './actions';
import FastImage from 'react-native-fast-image';
import SearchBar from '../components/SearchBar';

import * as RootNavigation from './RootNavigation';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppStack = createStackNavigator();
const HomeStack = createStackNavigator();
const RandomArticleStack = createStackNavigator();
const CategoriesStack = createStackNavigator();
const SettingsStack = createStackNavigator();

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

const RandomArticleStackScreen = () => {
  return (
    <RandomArticleStack.Navigator>
      <RandomArticleStack.Screen
        name="RandomArticle"
        component={RandomArticlePage}
        options={({route, navigation}) => ({
          headerShown: false,
          headerTintColor: COLORS.black,
          backgroundColor: COLORS.headerColor,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false,
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
  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: '',
    };
  }

  render() {
    console.log('searchBarShown', this.props.searchBarShown);

    return (
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.olivine2} />
        <Drawer.Navigator
          drawerContent={props => <DrawerContent {...props} />}
          screenOptions={{
            headerTitle: props =>
              this.props.searchBarShown ? (
                <SearchBar
                  onSearchTextChange={text =>
                    this.setState({searchKeyword: text})
                  }
                  onSearchSubmit={() =>
                    RootNavigation.navigate('SearchPage', {
                      searchKeyword: this.state.searchKeyword,
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
                  onPress={() => this.props.toggleSearchBar()}>
                  <FontAwesome name="close" size={18} color="white" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{marginRight: 20}}
                  onPress={() => this.props.toggleSearchBar()}>
                  <FontAwesome5 name="search" size={18} color="white" />
                </TouchableOpacity>
              ),
          }}>
          <Drawer.Screen name="HomeScreen" component={HomeStackScreen} />
          <Drawer.Screen
            name="RandomArticleScreen"
            component={RandomArticleStackScreen}
            options={{unmountOnBlur: true}}
          />
          <Drawer.Screen
            name="CategoriesScreen"
            component={CategoriesStackScreen}
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
  };
};

export default connect(mapStateToProps, {toggleSearchBar})(AppContainer);
