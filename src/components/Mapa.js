import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { localizarDispositivo } from '../actions';
import { Button } from './common';

class Mapa extends Component {

  componentDidMount() {
    const uid = this.props.selecionado;

    this.props.localizarDispositivo(uid);
  }

  mensagem() {
    const uid = this.props.selecionado;
    const Latitude = this.props.dispositivos[uid].Latitude;
    const Longitude = this.props.dispositivos[uid].Longitude;

  if (Latitude === 'ERROR' || Longitude === 'ERROR') {
      return (<Button>GPS sem sinal!</Button>);
    }
      return (<Button>Localizado</Button>);
  }

  render() {
  const uid = this.props.selecionado;
  let Latitude = 0;
  let Longitude = 0;

  if (this.props.dispositivos[uid].Latitude === 'ERROR' ||
  this.props.dispositivos[uid].Longitude === 'ERROR') {
    Latitude = -1;
    Longitude = -1;
  } else {
    Latitude = this.props.dispositivos[uid].Latitude;
    Longitude = this.props.dispositivos[uid].Longitude;
   }

  const Nome = this.props.dispositivos[uid].Nome;
    return (
      <View style={styles.card}>
        <View style={styles.texto}>
        { this.mensagem() }
        </View>
        <MapView
          style={styles.map}
          region={{
            latitude: Latitude,
            longitude: Longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: Latitude,
              longitude: Longitude
            }}
            title={Nome}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 45,
    left: 0,
    bottom: 0,
    right: 0
  },
  texto: {
    height: '8%',
    width: '100%',
    alignItems: 'flex-start'
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  }
});

const mapStateToProps = (state) => {
    const dispositivos = state.dispositivos;

    return { dispositivos };
};

export default connect(mapStateToProps, { localizarDispositivo })(Mapa);
