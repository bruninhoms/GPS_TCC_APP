import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import DispositivosLista from './components/DispositivosLista';
import CriarDispositivo from './components/CriarDispositivo';
import CreateUserForm from './components/CreateUserForm';
import Menu from './components/Menu';
import Mapa from './components/Mapa';

const RouterComponent = () => {
  console.ignoredYellowBox = [
     'Setting a timer'
  ];
  return (
    <Router navigationBarStyle={{ backgroundColor: '#2d3436' }}>
      <Scene key="root" hideNavBar>

        <Scene key="auth" titleStyle={styles.textStyle}>
          <Scene key="login" component={LoginForm} title="Login" initial hideNavBar />
          <Scene key="criar" component={CreateUserForm} title="Criar User" />
        </Scene>

        <Scene key="main" titleStyle={styles.textStyle}>
          <Scene
            key="Menu"
            component={Menu}
            title="Menu"
            initial
            hideNavBar
          />
          <Scene
            rightTitle="Add"
            onRight={() => Actions.criarDispositivo()}
            key="dispositivosLista"
            component={DispositivosLista}
            title="Dispositivos"
          />
          <Scene
            key="criarDispositivo"
            component={CriarDispositivo}
            title="Adicionar"
          />
          <Scene
            key="mapa"
            component={Mapa}
            title="Localizar"
          />
        </Scene>

      </Scene>
    </Router>
  );
};

const styles = {
  textStyle: {
    textAlign: 'center',
    flex: 1,
    color: '#FFF'
  }
};

export default RouterComponent;
