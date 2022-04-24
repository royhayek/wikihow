import React, {Component} from 'react';
import {Platform, StyleSheet, SafeAreaView, StatusBar} from 'react-native';

import {connect} from 'react-redux';

class SafeArea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <SafeAreaView style={styles.safeAreaStyle}>{this.props.children}</SafeAreaView>;
  }
}
const mapStateToProps = ({}) => {
  return {};
};
export default connect(mapStateToProps, {})(SafeArea);
const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerTitleStyles: {
    fontFamily: 'Bariol-bold',
    marginRight: 16,
    fontSize: 25,
    textAlign: 'left',
  },
});
