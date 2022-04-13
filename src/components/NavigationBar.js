import React, {Component} from 'react';
import {Text, Image, View, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Ionicons from 'react-native-vector-icons/Feather';
import {COLORS} from '../theme/color';

class NavigationBar extends Component {
  state = {
    cartCount: 0,
    showIcon: null,
    componentTheme: {},
    drawerState: Actions.currentScene,
    showWarning: false,
    warningMsg: '',
  };
  onDrawPress = () => {
    if (Actions.currentScene === 'DrawerOpen') {
      Actions.drawerClose();
    } else {
      Actions.drawerOpen();
    }
    this.setState({
      drawerState: Actions.currentScene,
    });
  };

  componentDidMount() {}

  renderMenuAlertNotify(hasAlertNotify) {
    const {drawerState} = this.state;
    const notOpen = drawerState !== 'DrawerOpen';
    return hasAlertNotify && notOpen ? (
      <View style={styles.alertCircle} />
    ) : null;
  }

  render() {
    const {containerStyle, leftStyle, bodyStyle} = styles;

    return (
      <View
        androidStatusBarColor="transparent"
        iosBarStyle="light-content"
        style={containerStyle}>
        <View style={leftStyle}>
          <Ionicons
            name="menu"
            size={25}
            onPress={this.onDrawPress}
            color="white"
          />
          {this.props.center ? (
            <View style={bodyStyle}>
              <Text>Test</Text>
            </View>
          ) : null}
        </View>
        {/* {this.state.showIcon && (
          <View style={[rightStyle]}>
            {this.props.right && this.state.cartCount > 0 ? (
              <Button onPress={this.onCartPress} transparent>
                <Image
                  style={cartImageStyle}
                  source={this.state.componentTheme.CART_IMAGE}
                />
                <Text
                  allowFontScaling={FONT_SCALLING}
                  style={[cartNumberTextStyle, {backgroundColor: thirdColor}]}>
                  {this.state.cartCount}
                </Text>
              </Button>
            ) : null}
          </View>
        )} */}
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    height: 64,
    backgroundColor: COLORS.olivine2,
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 10,
  },
  logoImageStyle: {
    width: 168,
    height: 28,
  },
  bodyStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 61,
  },
  cartImageStyle: {
    width: 31,
    height: 26.5,
    marginRight: 5,
  },
  rightStyle: {
    alignItems: 'center',
    width: null,
    position: 'absolute',
    right: 10,
    paddingTop: 10,
    justifyContent: 'flex-end',
  },
  roadsterTextStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 36.5,
    paddingTop: 10,
    paddingLeft: 4,
  },
  leftIconStyle: {
    width: 27,
    height: 17,
    paddingLeft: 30,
    paddingRight: 30,
    resizeMode: 'contain',
  },
  leftStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartNumberTextStyle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'red',
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderColor: 'red',
    paddingTop: 0,
    overflow: 'hidden',
    minWidth: 21.5,
    minHeight: 21.5,
  },
  dinerTextStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 10,
    marginLeft: -8,
    transform: [{rotate: '-90deg'}],
    marginTop: -3,
  },
  notifyCircle: {
    backgroundColor: 'red',
    borderRadius: 25,
    width: 15,
    height: 15,
    position: 'absolute',
    left: 8,
    top: 6,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,
  },
  notifyText: {
    color: 'white',
    fontSize: 11,
  },
  alertCircle: {
    width: 14,
    height: 14,
    backgroundColor: 'red',
    position: 'absolute',
    borderRadius: 6,
    left: 23,
    zIndex: 1,
  },
};

export default NavigationBar;
