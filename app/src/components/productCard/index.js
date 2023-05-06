import React from 'react';
import ViewScreen from './view';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


const ProductCardComponent = ({ data }) => {

  const navigation = useNavigation();

  const handleViewProduct = () => {
    navigation.navigate("Product")
  }

  return (
    <ViewScreen data={data} handleViewProduct={handleViewProduct} />
  )
}

const mapStateToProps = ({ }) => ({})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps())(ProductCardComponent)