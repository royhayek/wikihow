import {StyleSheet} from 'react-native';
import {mvs} from 'react-native-size-matters';
import {COLORS} from '../../theme/color';
import {fontSize} from '../../theme/fontSize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  noArticlesText: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const tagsStyles = {
  body: {
    alignSelf: 'baseline',
    fontSize: fontSize.size16,
    color: COLORS.davyGrey,
    paddingHorizontal: mvs(20),
    lineHeight: 22,
  },
};
