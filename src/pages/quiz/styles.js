import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.darker,
		justifyContent: 'center',
		alignItems: 'center',
	},

	scroll: {

	},

	containerScroll: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},

	title: {
		fontSize: fonts.big,
		fontWeight: 'bold',
		color: colors.white,
		position: 'absolute',
		top: 20,
	},
});

export default styles;
