import React from 'react';
import ViewScreen from './view';
import { connect } from 'react-redux';

const ProductScreen = ({ navigation }) => {

  //navigation.navigate("Login")

  return (
    <ViewScreen />
  )
}

const mapStateToProps = ({ auth }) => ({})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps())(ProductScreen)