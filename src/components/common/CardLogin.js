import React from 'react';
import { View } from 'react-native';

const CardLogin = (props) => {
  return (
  <View style={styles.bordaStyle}>
  {props.children}
  </View>
  );
};

const styles = {
  bordaStyle: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column'
  }

};

export { CardLogin };
