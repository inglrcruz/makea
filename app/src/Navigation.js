import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { connect } from 'react-redux'
import CatalogueScreen from './screens/catalogue'
import ProductScreen from './screens/product'
import { SearchFieldComponent } from './components';


const Navigation = ({ }) => {

  const Stack = createNativeStackNavigator()

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Catalogue" component={CatalogueScreen} options={{ headerShown: true, headerTitle: "", headerLeft: () => <SearchFieldComponent /> }} />
          <Stack.Screen name="Product" component={ProductScreen} options={{ headerShown: true, headerTitle: "", headerRight: () => <SearchFieldComponent /> }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const mapStateToProps = ({ }) => ({})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)