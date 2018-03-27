import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
	container: {
		width: 250,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.danger,
		marginTop: metrics.basePadding,
		borderRadius: metrics.baseRadius * 4,
	},

	title: {
		fontSize: fonts.big,
		fontWeight: 'bold',
		color: colors.white,
	},

	subTitle: {
		fontSize: fonts.small,
		color: colors.white,
	},
});

export default styles;
