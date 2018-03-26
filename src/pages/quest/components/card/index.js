/* Core */
import React, { Component } from 'react';

/* Presentational */
import { TouchableOpacity, Text } from 'react-native';

/* Styles */
import styles from './styles';

export default class Card extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
      	<Text style={styles.title}> Hexokinase</Text>
      </TouchableOpacity>
    );
  }
}
