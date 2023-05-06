import React from 'react';
import ViewScreen from './view';
import { connect } from 'react-redux';

const CatalogueScreen = ({ }) => {

  return (
    <ViewScreen />
  )
  
}

const mapStateToProps = ({ }) => ({})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps())(CatalogueScreen)