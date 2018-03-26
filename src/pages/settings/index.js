/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text } from 'react-native';

/* Components */
import Card from './components/card';

/* Styles */
import styles from './styles';

export default class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<View style={styles.topContainer}>
      		<Text style={styles.title}>Conta</Text>
      		<Card icon="envelope" title="Alterar Endereço de Email" subTitle="papelh6b@gmail.com" />
      		<Card icon="key" title="Alterar Minha Senha" subTitle="Nunca trocada"/>
      	</View>
      	<View style={styles.bottomContainer}>
      		<Text style={styles.title}>Outos</Text>
      		<Card icon="bell" title="Push Notifications" subTitle="Para Mensagens, Avisos, etc..."/>
      		<Card icon="facebook" title="Conectar ao Facebook" subTitle="Acompanhe seus amigos"/>
      	</View>
      </View>
    );
  }
}
