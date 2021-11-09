// Imports: Dependencies
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {StatusBar, StyleSheet, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './screens/Home';
import CategoryList from './components/CategoryList';
import ArticleList from './components/ArticleList';
import DrawerContent from './router/DrawerContent';
import Articles from './screens/Articles';
import {navigationRef} from './RootNavigation';
import Categories from './screens/Categories';
import ArticleDetails from './screens/ArticleDetails';
import Profile from './screens/Profile';
import {NativeBaseProvider} from 'native-base';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

class App extends Component {
  createHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ArticleDetails"
        component={ArticleDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );

  render() {
    return (
      <NativeBaseProvider>
        <Provider store={store}>
          <NavigationContainer ref={navigationRef}>
            <Drawer.Navigator
              drawerContent={props => <DrawerContent {...props} />}
              screenOptions={{
                headerTitle: 'WikiHow',
                headerStyle: {elevation: 0, backgroundColor: '#93B874'},
              }}>
              <Drawer.Screen name="Home" children={this.createHomeStack} />
              <Drawer.Screen name="Categories" component={Categories} />
            </Drawer.Navigator>
          </NavigationContainer>
        </Provider>
      </NativeBaseProvider>
    );
  }
}

export default App;
