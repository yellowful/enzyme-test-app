import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';
import Main from '../components/Main';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    // 原本寫法
    // onRequestRobots: () => requestRobots(dispatch)
    // 改成以下寫法，thunk依然可以處理
    // 因為dispatch出來的不是一個action，而是一個function，所以thunk就會接手處理
    onRequestRobots: () => dispatch(requestRobots())

  }
}

class App extends Component {
  
  
  render() {
    
    return (
      <Main {...this.props} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
