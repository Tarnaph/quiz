/* Core */
import React, { Component } from 'react';

/* Presentational */
import { TouchableOpacity, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';

/* Redux */
import { connect } from 'react-redux';

/* Styles */
import styles from './styles';

class Btn extends Component {
	componentWillMount() {
		console.tron.log(this.props);
	}

	/* Navega até o quiz */
	navigateToQuiz = () => (
    this.props.navigation.dispatch(NavigationActions.navigate({
      routeName: 'Quest',
      params: {
        data: 'nada'
      },
    }))
	);

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.navigateToQuiz()}>
      	<Text style={styles.title}>Destravar Quiz</Text>
      	<Text style={styles.subTitle}>250 Coins</Text>
      </TouchableOpacity>
    );
  }
}

/* Pega o global state para o props */
const mapStateToProps = state => ({
  nav: state.nav,
});

/* Pega func para o props */
const mapDispatchToProps = dispatch => ({
});

/* Connecta os dois, podendo ser null */
export default connect(mapStateToProps, mapDispatchToProps)(Btn);