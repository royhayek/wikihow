import { StyleSheet } from 'react-native';
import { ms, mvs, vs } from 'react-native-size-matters';
import { COLORS } from '../../theme/color';
import { fontSize } from '../../theme/fontSize';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.black
  },
  container: {
    height: vs(220),
    position: 'relative',
    paddingHorizontal: ms(15)
  },
  cover: {
    width: '55%',
    height: vs(130),
    position: 'absolute',
    right: 15,
    bottom: 0,
    zIndex: 0
  },
  welcomeTitle: {
    fontSize: 26,
    textAlign: 'left',
    color: COLORS.white,
    paddingTop: 25,
    fontWeight: 'bold',
    marginBottom: 15,
    zIndex: 1
  },
  welcomeSubtitle: {
    width: '60%',
    fontSize: 19,
    color: COLORS.white,
    textAlign: 'left',
    zIndex: 1
  },
  searchContainer: {
    backgroundColor: COLORS.orange,
    paddingHorizontal: ms(15),
    paddingVertical: mvs(12)
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
    alignSelf: 'center'
  },
  searchInput: {
    textAlign: 'left',
    paddingHorizontal: ms(10),
    paddingVertical: mvs(10),
    fontSize: fontSize.size19,
    color: COLORS.cloudyGrey
  },
  articleWrapList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: ms(5)
  },
  loaderStyle: {
    width: '100%',
    paddingVertical: mvs(50)
  },
  bottomSpacing: {
    height: mvs(20)
  }
});
