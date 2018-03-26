import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		height: metrics.navBarHeight,
		width: '100%',
		backgroundColor: colors.dark,
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: metrics.basePadding * 2,
	},

	title: {
		fontSize: fonts.bigger,
		fontWeight: 'bold',
		color: colors.success,
	},

	icon: {
		fontSize: fonts.big,
		color: colors.regular,
	},

});

export default styles;
