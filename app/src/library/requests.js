import axios from 'axios'
import { API } from './const';

const url = API

/**
 * Request to perform pos
 * @param {*} route 
 * @param {*} token 
 * @param {*} params 
 * @returns 
 */
export const post = (route, token, params) => {
    if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return axios.post(url + route, params)
}

/**
 * Request to perform patch
 * @param {*} route 
 * @param {*} token 
 * @param {*} params 
 * @returns 
 */
export const patch = (route, token, params) => {
    if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return axios.patch(url + route, params)
}

/**
 * Request to perform get
 * @param {*} route 
 * @param {*} token 
 * @returns 
 */
export const get = (route, token) => {
    if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return axios.get(url + route)
}

/**
 * Request to perform delete
 * @param {*} route 
 * @param {*} token 
 * @param {*} params 
 * @returns 
 */
export const remove = (route, token) => {
    if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return axios.delete(url + route)
}