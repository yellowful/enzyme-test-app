import configureStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk';
import * as action from './actions'
import { apiCall } from './api/api'
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants'

const middlewares = [thunkMiddleware];
const mockStore = configureStore(middlewares);

it('action test of setSearchField', () => {
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(action.setSearchField('tr'))
  const actions = store.getActions()
  expect(actions[0]).toEqual({ type: CHANGE_SEARCHFIELD, payload: 'tr' });
})

describe('action test of requestRobots',()=>{
  it('requestRobots expect success',() => {
    const initialState = {};
    const store = mockStore(initialState);
    const mockUrl = 'https://jsonplaceholder.typicode.com/users';
    expect.assertions(2);
    // 要讓store.dispatch等requestRobots()完整執行完的話，要把store.dispatch()放在return
    // 而且需配合requestRobots()要return一個Promise
    return store.dispatch(action.requestRobots(mockUrl))
    .then(()=>{
      const actions = store.getActions();
      expect(actions[0]).toEqual({type: REQUEST_ROBOTS_PENDING});
      expect(actions[1].type).toBe(REQUEST_ROBOTS_SUCCESS);
    })
  })

  it('requestRobots expect failed',() => {
    const initialState = {};
    const store = mockStore(initialState);
    // 給予錯誤的mockUrl
    const mockUrl = 'https://jsonplaceholder.typicode.com';
    expect.assertions(2);
    return store.dispatch(action.requestRobots(mockUrl))
    .then(()=>{
      const actions = store.getActions();
      expect(actions[0]).toEqual({type: REQUEST_ROBOTS_PENDING});
      // 回傳的object不管幾個key，只要有這個key value pair就測試通過
      expect(actions[1]).toMatchObject({type: REQUEST_ROBOTS_FAILED});
    })
  })
})
