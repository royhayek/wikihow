import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/color';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  updatedDate: {
    color: '#595959',
    fontSize: 12,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  tabContainer: {
    position: 'relative',
    borderWidth: 1,
    borderColor: '#E6EEE0',
    backgroundColor: '#f7faf6',
    marginHorizontal: -15,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowRadius: 6,
    elevation: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  articleTitleText: {
    fontSize: 25,
    color: '#222222',
    fontWeight: 'bold',
    marginTop: 15,
  },
  publisherContainer: {flexDirection: 'row'},
  publishedByText: {
    fontSize: 12,
    color: '#222222',
    fontWeight: 'bold',
  },
  authorNameText: {
    fontSize: 12,
    color: '#307530',
    fontWeight: 'bold',
  },
  tab: {
    position: 'relative',
    marginHorizontal: 10,
    marginVertical: 0,
    fontWeight: 'bold',
    fontSize: 12,
    paddingVertical: 10,
  },
  tabTitle: {
    color: '#707070',
    fontSize: 12.8,
    fontWeight: 'bold',
  },
  tabLine: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#6d9d6c',
    height: 4,
    width: '90%',
    marginLeft: '5%',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  partsContainer: {
    width: '100%',
    position: 'relative',
    backgroundColor: 'white',
  },
  partsContainerHeader: {
    flexDirection: 'row',
  },
});

export const tagsStyles = {
  body: {
    fontSize: 18,
    color: '#545454',
    lineHeight: 26,
  },
};
