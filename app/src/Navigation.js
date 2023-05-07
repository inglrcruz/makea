import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { connect } from 'react-redux'
import CatalogueScreen from './screens/catalogue'
import ProductScreen from './screens/product'
import authActions from './redux/actions/auth'
import { Image } from 'react-native';

const Navigation = ({ }) => {

  const Stack = createNativeStackNavigator(), headerTitle = () => <Image style={{ width: 100, height: 20 }} source={require('../assets/logo.png')} />

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Catalogue" component={CatalogueScreen} options={{
            headerStyle: { backgroundColor: '#1d4f7b' },
            headerShown: true, headerTitle: headerTitle, headerTintColor: "#fff"
          }} />
          <Stack.Screen name="Product" component={ProductScreen} options={{
            headerStyle: { backgroundColor: '#1d4f7b' },
            headerShown: true, headerTitle: headerTitle, headerTintColor: "#fff"
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const mapStateToProps = ({ }) => ({})

const mapDispatchToProps = () => ({
  ...authActions
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)