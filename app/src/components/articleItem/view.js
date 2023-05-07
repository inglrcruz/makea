import React from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import { Text } from '@ui-kitten/components';
import { currency } from '../../library/format';
import { container, image, text } from '../../styles/base';

function ViewScreen(props) {

  const { handleViewProduct, data } = props, 
        defaultPicture = (data.pictures[0]) ? { uri: data.pictures[0].url } : require('../../../assets/not-picture.webp')

  return (
    <TouchableHighlight onPress={() => handleViewProduct(data.aid)} underlayColor="none">
      <View style={container.cardItem}>
        <Image style={image.cardItem} source={defaultPicture} />
        <View style={{ marginLeft: 10 }}>
          <Text category='h6' style={{ marginTop: 3 }}>{data.name}</Text>
          <View style={container.cardItemPrice}>
            <Text category='c1'>COP</Text>
            <Text category='s2'>{currency(data.price)}</Text>
          </View>
          <Text category='c1' numberOfLines={3} style={text.cardItemDescription}>{data.description}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )

}

export default ViewScreen;