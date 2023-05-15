import { setActCatalogue } from '../states/catalogue'
import { get } from '../../library/requests'
import { setActGlobal } from '../states/global'

/**
 * Get the list of categories
 * @param {*} form 
 * @returns
 */
const getCategories = () => async (dispatch, getState) => {
  try {
    dispatch(setActGlobal({ loading: true }))
    const { auth } = getState()
    const res = await get('categories', auth.token)
    dispatch(setActCatalogue({ categories: res.data }))
  } catch (error) {
    dispatch(setActGlobal({ error: true }))
  } finally {
    dispatch(setActGlobal({ loading: false }))
  }
}

/**
 * get the articles by category
 * @param {*} form 
 * @returns
 */
const getArticulesByCategory = (cid) => async (dispatch, getState) => {
  try {
    dispatch(setActGlobal({ loading: true }))
    const { auth } = getState()
    const res = await get(`articles-by-category/${cid}`, auth.token)
    dispatch(setActCatalogue({ articles: res.data }))
  } catch (error) {
    dispatch(setActGlobal({ notFound: true }))
  } finally {
    dispatch(setActGlobal({ loading: false }))
  }
}

/**
 * Get items by name
 * @param {*} form 
 * @returns
 */
const getSearchArticle = (name) => async (dispatch, getState) => {
  try {
    dispatch(setActGlobal({ loading: true }))
    const { auth } = getState()
    const res = await get(`search-articles/${name}`, auth.token)
    dispatch(setActCatalogue({ articles: res.data }))
  } catch (error) {
    dispatch(setActCatalogue({ articles: []}))
    dispatch(setActGlobal({ notFound: true }))
  } finally {
    dispatch(setActGlobal({ loading: false }))
  }
}

/**
 * Get item by id
 * @param {*} id 
 * @returns 
 */
const getArticleByID = (id) => async (dispatch, getState) => {
  try {
    dispatch(setActGlobal({ loading: true }))
    const { auth } = getState()
    const res = await get(`article/${id}`, auth.token)
    dispatch(setActCatalogue({ article: res.data }))
  } catch (error) {
    dispatch(setActGlobal({ notFound: true }))
  } finally {
    dispatch(setActGlobal({ loading: false }))
  }
}

/**
 * Reset article
 * @returns 
 */
const setResetArticle = () => async (dispatch) => {
  dispatch(setActCatalogue({ article: null }))
}

export default { getCategories, getArticulesByCategory, getSearchArticle, getArticleByID, setResetArticle }