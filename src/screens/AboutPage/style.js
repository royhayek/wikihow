import { StyleSheet } from 'react-native';
import { mvs } from 'react-native-size-matters';
import { COLORS } from '../../theme/color';
import { fontSize } from '../../theme/fontSize';

export const styles = StyleSheet.create({

});

export const tagsStyles = {
  body: {
    alignSelf: 'baseline',
    fontSize: fontSize.size16,
    color: COLORS.white,
    paddingHorizontal: mvs(20),
    lineHeight: 22
  }
};
