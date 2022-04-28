import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {COLORS} from '../theme/color';

class Loader extends Component {
  render() {
    return <ActivityIndicator size="small" color={COLORS.olivine} style={styles.loaderStyle} />;
  }
}

export const styles = StyleSheet.create({
  loaderStyle: {
    height: '100%',
    alignSelf: 'center',
  },
});

export default Loader;
