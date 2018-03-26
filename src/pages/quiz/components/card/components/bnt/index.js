/* Core */
import React, { Component } from 'react';

/* Presentational */
import { TouchableOpacity, Text } from 'react-native';

/* Styles */
import styles from './styles';

export default class Btn extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
      	<Text style={styles.title}>Destravar Quiz</Text>
      	<Text style={styles.subTitle}>250 Coins</Text>
      </TouchableOpacity>
    );
  }
}
