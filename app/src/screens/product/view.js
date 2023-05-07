import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { container } from '../../styles/base';
import { View, Image, ScrollView, TouchableHighlight } from 'react-native';
import { currency } from '../../library/format';

function ViewScreen(props) {

    const { selected, setSelected, data } = props

    return (
        <Layout style={container.base}>
            {
                data &&
                <ScrollView>
                    <Text category='h6' style={{ marginBottom: 10 }}>{data.name}</Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: "100%", height: 350, borderRadius: 5 }} source={(selected) ? { uri: selected } : require('../../../assets/not-picture.webp')} />
                    </View>
                    <View style={{ padding: 5, marginLeft: 2, backgroundColor: "#f4f4f8", borderRadius: 5 }}>
                        <ScrollView horizontal={true}>
                            {
                                data.pictures && data.pictures.map((row, key) => {
                                    return (
                                        <TouchableHighlight onPress={() => setSelected(row.url)} underlayColor="none" key={key}>
                                            <Image style={{ width: 80, height: 80, borderRadius: 5, margin: 5 }} source={{ uri: row.url }} />
                                        </TouchableHighlight>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text category='p2'>COP</Text>
                        <Text category='h6'>{currency(data.price)}</Text>
                    </View>
                    <Text category='p2' style={{ marginTop: 10, fontWeight: "bold" }}>Descripción</Text>
                    <Text category='p2' style={{ marginTop: 5 }}>{data.description}</Text>
                </ScrollView>
            }
        </Layout>
    );
}

export default ViewScreen;