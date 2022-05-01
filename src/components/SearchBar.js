import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { connect } from 'react-redux';

import { COLORS } from '../theme/color';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { withTranslation } from 'react-i18next';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { t } = this.props;
    return (
      <View style={styles.searchBarContainer}>
        <FontAwesome5 name="search" size={18} color="white" />
        <TextInput
          value={this.props.value}
          style={styles.searchTextInput}
          selectionColor="white"
          placeholder={t('SEARCH_HERE')}
          placeholderTextColor={COLORS.white}
          onChangeText={this.props.onSearchTextChange}
          onSubmitEditing={(e) => this.props.onSearchSubmit(e)}
        />
      </View>
    );
  }
}

const mapStateToProps = ({}) => {
  return {};
};

export default connect(mapStateToProps, {})(withTranslation()(SearchBar));
const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchTextInput: {
    width: '100%',
    marginLeft: 10,
    fontSize: 16,
    color: 'white'
  }
});
