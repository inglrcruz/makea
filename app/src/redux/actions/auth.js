import { setActAuth } from '../states/auth'
import { setActGlobal } from '../states/global'
import { post } from '../../library/requests'
import { getAndroidId } from '../../library/utilities'

/**
 * Authenticates the auth by credentials
 * @param {*} form 
 * @returns
 */
const setAuth = () => async (dispatch) => {
  try {
    dispatch(setActGlobal({ loading: true, error: false }))
    const res = await post('auth', false, { device: getAndroidId() })
    const { token } = res.data
    dispatch(setActAuth({ token }))
  } catch (error) {
    dispatch(setActGlobal({ error: true }))
  } finally {
    dispatch(setActGlobal({ loading: false }))
  }
}

export default { setAuth }