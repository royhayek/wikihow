import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../theme/color';

const ArticleParagraphHeader = ({ title, icon }) => {
  return (
    <View style={styles.partsContainer}>
      <View style={styles.partsContainerHeader}>
        <View style={styles.partNumberContainer}>{icon}</View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={styles.methodtitle}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  partsContainer: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.cloudyGrey
  },
  partsContainerHeader: {
    flexDirection: 'row',
    paddingHorizontal: 5
  },
  partNumberContainer: {
    backgroundColor: COLORS.orange,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    width: 48,
    height: 48,
    margin: 10
  },
  partNumberText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 21,
    fontWeight: 'bold'
  },
  methodPart: {
    fontSize: 17,
    color: COLORS.white
  },
  methodtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.white,
    width: '90%'
  }
});

export default ArticleParagraphHeader;
