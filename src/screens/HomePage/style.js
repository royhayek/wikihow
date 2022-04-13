import {StyleSheet} from 'react-native';
import {ms, mvs} from 'react-native-size-matters';
import {COLORS} from '../../theme/color';
import {fontSize} from '../../theme/fontSize';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    height: mvs(220),
    position: 'relative',
    paddingHorizontal: ms(15),
  },
  cover: {
    width: '45%',
    height: 120,
    position: 'absolute',
    right: 15,
    bottom: 0,
  },
  welcomeTitle: {
    fontSize: 26,
    textAlign: 'left',
    color: COLORS.blackCow,
    paddingTop: 15,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  welcomeSubtitle: {
    width: '50%',
    fontSize: 19,
    color: COLORS.blackCow,
    textAlign: 'left',
  },
  searchContainer: {
    backgroundColor: COLORS.olivine,
    paddingHorizontal: ms(15),
    paddingVertical: mvs(12),
  },
  searchInputRow: {
    width: '100%',
    backgroundColor: COLORS.aquaHaze,
    borderRadius: 8,
    marginLeft: 15,
    marginRight: 15,
    paddingHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  searchInput: {
    textAlign: 'left',
    paddingHorizontal: ms(10),
    paddingVertical: mvs(10),
    fontSize: fontSize.size19,
    color: COLORS.cloudGrey,
  },
});
