import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		height: metrics.screenHeight  * 0.7,
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
  	flex: 0.6,
  	marginTop: metrics.basePadding,
  	padding: metrics.basePadding,
  	alignItems: 'center',
  },

  title: {
  	fontSize: fonts.bigger,
  	fontWeight: 'bold',
  	color: colors.daker,
  	marginBottom: metrics.basePadding / 2,
  },

  subtitle: {
  	padding: metrics.basePadding,
  	fontSize: fonts.regular,
  	color: colors.regular,
  },
});

export default styles;
