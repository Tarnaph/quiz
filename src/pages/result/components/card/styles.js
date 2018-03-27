import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: metrics.screenHeight * 0.8,
    width: metrics.screenWidth * 0.8,
    borderRadius: metrics.baseRadius,
    elevation: 10,
    marginHorizontal: metrics.screenWidth * 0.1,
    justifyContent: 'space-between',
  },

  avatar: {
    flex: 1,
  },

  boxCenter: {
    flex: 1,
    paddingHorizontal: metrics.basePadding,
    marginVertical: metrics.basePadding,
  },

  title: {
    fontSize: fonts.bigger,
    fontWeight: 'bold',
    color: colors.daker,
    marginBottom: metrics.basePadding / 2,
  },

  subTitle: {
    fontSize: fonts.regular,
    color: colors.daker,
  },

});

export default styles;
