import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { atualizarDispositivo, emailChanged, passwordChanged } from '../actions';
import { Input } from './common';

class CreateForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <View>
        <View style={styles.containerStyle}>
          <Input
            label="Nome"
            placeholder="Seu nome"
            value={this.props.nome}
          />
        </View>

        <View style={styles.containerStyle}>
          <Input
            label="Email"
            placeholder="Seu email"
            value={this.props.email}
            onChangeText={this.onEmailChange.bind(this)}
          />
        </View>

        <View style={styles.containerStyle}>
            <Input
              label="Senha"
              placeholder="Senha"
              value={this.props.password}
              onChangeText={this.onPasswordChange.bind(this)}
              secureTextEntry
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
    const { nome, email, password } = state.auth;

    return { nome, email, password };
};

export default connect(mapStateToProps, {
  atualizarDispositivo, emailChanged, passwordChanged
})(CreateForm);
