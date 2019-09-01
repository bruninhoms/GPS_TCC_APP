import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { atualizarDispositivo, criarDispositivo, dispositivoSemMudanca } from '../actions';
import { Button } from './common';
import DispositivoForm from './DispositivoForm';

class CriarDispositivo extends Component {
  componentWillUnmount() {
    this.props.dispositivoSemMudanca();
  }
  onButtonPress() {
    const { Nome, DeviceID, Date = 0, Latitude = 0, Longitude = 0 } = this.props;

    this.props.criarDispositivo({ Nome, Date, DeviceID, Latitude, Longitude });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerLogin}>
          <DispositivoForm {...this.props} />
        </View>
        <View style={styles.containerStyle}>
          <Button onPress={this.onButtonPress.bind(this)}>
            Criar Dispositivo
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#95a5a6'
 },
 containerLogin: {
   width: '100%'
 },
 containerStyle: {
   height: 56,
   width: '100%',
   paddingLeft: 10,
   paddingRight: 10,
   backgroundColor: '#95a5a6'
 }
});

const mapStateToProps = (state) => {
  const { Nome, Date, DeviceID, Latitude, Longitude } = state.dipositivoForm;

  return { Nome, Date, DeviceID, Latitude, Longitude };
};

export default connect(mapStateToProps, {
  atualizarDispositivo, criarDispositivo, dispositivoSemMudanca
})(CriarDispositivo);
