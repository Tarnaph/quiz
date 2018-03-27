/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, Image, ScrollView } from 'react-native';

/* Components */
import Btn from './components/bnt';

/* Styles */
import styles from './styles';

export default class Card extends Component {
  render() {
    return (
      <View style={styles.container}>
      		<Image style={styles.avatar} source={{uri: 'https://f.i.uol.com.br/fotografia/2017/11/21/15112650705a14132ec61fe_1511265070_3x2_md.jpg'}} />
      	<View style={styles.boxCenter}>
      		<Text style={styles.title}>Art & Design</Text>
          <ScrollView>
        		<Text style={styles.subTitle}>
              A atriz, que está no ar como a jornalista Carolina em "Totalmente Demais" (Globo), foi nomeada Defensora para a pre­venção e Eliminação da Violência contra as Mulheres da ONU Mulheres Brasil. Para isso, a musa usa as redes sociais como meio de promover campanhas de conscientização. "A cada dia, há mais gente escutando o que tenho para falar. São quase 3 milhões de pessoas que veem qualquer coisa que eu posto nas redes." "Estaria sendo omissa se fizesse apenas selfies", declarou a atriz à revista Estilo, da qual é capa em fevereiro. No mês do Carnaval, a musa aproveitou para postar uma imagem sobre assédio em seu Instagram.
            </Text>
      		</ScrollView>
      		<Btn title="Compartilhar"/>
      	</View>
      </View>
    );
  }
}
