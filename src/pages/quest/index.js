/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, ScrollView, Text } from 'react-native';

/* Components */
import Card from './components/card';
import Footer from './components/footer';

/* Stytles */
import styles from './styles';

export default class Quest extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<Text style={styles.question}>Question 1/20</Text>
      	<View style={styles.boxTop}>
      		<Text style={styles.title}>WHich of the following enzymes convert glucose into clucose-e-p during glyclosis?</Text>
      	</View>
      	<View style={styles.boxCenter}>
      		<Card />
      		<Card />
      		<Card />
      		<Card />
      		<Card />
      	</View>
      	<View style={styles.boxBottom}>
      		<Footer />
      	</View>
      </View>
    );
  }
}
