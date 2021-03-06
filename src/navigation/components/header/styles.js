import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.darker,
    paddingVertical: metrics.smallMargin,
    paddingHorizontal: metrics.baseMargin,
    height: metrics.navBarHeight,
    elevation: 10,
  },

  title: {
    flex: 0.33333,
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.white,
  },

  iconContainer: {
    flexDirection: 'row',
  },

  nav: {
    flex: 0.33333,

  },

});

export default styles;
