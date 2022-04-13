import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../theme/color';

const DrawerMenuButton = ({onPress, title, icon}) => {
  const {containerStyle, buttonTextStyle} = styles;
  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={onPress} style={{flexDirection: 'row'}}>
        <Icon name={icon} size={18} color={COLORS.olivine2} />
        <Text style={styles.buttonTextStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  buttonTextStyle: {
    marginLeft: 12,
    fontSize: 16,
    color: 'white',
    borderColor: 'transparent',
  },
});

export {DrawerMenuButton};
