import React from 'react';
import { View, Image } from 'react-native';
import { Text } from '@ui-kitten/components';
import { container } from '../../styles/base';

function ViewScreen() {

  return (
    <View style={container.centerTop}>
      <Image style={{ width: 150, height: 150, opacity: 0.4 }} source={require('../../../assets/icon.png')} />
      <Text style={{ textAlign: "center", marginTop: 10, width: 300 }}>Encuentra todo lo que necesitas para tu hogar u oficina dentro de nuestro inventario de productos.</Text>
    </View>
  )

}

export default ViewScreen;