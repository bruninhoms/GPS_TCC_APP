import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, StatusBar, Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Video } from 'expo';
import AwesomeAlert from 'react-native-awesome-alerts';
import { emailChanged, passwordChanged, loginUser, toggleError } from '../actions';
import { CardSection, Input, Button, Spinner } from './common';
import VideoGPS from '../media/navigation1.mp4';

class LoginForm extends Component {
  componentDidMount() {
       StatusBar.setHidden(true);
    }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPressLogin() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
    Keyboard.dismiss();
  }

  onButtonPressCreateUser() {
    Actions.criar();
    Keyboard.dismiss();
  }

  switchError() {
    this.props.toggleError();
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <View style={styles.buttonStyle}>
        <Button onPress={this.onButtonPressLogin.bind(this)}>
          Login
        </Button>
        <Button onPress={this.onButtonPressCreateUser.bind(this)} style={{ marginTop: 10 }}>
          Criar conta
        </Button>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Video
          source={VideoGPS}
          resizeMode='cover'
          shouldPlay
          isLooping
          isMuted
          style={StyleSheet.absoluteFill}
        />

        <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0,0,0,0.25)' }]} />

        <View style={styles.viewText}>
          <Text style={styles.textStyle}>
            Login
          </Text>
        </View>

          <CardSection style={styles.containerLogin}>
            <Input
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>

          <CardSection style={styles.containerLogin}>
            <Input
              secureTextEntry
              label="Password"
              placeholder="Password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>
          <CardSection style={styles.containerLogin}>
            {this.renderButton()}
          </CardSection>
          <AwesomeAlert
            show={this.props.error}
            showProgress={false}
            showConfirmButton
            title='Erro de autenticação'
            confirmText="Entendi"
            message='Cheque suas credenciais e tente novamente!'
            confirmButtonColor='#fc5c65'
            onConfirmPressed={() => {
            this.switchError();
          }}
            onDismiss={() => {
            this.switchError();
          }}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  buttonStyle: {
    height: 100,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center'
 },
  containerLogin: {
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#b2bec3',
    backgroundColor: '#95a5a6'
  },
  textStyle: {
    fontSize: 50,
    color: '#ecf0f1',
    textAlign: 'left',
    borderColor: '#2d3436',
    fontWeight: '500'
  },
  viewText: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '100%',
    marginLeft: 10
  }
});

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser, toggleError
})(LoginForm);
