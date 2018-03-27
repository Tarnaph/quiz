/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View } from 'react-native';

/* Components */
import Card from './components/card';

/* Styles */
import styles from './styles';

export default class Quiz extends Component {
  render() {
    return (
    	<View style={styles.container}>
	    	<View style={styles.scroll} horizontal>
		      <View style={styles.containerScroll}>
		      	<Card />
		      </View>
		     </View>
		  </View>
    );
  }
}
