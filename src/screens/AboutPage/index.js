import React, {Component} from 'react';
import {ScrollView, View, ActivityIndicator, Dimensions} from 'react-native';

// packages
import {connect} from 'react-redux';
import {ms, mvs} from 'react-native-size-matters';
import HTML from 'react-native-render-html';

// theme
import {COLORS} from '../../theme/color';
import {styles, tagsStyles} from './style';

// actions
import {getAboutScreenData} from './actions';
import {fontSize} from '../../theme/fontSize';
import Loader from '../../components/Loader';

const window = Dimensions.get('window');

class index extends Component {
  componentDidMount() {
    this.props.getAboutScreenData();
  }

  render() {
    console.log('this.props', this.props);

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          {this.props.loadingScreen ? (
            <Loader />
          ) : (
            <HTML
              contentWidth={window.width}
              source={{html: this.props.data.aboutUs}}
              tagsStyles={tagsStyles}
            />
          )}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({aboutPageRed}) => {
  return {
    data: aboutPageRed.data,
    loadingScreen: aboutPageRed.loading_screen,
  };
};
export default connect(mapStateToProps, {getAboutScreenData})(index);
