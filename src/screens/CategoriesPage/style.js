import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/color';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: 18,
  },
  headerStyle: {
    color: COLORS.darkGreen,
    fontSize: 18,
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    margin: 10,
    elevation: 0,
    backgroundColor: COLORS.aquaHaze,
  },
  categoriesListContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingVertical: 10,
  },
});
