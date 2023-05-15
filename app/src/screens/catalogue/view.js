import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { button, container } from '../../styles/base';
import { ArticleItemComponent, LoadingComponent, WelcomeComponent, InfoComponent } from '../../components';

function ViewScreen(props) {

    const { catalogue, global, handlerSearchByCategory, handlerSearch, search, category } = props, 
            error = !global?.loading && (catalogue?.articles && !catalogue.articles.length) && (category > 0 || search !== "")

    return (
        <Layout style={container.base}>
            {
                catalogue.categories &&
                <>
                    <Text category='h6' style={{ marginBottom: 5 }}>Categorias</Text>
                    <View style={container.spaceBetween}>
                        {
                            catalogue.categories.map((row, key) => {
                                return (
                                    <Button key={key} style={button.spaceBetween} status={category === row.cid ? "warning" : 'basic'} onPress={() => handlerSearchByCategory(row.cid)}>
                                        {row.name}
                                    </Button>
                                )
                            })
                        }
                    </View>
                </>
            }
            <Input style={{ width: "100%", marginTop: 10, display: (global?.error) ? "none" : "flex" }} placeholder='Buscar producto...' value={search} onChangeText={(text) => handlerSearch(text)} />
            <ScrollView>
                {
                    !global?.loading && catalogue.articles && catalogue.articles.map((row, key) => {
                        return (<ArticleItemComponent key={key} data={row} />)
                    })
                }
                {category === 0 && search === "" && <WelcomeComponent />}
                {global?.loading && <LoadingComponent />}
                {global?.error && <InfoComponent />}
                {error && <InfoComponent found={true} />}
            </ScrollView>
        </Layout>
    );
}

export default ViewScreen;