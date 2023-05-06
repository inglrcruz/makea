import { setActAuth } from '../states/auth'
import { setConfig } from '../states/config'
import { post, get, put } from '../../library/requests'
import { VersionAPP } from '../../library/const';
import { errorAlert } from '../../library/alert';
import { getAndroidId } from '../../library/utilities'

/**
 * 
 * @returns 
 */
const setAutoAuth = () => async (dispatch) => {
  try {
    dispatch(setConfig({ loading: true }))
    const res = await post('auto-auth-user', {
      version: VersionAPP,
      device: getAndroidId()
    })
    const { user_type, _id, cid, discount, ticket_header, printer, name, last_name, active, device } = res.data
    console.log(device !== getAndroidId())
    if (!active) {
      errorAlert('Usuario desactivado', 'Esta cuenta de usuario se encuentra desactivada.')
    } else {
      dispatch(setActAuth({
        user: {
          utype: user_type,
          token: _id,
          cid: cid._id,
          discount: discount,
          ticket_header: ticket_header,
          printer: (printer) ? printer : [],
          fullname: name + " " + last_name
        }
      }))
    }
  } catch (error) {
    console.log(error)
  } finally {
    dispatch(setConfig({ loading: false }))
  }
}

/**
 * Authenticates the auth by credentials
 * @param {*} form 
 * @returns
 */
const setAuth = (form) => async (dispatch) => {
  try {
    dispatch(setConfig({ loading: true }))
    const res = await post('auth-user', {
      ...form,
      version: VersionAPP
    })
    const { user_type, _id, cid, discount, ticket_header, printer, name, last_name, active } = res.data
    if (!active) {
      errorAlert('Usuario desactivado', 'Esta cuenta de usuario se encuentra desactivada.')
    } else {
      dispatch(setActAuth({
        user: {
          utype: user_type,
          token: _id,
          cid: cid._id,
          discount: discount,
          ticket_header: ticket_header,
          printer: (printer) ? printer : [],
          fullname: name + " " + last_name
        }
      }))
    }
  } catch (error) {
    if ([400, 401, 404].includes(error.response?.status)) {
      errorAlert(error.response.data.title, error.response.data.msj)
    }
  } finally {
    dispatch(setConfig({ loading: false }))
  }
}

/**
 * Close session
 * @returns 
 */
const setCloseSession = () => async (dispatch, getState) => {
  try {
    dispatch(setConfig({ loading: true }))
    const { auth } = getState()
    await put(`user/${auth.user.token}`, { device: "" })
    dispatch(setActAuth({ user: null }))
  } catch (err) {
    if (err.response.status === 500) {
      errorAlert('Error', err.response.data.msj)
    }
  } finally {
    dispatch(setConfig({ loading: false }))
  }
}

/**
 * Get user by user id
 * @param {*} callBack 
 * @returns 
 */
const getUserByUID = (callBack, load = true) => async (dispatch, getState) => {
  try {
    if (load) dispatch(setConfig({ loading: true }))
    const { auth } = getState()
    const res = await get(`user/${auth.user.token}`)
    callBack(res.data)
  } catch (err) {
    if (err.response.status === 500) {
      errorAlert('Error', err.response.data.msj)
    }
  } finally {
    if (load) dispatch(setConfig({ loading: false }))
  }
}

/**
 * Update user by UID
 * @param {*} form 
 * @returns 
 */
const setUpdUserByUID = (form) => async (dispatch, getState) => {
  try {
    dispatch(setConfig({ loading: true }))
    const { auth } = getState()
    await put(`user/${auth.user.token}`, form)
    errorAlert('Guardado', 'Guardado exitosamente')
  } catch (err) {
    if (err.response.status === 500) {
      errorAlert('Error', err.response.data.msj)
    }
  } finally {
    dispatch(setConfig({ loading: false }))
  }
}

/**
 * Change password by UID
 * @param {*} form 
 * @returns 
 */
const setChangePasswordByUID = (form, callBack) => async (dispatch, getState) => {
  try {
    dispatch(setConfig({ loading: true }))
    const { auth } = getState()
    await put(`change-password/${auth.user.token}`, form)
    callBack()
  } catch (err) {
    if (err.response.status === 500) {
      errorAlert('Error', err.response.data.msj)
    }
  } finally {
    dispatch(setConfig({ loading: false }))
  }
}

const exportConst = { setAuth, setAutoAuth, setCloseSession, getUserByUID, setUpdUserByUID, setChangePasswordByUID }
export default exportConst