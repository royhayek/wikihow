import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../theme/color';

const SectionHeader = ({icon, noIcon = false, text}) => {
  return (
    <View style={styles.container(noIcon)}>
      {noIcon ? null : (
        <Icon name="chart-line" size={18} color={COLORS.olivine2} />
      )}
      <Text style={styles.header}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: noIcon => ({
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: noIcon ? 0 : 14,
  }),
  header: {
    color: COLORS.darkGreen,
    fontSize: 19,
    fontWeight: 'bold',
    marginVertical: 15,
    marginHorizontal: 5,
  },
});

export default SectionHeader;
