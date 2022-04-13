import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/color';

export const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  avatar: {
    marginTop: 10,
    width: 160,
    height: 160,
    borderRadius: 14,
    alignSelf: 'center',
  },
  websiteBtn: {
    backgroundColor: COLORS.olivine,
    borderRadius: 7,
    padding: 0,
    marginVertical: 10,
    width: 230,
    borderWidth: 1,
    borderColor: COLORS.olivine,
    alignSelf: 'center',
  },
  websiteBtnText: {
    color: COLORS.white,
    textAlign: 'center',
    lineHeight: 30,
    fontSize: 16,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingRight: 5,
    color: COLORS.vampireGrey,
  },
  bio: {
    marginTop: 10,
    fontSize: 16,
    paddingRight: 5,
    color: COLORS.davyGrey,
    lineHeight: 25,
  },
  moreInfoContainer: {
    marginHorizontal: 15,
  },
  divider: {
    marginVertical: 20,
    color: 'black',
  },
  articlesHeader: {
    color: COLORS.vampireGrey,
    fontSize: 19,
    marginBottom: 20,
  },
});
