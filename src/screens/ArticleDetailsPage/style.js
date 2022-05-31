import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';
import { COLORS } from '../../theme/color';
import { fontSize } from '../../theme/fontSize';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: COLORS.black
  },
  titleAndActionBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  blackContainer: {
    backgroundColor: COLORS.black
  },
  updatedDate: {
    color: COLORS.white,
    fontSize: 12,
    marginBottom: 15,
    fontWeight: 'bold',
    marginTop: mvs(2)
  },
  tabContainer: {
    position: 'relative',
    borderWidth: 1,
    borderColor: COLORS.cloudyGrey,
    backgroundColor: COLORS.cloudyGrey,
    marginHorizontal: -15,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowRadius: 6,
    elevation: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  articleTitleText: {
    flex: 1,
    fontSize: 25,
    color: COLORS.white,
    fontWeight: 'bold',
    marginRight: ms(5)
  },
  publisherContainer: { flexDirection: 'row' },
  publishedByText: {
    fontSize: 12,
    color: COLORS.white,
    fontWeight: 'bold'
  },
  authorNameText: {
    fontSize: 12,
    color: COLORS.orange,
    fontWeight: 'bold'
  },
  tab: {
    position: 'relative',
    marginHorizontal: 10,
    marginVertical: 0,
    fontWeight: 'bold',
    fontSize: 12,
    paddingVertical: 10
  },
  tabTitle: {
    color: COLORS.white,
    fontSize: 12.8,
    fontWeight: 'bold'
  },
  tabLine: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#6d9d6c',
    height: 4,
    width: '90%',
    marginLeft: '5%',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  partsContainer: {
    width: '100%',
    position: 'relative',
    backgroundColor: 'white'
  },
  partsContainerHeader: {
    flexDirection: 'row'
  },
  aboutThisArticleText: {
    fontSize: fontSize.size20,
    padding: 16,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: COLORS.cloudyGrey
  },
  articleVideoContainer: {
    flex: 1,
    height: mvs(200),
    backgroundColor: 'black',
    marginVertical: mvs(20)
  },
  articleVideo: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  authorInfoContainer: {
    paddingVertical: 15,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: COLORS.aquaHaze
  },
  authorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 8
  },
  authoredByContainer: {
    marginLeft: 15,
    justifyContent: 'center'
  },
  authoredByText: {
    fontSize: fontSize.size14,
    color: COLORS.white,
    fontWeight: 'bold'
  },
  additionalInfoContainer: {
    borderBottomWidth: 1,
    borderColor: '#f3f3f3',
    paddingVertical: 10
  },
  additionalInfoText: {
    fontSize: fontSize.size15,
    color: COLORS.white
  },
  additionalInfoValueText: {
    flex: 1,
    fontSize: fontSize.size15,
    color: COLORS.white,
    fontWeight: 'bold'
  },
  rowContainer: {
    flexDirection: 'row'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    margin: 15,
    backgroundColor: COLORS.black,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2
  },
  videoTranscriptViewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  videoTranscriptTitle: {
    color: COLORS.orange,
    flex: 1,
    fontSize: fontSize.size18
  },
  videoTranscriptBtn: {
    backgroundColor: COLORS.orange,
    paddingVertical: mvs(6),
    paddingHorizontal: mvs(10),
    borderRadius: 4
  },
  closeBtn: {
    color: COLORS.white
  }
});

export const tagsStyles = {
  body: {
    fontSize: fontSize.size16,
    color: COLORS.white,
    lineHeight: 25
  }
};

export const tipsStyles = {
  body: {
    fontSize: fontSize.size16,
    color: COLORS.white,
    lineHeight: 25,
    paddingLeft: 10,
    paddingRight: 20
  }
};

export const articleInfoStyles = {
  body: {
    fontSize: fontSize.size15,
    color: COLORS.white,
    lineHeight: 21,
    paddingLeft: 10,
    paddingRight: 20
  }
};

export const videoTranscriptStyles = {
  body: {
    fontSize: fontSize.size15,
    color: COLORS.white,
    lineHeight: 21
  }
};

export const referencesStyles = {
  body: {
    fontSize: fontSize.size15,
    color: COLORS.white,
    lineHeight: 24,
    paddingLeft: 10,
    paddingRight: 20
  }
};

export const warningsStyles = {
  body: {
    fontSize: fontSize.size16,
    color: COLORS.white,
    lineHeight: 25,
    paddingLeft: 10,
    paddingRight: 20
  }
};
