import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SectionHeader = ({icon, text}) => {
  return (
    <View style={styles.container}>
      <Icon name="chart-line" size={18} color="#93B874" />
      <Text style={styles.header}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 14,
  },
  header: {
    color: '#222222',
    fontSize: 19,
    fontWeight: 'bold',
    marginVertical: 15,
    marginHorizontal: 5,
  },
});

export default SectionHeader;
