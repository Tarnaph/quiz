/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, ScrollView } from 'react-native';

/* Components */
import Card from './components/card';

/* Styles */
import styles from './styles';

export default class Quiz extends Component {
  render() {
    return (
    	<View style={styles.container}>
    		<Text style={styles.title}>Escolha seu Caminho</Text>

	    	<ScrollView style={styles.scroll} horizontal>
		      <View style={styles.containerScroll}>

		      	<Card />
		      	<Card />
		      	<Card />
		      	<Card />
		      </View>
		     </ScrollView>

		  </View>
    );
  }
}
