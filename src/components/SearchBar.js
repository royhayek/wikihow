import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
  View,
} from 'react-native';

import {connect} from 'react-redux';

import {STATUS_BAR_HEIGHT} from '../styles';
import {COLORS} from '../theme/color';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.searchBarContainer}>
        <FontAwesome5 name="search" size={18} color="white" />
        <TextInput
          style={styles.searchTextInput}
          selectionColor="white"
          placeholder="Search here...."
          placeholderTextColor={COLORS.white}
          onChangeText={this.props.onSearchTextChange}
          onSubmitEditing={e => this.props.onSearchSubmit(e)}
        />
      </View>
    );
  }
}

const mapStateToProps = ({}) => {
  return {};
};

export default connect(mapStateToProps, {})(SearchBar);
const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchTextInput: {
    width: '100%',
    marginLeft: 10,
    fontSize: 16,
    color: 'white',
  },
});
