import React, { Component } from 'react';

// packages
import { Provider } from 'react-redux';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

// navigator
import AppContainer from './navigators/AppNavigator';
import { navigationRef } from './navigators/RootNavigation';
import { getTrackingStatus, requestTrackingPermission } from 'react-native-tracking-transparency';

// redux store
import store from './store';

// lang
import './lang/i18n';

// admob
import { AppOpenAdProvider, TestIds } from '@react-native-admob/admob';

// default navigation theme in navigation v6
const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      splashDismissed: false,
      interstitialAd: null,
      adLoaded: false
    };
  }

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    this.checkTrackingStatus();
    SplashScreen.hide();
  }

  checkTrackingStatus = async () => {
    const trackingStatus = await getTrackingStatus();
    if (trackingStatus === 'authorized' || trackingStatus === 'unavailable') {
      // enable tracking features
      this.setState({ loadOnDismissed: true });
    } else if (trackingStatus === 'denied') {
      // disable tracking features
    } else if (trackingStatus === 'authorized') {
      // enable tracking features
      this.setState({ loadOnDismissed: true });
    } else if (trackingStatus === 'restricted') {
      // device is restricted, the alert cannot be shown
    } else if (trackingStatus === 'not-determined') {
      // need to ask the user for permission
      this.requestTrackingPermissionFromUser();
    }
  };

  requestTrackingPermissionFromUser = async () => {
    const trackingStatus = await requestTrackingPermission();
    if (trackingStatus === 'authorized' || trackingStatus === 'unavailable') {
      // enable tracking features
      this.setState({ loadOnDismissed: true });
    }
  };

  render() {
    return (
      <AppOpenAdProvider
        unitId="ca-app-pub-7401419522603320/5679786602"
        options={{ showOnColdStart: true, loadOnDismissed: this.state.loadOnDismissed }}>
        <Provider store={store}>
          <NavigationContainer ref={navigationRef} theme={navTheme}>
            <AppContainer />
          </NavigationContainer>
        </Provider>
      </AppOpenAdProvider>
    );
  }
}
export default App;
