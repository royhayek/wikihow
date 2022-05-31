import { StyleSheet } from 'react-native';
import { mvs } from 'react-native-size-matters';
import { COLORS } from '../../theme/color';

export const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    width: '100%'
  },
  avatar: {
    marginTop: 10,
    width: 160,
    height: 160,
    borderRadius: 14,
    alignSelf: 'center'
  },
  websiteBtn: {
    backgroundColor: COLORS.orange,
    borderRadius: 7,
    padding: 0,
    marginVertical: 10,
    width: 230,
    borderWidth: 1,
    borderColor: COLORS.orange,
    alignSelf: 'center'
  },
  websiteBtnText: {
    color: COLORS.white,
    textAlign: 'center',
    lineHeight: 30,
    fontSize: 16
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingRight: 5,
    color: COLORS.white
  },
  bio: {
    marginTop: 10,
    fontSize: 16,
    paddingRight: 5,
    color: COLORS.white,
    lineHeight: 25
  },
  moreInfoContainer: {
    marginHorizontal: 15
  },
  divider: {
    marginVertical: 20,
    backgroundColor: COLORS.cloudyGrey,
    height: mvs(0.5)
  },
  articlesHeader: {
    color: COLORS.white,
    fontSize: 19,
    marginBottom: 20
  }
});
