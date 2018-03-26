/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Styles */
import styles from './styles';

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
	      <View style={styles.boxTop}>
	      		<Icon name="flag" style={styles.icon} />
	      </View>
	      <View style={styles.boxCenter}>
	      	<Text style={styles.title}>09</Text>
	      </View>
	      <View style={styles.boxFooter}>
	      	<Icon name="heart" style={styles.icon} />
	      </View>

      </View>
    );
  }
}
