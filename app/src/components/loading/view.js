import React from 'react';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';
import { container } from '../../styles/base';
import { Spinner } from '@ui-kitten/components';

function ViewScreen() {

  return (
    <View style={container.centerTop}>
      <Spinner status='warning' />
      <Text style={{ textAlign: "center", marginTop: 10, width: 300 }}>Buscando, espere...</Text>
    </View>
  )

}

export default ViewScreen;