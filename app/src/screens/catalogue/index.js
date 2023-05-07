import React, { useEffect, useState } from 'react';
import ViewScreen from './view';
import { connect } from 'react-redux';
import authActions from '../../redux/actions/auth'
import catalogueActions from '../../redux/actions/catalogue'

const CatalogueScreen = ({ auth, setAuth, getArticulesByCategory, getSearchArticle, getCategories, catalogue, global }) => {

  const [search, setSearch] = useState(""),
    [category, setCategory] = useState(0)

  /**
   * Authenticates the user and returns the list of categories
   */
  useEffect(() => {
    if (!auth.token) {
      setAuth()
    } else {
      getCategories()
    }
  }, [auth])

  /**
   * Manager to search the products by selected category
   * @param {*} cid 
   */
  const handlerSearchByCategory = (cid) => {
    setCategory(cid)
    getArticulesByCategory(cid)
  }

  /**
   * Manager to search the products by name
   * @param {*} text 
   */
  const handlerSearch = (text) => {
    setSearch(text)
    getSearchArticle(text)
    setCategory(0)
  }

  return (
    <ViewScreen catalogue={catalogue} global={global} search={search} handlerSearch={handlerSearch}
      handlerSearchByCategory={handlerSearchByCategory} category={category} />
  )

}

const mapStateToProps = ({ auth, catalogue, global }) => ({
  auth, catalogue, global
})

const mapDispatchToProps = () => ({
  ...authActions,
  ...catalogueActions
})

export default connect(mapStateToProps, mapDispatchToProps())(CatalogueScreen)