import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';
import { buscarDispositivos, dispositivoSemMudanca } from '../actions';
import ListarItem from './ListarItem';

class DispositivosLista extends Component {
  componentWillMount() {
    this.props.buscarDispositivos();
  }

  componentWillUnmount() {
  this.props.dispositivoSemMudanca();
}

render() {
  return (
    <View style={styles.listStyle}>
      <FlatList
        data={this.props.dispositivos}
        renderItem={e => <ListarItem dispositivo={e} />}
        keyExtractor={dispositivo => dispositivo.uid}
      />
    </View>
  );
}
}

const styles = {
  listStyle: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#636e72'
  }
};

const mapStateToProps = state => {
  const dispositivos = _.map(state.dispositivos, (val, uid) => {
    return { ...val, uid }; //pega as props, poe id e coloca em um vetor
  });
    return { dispositivos };
};

export default connect(mapStateToProps, {
  buscarDispositivos, dispositivoSemMudanca
})(DispositivosLista);
