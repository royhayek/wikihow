import React from 'react';
import {Dimensions} from 'react-native';
import {Scene, Router, Stack, Drawer} from 'react-native-router-flux';
import CategoryList from '../components/CategoryList';
import NavigationBar from '../components/NavigationBar';
import Articles from '../screens/Articles';
import Home from '../screens/Home';
import DrawerContent from './DrawerContent';

const SCREEN_WIDTH = Dimensions.get('window').width;

const RouterComponent = () => {
  return (
    <Router
      sceneStyle={{shadowColor: 'transparent'}}
      hideNavBar={false}
      navTransparent={true}>
      <Stack key="root" hideNavBar>
        <Drawer
          navTransparent
          navBar={NavigationBar}
          hideNavBar={false}
          contentComponent={DrawerContent}
          drawerWidth={SCREEN_WIDTH / 1.5}
          left
          right
          center
          key="drawer">
          <Scene key="home" component={Home} initial />
          <Scene key="categories" component={CategoryList} hideNavBar />
        </Drawer>
        <Scene
          key="articles"
          component={Articles}
          hideNavBar
          navBar={NavigationBar}
        />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
