import { apiCall } from './api/api'
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants'

export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })
// 原本寫法
// export const requestRobots = (dispatch) => {
// 改成以下寫法，thunk從dispatch發現送來的是一個requestRobots，就會把dispatch丟進去
// requestRobots(dispatch)執行後thunk就又會收到一個function，而不是dispatch
// 所以thunk又會把dispatch丟進去，這時裡面就會dispatch actions回來了。
// 之所以需要改寫成這樣，應該是要讓test裡面的function不需要dispatch這個parameter。
// export const requestRobots = () => (dispatch) => {
// 為了能測試failed的狀態，所以改成能input url
const url = 'https://jsonplaceholder.typicode.com/users'
export const requestRobots = (appUrl=url) => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING })
  // 要讓tests的時候store.dispatch()可以有.then()的method的話，這裡必需要return一個Promise
  return apiCall(appUrl)
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}