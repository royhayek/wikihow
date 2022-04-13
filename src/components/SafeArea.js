import React, {Component} from 'react';
import {Platform, StyleSheet, SafeAreaView, StatusBar} from 'react-native';

import {connect} from 'react-redux';

import {STATUS_BAR_HEIGHT} from '../styles';
import {COLORS} from '../theme/color';

class SafeArea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.safeAreaStyle(this.props.backgroundColor)}>
        {this.props.children}
      </SafeAreaView>
    );
  }
}
const mapStateToProps = ({}) => {
  return {};
};
export default connect(mapStateToProps, {})(SafeArea);
const styles = StyleSheet.create({
  safeAreaStyle: backgroundColor => ({
    flex: 1,
    backgroundColor:
      backgroundColor == null ? COLORS.background : 'transparent',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }),
  headerTitleStyles: {
    fontFamily: 'Bariol-bold',
    marginRight: 16,
    fontSize: 25,
    textAlign: 'left',
  },
});
