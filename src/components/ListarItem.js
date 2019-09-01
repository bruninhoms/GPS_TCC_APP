import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, StatusBar } from 'react-native';
import Swipeout from 'react-native-swipeout';
import { ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { excluirDispositivo, buscarDispositivos } from '../actions';
import Icon from '../media/icogps2.png';

class ListarItem extends Component {

  componentDidMount() {
       StatusBar.setHidden(false);
    }

  onRowPress() {
    Actions.mapa({ selecionado: this.props.dispositivo.item.uid });
  }

  onButtonPressDelete() {
    const { dispositivo } = this.props;

    this.props.excluirDispositivo(dispositivo.item.uid);
    this.renderItem();
  }

  renderItem() {
    return (
    <ListItem
      title={this.props.dispositivo.item.Nome}
      titleStyle={styles.textStyle}
      chevronColor="white"
      chevron
      avatar={Icon}
      roundAvatar
      containerStyle={styles.containerStyle}
    />
);
}


  render() {
    const rightButton = [
      {
        type: 'delete',
        text: 'Excluir',
        onPress: () => { this.onButtonPressDelete(); }
    }
  ];

    return (
    <Swipeout
    right={rightButton}
    autoClose
    >
      <TouchableOpacity onPress={this.onRowPress.bind(this)}>
          {this.renderItem()}
      </TouchableOpacity>
    </Swipeout>
    );
  }
}

const styles = {
  textStyle: {
    color: '#dfe6e9',
    fontSize: 18,
    fontWeight: '500',
    paddingLeft: 15
  },
  containerStyle: {
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#b2bec3',
    backgroundColor: '#636e72'
  }
};


const mapStateToProps = state => {
  const dispositivos = _.map(state.dispositivos, (val, uid) => {
    return { ...val, uid }; //pega as props, poe id e coloca em um vetor
  });
    return { dispositivos };
};

export default connect(mapStateToProps, { excluirDispositivo, buscarDispositivos })(ListarItem);
