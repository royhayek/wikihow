import {StyleSheet} from 'react-native';
import {ms, mvs} from 'react-native-size-matters';
import {COLORS} from '../../theme/color';
import {fontSize} from '../../theme/fontSize';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingBottom: mvs(50),
  },
  categoryInfo: {
    height: mvs(300),
    marginTop: mvs(30),
    justifyContent: 'center',
  },
  categoryCover: {
    height: mvs(300),
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  categoryName: {
    color: COLORS.white,
    fontSize: fontSize.size38,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
  categorySearchContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 30,
    height: mvs(32),
    marginTop: mvs(5),
    paddingLeft: ms(15),
    paddingRight: ms(20),
    width: '60%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  categorySearchInput: {
    color: COLORS.stormGrey,
    paddingVertical: 0,
    fontSize: fontSize.size13,
    alignSelf: 'center',
  },
  categoryDescription: {
    fontSize: fontSize.size15,
    color: COLORS.black,
    lineHeight: 25,
    fontWeight: 'normal',
    marginTop: mvs(15),
    marginBottom: mvs(5),
    marginHorizontal: ms(8),
  },
  header: {
    color: COLORS.black,
    fontSize: fontSize.size18,
    fontWeight: 'bold',
    marginVertical: mvs(8),
    marginHorizontal: ms(4),
  },
  alignSelfCenter: {alignSelf: 'center'},
  wrapListContainer: {
    marginLeft: ms(5),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  noArticlesContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: mvs(30),
  },
  loaderStyle: {
    width: '100%',
    paddingVertical: mvs(50),
  },
});
