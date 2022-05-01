import React, { Component } from 'react';

// packages
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

// navigator
import AppContainer from './navigators/AppNavigator';
import { navigationRef } from './navigators/RootNavigation';

// redux store
import store from './store';

// lang
import './lang/i18n';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <AppContainer />
        </NavigationContainer>
      </Provider>
    );
  }
}
export default App;
