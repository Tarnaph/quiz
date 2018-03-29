import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.dark,
    backgroundColor: colors.dark,
    borderRadius: metrics.baseRadius,
    minHeight: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: metrics.basePadding / 4,
  },

  title: {
    fontSize: fonts.tal,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default styles;
