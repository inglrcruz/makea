import React, { useEffect, useState } from 'react';
import ViewScreen from './view';
import { connect } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import catalogueActions from '../../redux/actions/catalogue'

const ProductScreen = ({ catalogue, getArticleByID, setResetArticle }) => {

  const route = useRoute();
  const [selected, setSelected] = useState(null)
  const [data, setData] = useState(null)

  //Search item by id
  useEffect(() => {
    getArticleByID(route.params.itemId)
    return () => {
      setData(null)
      setResetArticle()
    }
  }, [route.params.itemId])


  //Initialize the main image
  useEffect(() => {
    if (catalogue.article) {
      if (catalogue.article && catalogue.article.pictures[0]) setSelected(catalogue.article.pictures[0].url)
      setData(catalogue.article)
    }
  }, [catalogue.article])

  return (
    <ViewScreen catalogue={catalogue} selected={selected} data={data} setSelected={setSelected} />
  )
}

const mapStateToProps = ({ catalogue }) => ({ catalogue })

const mapDispatchToProps = () => ({
  ...catalogueActions
})

export default connect(mapStateToProps, mapDispatchToProps())(ProductScreen)