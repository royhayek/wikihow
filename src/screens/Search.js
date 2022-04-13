import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAbout} from '../redux/actions/AppActions';
import HTML from 'react-native-render-html';
import {ActivityIndicator} from 'react-native';
import {COLORS} from '../theme/color';

const Search = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator color={COLORS.white} />
        ) : (
          <HTML
            contentWidth={width}
            source={{html: about.aboutUs}}
            tagsStyles={tagsStyles}
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
});

export default Search;
