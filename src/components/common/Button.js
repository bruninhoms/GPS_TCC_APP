import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, style }) => {
  const { buttonStyle, textStyle } = styles;
    return (
      <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
        <Text style={textStyle}>
          {children}
        </Text>
      </TouchableOpacity>
    );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '500',
    paddingTop: 5,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#000',
    justifyContent: 'center',
    borderRadius: 10
  }
};

export { Button };
