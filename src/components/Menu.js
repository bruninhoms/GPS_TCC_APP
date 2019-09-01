import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Video } from 'expo';
import AwesomeAlert from 'react-native-awesome-alerts';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import firebase from 'firebase';
import { Button } from './common';
import VideoMenu from '../media/dispositivoscreen1.mp4';

class Menu extends Component {
  render() {
    let erro = false;

    return (
      <View style={styles.viewStyle}>
            <Video
              source={VideoMenu}
              resizeMode='cover'
              shouldPlay
              isLooping
              isMuted
              style={StyleSheet.absoluteFill}
            />
            <Text style={styles.textStyleMenu}> Menu </Text>
            <View style={styles.viewButtons}>
                <Button
                onPress={() => { Actions.dispositivosLista(); }}
                style={styles.buttonStyle}
                >
                    Dispositivos conectados
                </Button>
                <Button
                onPress={() => { Actions.criarDispositivo(); }}
                style={styles.buttonStyle}
                >
                    Adicionar dispositivo
                </Button>
              </View>
              <TouchableHighlight
                  style={{ paddingTop: 50 }}
                  onPress={() => {
                    firebase.auth().signOut()
                     .then(() => { Actions.auth(); })
                     .catch(() => { erro = true; });
                   }}
              >
                  <Text style={styles.textStyle2}> Logout </Text>
              </TouchableHighlight>
            <AwesomeAlert
              show={erro}
              showProgress={false}
              showConfirmButton
              title='Erro'
              confirmText="Entendi"
              message='Algo inesperado aconteceu!'
              confirmButtonColor='#fc5c65'
              onConfirmPressed={() => {
              erro = false;
            }}
              onDismiss={() => {
              erro = false;
            }}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 55,
    color: '#636e72',
    textAlign: 'center',
    fontWeight: '500'
  },
  textStyle2: {
    fontSize: 15,
    color: 'red',
    textAlign: 'center',
    borderTopColor: '#7f8c8d',
    borderTopWidth: 1,
  },
  textStyleMenu: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center'
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  viewButtons: {
    paddingRight: 10,
    paddingLeft: 10,
    height: '30%',
    width: '100%'
  },
  buttonViewStyle: {
    width: '100%'
  },
  buttonStyle: {
    backgroundColor: '#000',
    borderRadius: 10,
    borderColor: '#FFF',
    borderWidth: 2
  },
  logoutStyle: {
    height: 25,
    width: '100%',
    backgroundColor: '#000',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#7f8c8d'
  }
});

export default Menu;
