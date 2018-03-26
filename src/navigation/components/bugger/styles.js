import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: colors.darker,
    padding: metrics.basePadding,
    elevation: 10,
  },

  topContainer: {
    height: metrics.screenHeight / 4,
    borderBottomColor: colors.dark,
    borderBottomWidth: 1,
  },

  nameContainer: {
    paddingVertical: metrics.basePadding / 2,
  },

  name: {
    fontSize: fonts.bigger,
    color: colors.white,
    fontWeight: 'bold',
  },

  coinsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: metrics.screenWidth / 4,
  },

  coinsTitle: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.white,
  },

  coinsSub: {
    fontSize: fonts.regular,
    color: colors.danger,
  },

  iconContainer: {
    flexDirection: 'row',
    padding: metrics.basePadding / 2,
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: metrics.baseRadius,
  },

  logoIcon: {
    fontSize: fonts.regular,
    color: colors.white,
  },

  link: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.white,
    marginLeft: metrics.basePadding,
  },

  active: {
    backgroundColor: colors.danger,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  bottomContainer: {
    borderTopWidth: 1,
    borderTopColor: colors.dark,
    height: metrics.screenHeight / 8,
    justifyContent: 'flex-end',
  },

  bottomTitle: {
    fontSize: fonts.smaller,
    color: colors.white,
    fontWeight: 'bold',
  }

});

export default styles;
