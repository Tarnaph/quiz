import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.darker,
	},

	title: {
		fontSize: fonts.bigger,
		fontWeight: 'bold',
		color: colors.white,
		padding: metrics.basePadding,
		marginVertical: metrics.basePadding / 4,
		textAlign: 'center',
		marginTop: metrics.basePadding * 2,
	},

	boxCenter: {
		padding: metrics.basePadding,
	},

	boxBottom: {
		width: '100%',
		position: 'absolute',
		bottom: 0,
	},

	question: {
		position: 'absolute',
		top: 0,
		alignSelf: 'center',
		fontSize: fonts.regular,
		fontWeight: 'bold',
		color: colors.dark,
	}
});

export default styles;
