import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.darker,
		padding: metrics.basePadding,
	},

	topContainer: {

	},

	bottomContainer: {
		marginTop: metrics.basePadding,
	},

	title: {
		fontSize: fonts.big,
		color: colors.light,
	},
});

export default styles;
