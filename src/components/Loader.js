import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import {COLORS} from '../theme/color';

class Loader extends Component {
  render() {
    return (
      <ActivityIndicator
        size="small"
        color={COLORS.olivine}
        style={{height: '100%'}}
      />
    );
  }
}

export default Loader;
