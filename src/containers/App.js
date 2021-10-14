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
    onRequestRobots: () => requestRobots(dispatch)
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
