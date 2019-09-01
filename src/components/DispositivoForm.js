import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { atualizarDispositivo } from '../actions';
import { Input } from './common';

class DispositivoForm extends Component {
  render() {
    return (
      <View>
        <View style={styles.containerStyle}>
          <Input
            label="Nome"
            placeholder="Nome para o dispositivo"
            value={this.props.Nome}
            onChangeText={text => this.props.atualizarDispositivo({ prop: 'Nome', value: text })}
          />
        </View>

        <View style={styles.containerStyle}>
          <Input
            label="DeviceID"
            placeholder="ID do dispositivo"
            value={this.props.model}
            onChangeText={text =>
              this.props.atualizarDispositivo({ prop: 'DeviceID', value: text })}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    height: 56,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#ecf0f1',
    borderColor: '#2c3e50'
  }
};

const mapStateToProps = (state) => {
    const { Nome, DeviceID } = state.dipositivoForm;

    return { Nome, DeviceID };
};

export default connect(mapStateToProps, { atualizarDispositivo })(DispositivoForm);
