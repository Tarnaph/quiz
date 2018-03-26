import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		minHeight: metrics.screenHeight / 10,
		width: metrics.screenWidth - ( metrics.basePadding * 2),
		backgroundColor: colors.dark,
		borderRadius: metrics.baseRadius,
		padding: metrics.basePadding,
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: metrics.basePadding / 2,

	},

	boxLeft: {

	},

	boxCenter: {
		marginRight: metrics.basePadding * 4,
		alignItems: 'flex-start',

	},

	boxRight: {

	},

	title: {
		fontSize: fonts.regular,
		color: colors.light,
	},

	subTitle: {
		fontSize: fonts.small,
		color: colors.regular,
	},

	icon: {
		fontSize: fonts.regular,
		color: colors.light,
	},

});

export default styles;
