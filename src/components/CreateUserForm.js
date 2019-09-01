import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { createUser, dispositivoSemMudanca } from '../actions';
import { Button, Spinner } from './common';
import CreateForm from './CreateForm';

class CreateUserForm extends Component {
  componentWillUnmount() {
    this.props.dispositivoSemMudanca();
  }
  onButtonPress() {
    const { email, password } = this.props;

    this.props.createUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
    <View style={styles.containerStyle}>
      <Button onPress={this.onButtonPress.bind(this)}>
        Criar Usuario
      </Button>
    </View>
  );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerLogin}>
          <CreateForm {...this.props} />
        </View>
        {this.renderButton()}
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
  const { email, password } = state.auth;

  return { email, password };
};

export default connect(mapStateToProps, {
  createUser, dispositivoSemMudanca
})(CreateUserForm);
