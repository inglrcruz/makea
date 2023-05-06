import React from 'react';
import { View, Image } from 'react-native';
import { Card, Text } from '@ui-kitten/components';
import { STCard } from '../../styles/Container';

function ViewScreen(props) {

  const { handleViewProduct, data } = props

  return (
    <Card style={STCard.base} onPress={() => handleViewProduct()}>
      <Image style={STCard.image} source={{ uri: data.image }} />
      <Text category='p2'>{data.name}</Text>
      <View>
        <Text category='p2'>COP</Text>
        <Text category='h6'>{data.price}</Text>
      </View>
    </Card>
  )
}

export default ViewScreen;