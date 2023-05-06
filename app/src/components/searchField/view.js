import React from 'react';
import { Input, Text } from '@ui-kitten/components';

function ViewScreen(props) {

    const { } = props

    return (
        <Input
        style={{ width: 300 }}
        placeholder='Buscar producto...'
        value=""
        onChangeText={nextValue => setValue(nextValue)}
      />
    )
}


export default ViewScreen;