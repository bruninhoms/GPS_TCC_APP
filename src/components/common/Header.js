//Importar bibliotecas pra fazer o componente
import React from 'react';
import { Text, View, Platform } from 'react-native';


//fazer o componente
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
  <View style={viewStyle}>
  <Text style={textStyle}>{props.headerText}</Text>
  </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    ...Platform.select({
         ios: {
             shadowColor: '#000',
             shadowOffset: { width: 0, height: 1 },
             shadowOpacity: 0.1,
             paddingTop: 15,
             elevation: 2,
             position: 'relative'
         },
         android: {
             elevation: 2
         }
     })
  },
  textStyle: {
    fontSize: 20
  }
};

//deixar disponivel para todas as partes do App
export { Header };
