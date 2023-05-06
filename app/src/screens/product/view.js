import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { STLayout } from '../../styles/Container';
import { View, Image, ScrollView } from 'react-native';

function ViewScreen(props) {

    const { } = props

    return (
        <Layout style={STLayout.base}>
            <Text category='h6'>Products</Text>
            <Layout style={{ flexDirection: 'row' }}>
                <View>
                    <Image style={{ width: 300, height: 300, borderRadius: 5 }} source={{ uri: "https://http2.mlstatic.com/D_NQ_NP_806138-MCO50213022736_062022-O.webp" }} />
                </View>
                <View style={{ padding: 5, marginLeft: 2, backgroundColor: "#f4f4f8", borderRadius: 5, height: 300 }}>
                    <ScrollView>
                        <Image style={{ width: 80, height: 80, marginBottom: 5, borderRadius: 5 }} source={{ uri: "https://static9.depositphotos.com/1281876/1153/i/450/depositphotos_11536895-stock-photo-snowy-vintage-chair.jpg" }} />
                        <Image style={{ width: 80, height: 80, marginBottom: 5, borderRadius: 5 }} source={{ uri: "https://st4.depositphotos.com/22220764/38995/i/600/depositphotos_389951714-stock-photo-modern-retro-composition-living-room.jpg" }} />
                        <Image style={{ width: 80, height: 80, marginBottom: 5, borderRadius: 5 }} source={{ uri: "https://st4.depositphotos.com/22220764/28427/i/600/depositphotos_284277712-stock-photo-stylish-vintage-decor-spacious-flat.jpg" }} />
                        <Image style={{ width: 80, height: 80, marginBottom: 5, borderRadius: 5 }} source={{ uri: "https://http2.mlstatic.com/D_NQ_NP_806138-MCO50213022736_062022-O.webp" }} />
                    </ScrollView>
                </View>
            </Layout>
        </Layout>
    );
}

export default ViewScreen;