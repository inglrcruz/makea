import React from 'react';
import ViewScreen from './view';
import { useNavigation } from '@react-navigation/native';

const ArticleItemComponent = ({ data }) => {

  const navigation = useNavigation();

  /**
   * Handler to search the product by its id
   * @param {*} aid 
   */
  const handleViewProduct = (aid) => {
    navigation.navigate("Product", { itemId: aid })
  }

  return (
    <ViewScreen data={data} handleViewProduct={handleViewProduct} />
  )
}

export default ArticleItemComponent