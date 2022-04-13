import React, {Component} from 'react';
import {
  ScrollView,
  View,
  ActivityIndicator,
  Dimensions,
  Text,
} from 'react-native';

// packages
import {connect} from 'react-redux';
import HTML from 'react-native-render-html';

// theme
import {COLORS} from '../../theme/color';
import {styles, tagsStyles} from './style';

// actions
import {getAboutScreenData} from './actions';
import SafeArea from '../../components/SafeArea';

const window = Dimensions.get('window');

class index extends Component {
  componentDidMount() {
    // this.props.getAboutScreenData();
  }

  render() {
    console.log('this.props', this.props);

    return (
      <SafeArea>
        <ScrollView>
          <View style={styles.container}>
            <Text>Search</Text>
          </View>
        </ScrollView>
      </SafeArea>
    );
  }
}

const mapStateToProps = ({searchPageRed}) => {
  return {
    // data: aboutPageRed.data,
    // loadingScreen: aboutPageRed.loading_screen,
  };
};
export default connect(mapStateToProps, {getAboutScreenData})(index);
