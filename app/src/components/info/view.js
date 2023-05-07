import React from 'react';
import { View, Image } from 'react-native';
import { Text } from '@ui-kitten/components';

function ViewScreen(props) {

  const { found } = props, 
    text = (!found) ? "Por favor, verifique si su dispositivo está conectado a internet. Si el problema persiste, comuníquese con el equipo de Makae para que puedan brindarle una solución al problema. Agradecemos su preferencia y lamentamos los inconvenientes que esto pueda causar." : "Por el momento no tenemos artículos correspondientes a su búsqueda."

  return (
    <View style={{ flex: 1, marginTop: 80, alignItems: "center" }}>
      <Image style={{ width: 100, height: 100, alignSelf: "center" }} source={require('../../../assets/error.webp')} />
      <Text category='h6' style={{ marginTop: 10, textAlign: "center" }}>Houston, tenemos un problema</Text>
      <Text category='s2' style={{ textAlign: "center", marginTop: 10 }}>{text}</Text>
    </View>
  )

}

export default ViewScreen;