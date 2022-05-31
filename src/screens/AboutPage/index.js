import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';

// packages
import { connect } from 'react-redux';
import HTML from 'react-native-render-html';

// theme
import { tagsStyles } from './style';

// actions
import { getAboutScreenData } from './actions';
import Loader from '../../components/Loader';

const window = Dimensions.get('window');

class index extends Component {
  componentDidMount() {
    this.props.getAboutScreenData();
  }

  render() {
    return this.props.loadingScreen ? (
      // <View style={{ flex: 1, alignSelf: 'center' }}>
      <Loader />
    ) : (
      // </View>
      <ScrollView>
        <HTML
          contentWidth={window.width}
          source={{ html: this.props.data.aboutUs }}
          tagsStyles={tagsStyles}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ aboutPageRed }) => {
  return {
    data: aboutPageRed.data,
    loadingScreen: aboutPageRed.loading_screen
  };
};
export default connect(mapStateToProps, { getAboutScreenData })(index);
