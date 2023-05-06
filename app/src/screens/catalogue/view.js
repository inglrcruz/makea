import React from 'react';
import { ScrollView } from 'react-native';
import { Card, Layout, Text } from '@ui-kitten/components';
import { STLayout } from '../../styles/Container';
import { ProductCardComponent } from '../../components';

function ViewScreen(props) {

    const { } = props

    const numbers = Array.from(Array(10), (_, i) => i + 1);

    return (
        <Layout style={STLayout.base}>
            <Text category='h4'>Ofertas de momento</Text>
            <Layout style={Card.topContainer} level='1'>
                <ScrollView horizontal={true} style={{ marginTop: 10 }}>
                    {
                        numbers.map((key) => (<ProductCardComponent key={key} data={ { 
                            name: "Mueves MK01", 
                            price: 20000,
                            image: "https://http2.mlstatic.com/D_NQ_NP_806138-MCO50213022736_062022-O.webp"
                        } } />))
                    }
                </ScrollView>
            </Layout>

        </Layout >
    );
}


export default ViewScreen;