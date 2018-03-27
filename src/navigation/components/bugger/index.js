/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Styles */
import { colors, fonts } from 'styles';
import styles from './styles';

export default class Menu extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
          <View>
            <Image style={styles.avatar} source={{uri: 'https://0.soompi.io/wp-content/uploads/2018/01/11014049/IU-2.jpg'}} />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Hanna Fields</Text>
          </View>
          <View style={styles.coinsContainer}>
            <Text style={styles.coinsTitle}>2.38784</Text>
            <Text style={styles.coinsSub}>
              Coins
            </Text>
          </View>
        </View>

        <View>
          <TouchableOpacity style={[styles.iconContainer,styles.active]} onPress={() => this.props.navigation.navigate('Home')}>
            <Icon name="align-left" style={styles.logoIcon} />
            <Text style={styles.link}> Quizes </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconContainer]} onPress={() => this.props.navigation.navigate('Result')}>
            <Icon name="align-left" style={styles.logoIcon} />
            <Text style={styles.link}> Result </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconContainer]} onPress={() => this.props.navigation.navigate('Quest')}>
            <Icon name="align-left" style={styles.logoIcon} />
            <Text style={styles.link}> Quests </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer} onPress={() => this.props.navigation.navigate('Settings')}>
            <Icon name="cog" style={styles.logoIcon} />
            <Text style={styles.link}> Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer} onPress={() => this.props.navigation.navigate('Settings')}>
            <Icon name="sign-out" style={styles.logoIcon} />
            <Text style={styles.link}> LogOut</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.bottomTitle}>raphaelmorales.com</Text>
        </View>
      </SafeAreaView>
    );
  }
}
