/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Styles */
import styles from './styles';

export default class Card extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
      	<View style={styles.boxLeft}>
      		<Icon name={this.props.icon} style={styles.icon} />
      	</View>
      	<View style={styles.boxCenter}>
      		<Text style={styles.title}>{this.props.title}</Text>
      		<Text style={styles.subTitle}>{this.props.subTitle}</Text>
      	</View>
      	<View style={styles.boxRight}>
      		<Icon name="chevron-right"  style={styles.icon} />
      	</View>
      </TouchableOpacity>
    );
  }
}
