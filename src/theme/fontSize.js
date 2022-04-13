import {Platform} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const isIOS = Platform.OS === 'ios';
export const fontSize = {
  size10: isIOS ? moderateScale(10) : moderateScale(8),
  size11: isIOS ? moderateScale(11) : moderateScale(9),
  size12: isIOS ? moderateScale(12) : moderateScale(10),
  size13: isIOS ? moderateScale(13) : moderateScale(11),
  size14: isIOS ? moderateScale(14) : moderateScale(12),
  size15: isIOS ? moderateScale(15) : moderateScale(13),
  size16: isIOS ? moderateScale(16) : moderateScale(14),
  size17: isIOS ? moderateScale(17) : moderateScale(15),
  size18: isIOS ? moderateScale(18) : moderateScale(16),
  size19: isIOS ? moderateScale(19) : moderateScale(17),
  size20: isIOS ? moderateScale(20) : moderateScale(18),
  size21: isIOS ? moderateScale(21) : moderateScale(19),
  size22: isIOS ? moderateScale(22) : moderateScale(20),
  size23: isIOS ? moderateScale(23) : moderateScale(21),
  size24: isIOS ? moderateScale(24) : moderateScale(22),
  size25: isIOS ? moderateScale(25) : moderateScale(23),
  size26: isIOS ? moderateScale(26) : moderateScale(24),
  size27: isIOS ? moderateScale(27) : moderateScale(25),
  size28: isIOS ? moderateScale(28) : moderateScale(26),
  size29: isIOS ? moderateScale(29) : moderateScale(27),
  size30: isIOS ? moderateScale(30) : moderateScale(28),
  size31: isIOS ? moderateScale(31) : moderateScale(29),
  size32: isIOS ? moderateScale(32) : moderateScale(30),
};
