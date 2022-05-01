import React from 'react';
import { withTranslation } from 'react-i18next';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DOMAIN } from '../api/ApiList';
import { COLORS } from '../theme/color';

const ArticlePartHeader = ({ t, part, count }) => {
  return (
    <View style={styles.partsContainer}>
      <View style={styles.partsContainerHeader}>
        <View style={styles.partNumberContainer}>
          <Text style={styles.partNumberText}>{part.part}</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={styles.methodPart}>
            {t('PART')} {part.part} {t('OF')} {count}:
          </Text>
          <Text style={styles.methodtitle}>{part.title}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  partsContainer: {
    flex: 1,
    marginTop: 20,
    position: 'relative',
    backgroundColor: 'white'
  },
  partsContainerHeader: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  partNumberContainer: {
    backgroundColor: COLORS.olivine2,
    padding: 0,
    justifyContent: 'center',
    borderRadius: 7,
    width: 48,
    height: 48,
    margin: 10
  },
  partNumberText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 21,
    fontWeight: 'bold'
  },
  methodPart: {
    fontSize: 17,
    color: COLORS.darkGreen
  },
  methodtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.darkGreen,
    width: '90%'
  }
});

export default withTranslation()(ArticlePartHeader);
