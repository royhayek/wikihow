import {StyleSheet} from 'react-native';
import {ms} from 'react-native-size-matters';
import {COLORS} from '../../theme/color';
import {fontSize} from '../../theme/fontSize';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#F0F4EB',
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  headerStyle: {
    color: COLORS.darkGreen,
    fontSize: fontSize.size22,
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    elevation: 0,
    backgroundColor: COLORS.aquaHaze,
  },
  categoriesListContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    paddingHorizontal: ms(8),
  },
});
