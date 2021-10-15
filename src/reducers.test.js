import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducer from './reducers'

it('test reducer of searchRobots', () => {
  const initialStateSearch = {
    searchField: ''
  }
  const mockAction = { type: CHANGE_SEARCHFIELD, payload: 'er' };
  expect(reducer.searchRobots(initialStateSearch, {}))
  .toEqual(initialStateSearch);
  expect(reducer.searchRobots(initialStateSearch,mockAction))
  .toEqual({searchField:'er'})
})

it('test reducer of requestRobots',()=>{
  const initialStateRobots = {
    robots: [],
    isPending: false
  }
  expect(reducer.requestRobots(initialStateRobots,{}))
  .toEqual(initialStateRobots);
  const mockAction1 = {type:REQUEST_ROBOTS_PENDING}
  expect(reducer.requestRobots(initialStateRobots,mockAction1))
  .toEqual({
    robots: [],
    isPending: true
  });
  const mockAction2 = {type:REQUEST_ROBOTS_SUCCESS,payload:['a','b','c']};
  expect(reducer.requestRobots(initialStateRobots,mockAction2))
  .toEqual({
    robots: mockAction2.payload,
    isPending: false
  })
  const mockAction3 = {type:REQUEST_ROBOTS_FAILED,payload:'on no ~'};
  expect(reducer.requestRobots(initialStateRobots,mockAction3))
  .toEqual({
    robots: [],
    isPending: false,
    error:'on no ~'
  })
})