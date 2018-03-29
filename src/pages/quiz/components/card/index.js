/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, Image } from 'react-native';

/* Components */
import Btn from './components/bnt';

/* Styles */
import styles from './styles';

export default class Card extends Component {
  render() {
    return (
      <View style={styles.container}>
      		<Image style={styles.avatar} source={{uri: 'https://images.theconversation.com/files/146533/original/image-20161118-19352-186bcu6.jpg?ixlib=rb-1.1.0&rect=0%2C617%2C6313%2C3062&q=45&auto=format&w=1356&h=668&fit=crop'}} />
      	<View style={styles.boxCenter}>
      		<Text style={styles.title}>Art & Design</Text>
      		<Text style={styles.subTitle}>Fusce vehichula dolor arcu, sit amet landi dolor,Fusce vehichula dolor arcu, sit amet landi dolor
      		</Text>
      		<Btn navigation={this.props.navigation}/>
      	</View>
      </View>
    );
  }
}
