import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingBottom: 50,
  },
  categoryInfo: {
    height: 300,
    marginTop: 30,
    justifyContent: 'center',
  },
  categoryCover: {
    height: 300,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  categoryName: {
    color: COLORS.white,
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
  categorySearchContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 30,
    height: 30,
    marginTop: 5,
    paddingLeft: 10,
    paddingRight: 20,
    width: '60%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  categorySearchInput: {
    color: COLORS.stormGrey,
    paddingVertical: 0,
    fontSize: 12,
    alignSelf: 'center',
  },
  categoryDescription: {
    fontSize: 16,
    color: COLORS.black,
    lineHeight: 25,
    fontWeight: 'normal',
    marginTop: 15,
    marginBottom: 5,
    marginHorizontal: 5,
  },
  header: {
    color: COLORS.black,
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    marginHorizontal: 4,
  },
});
