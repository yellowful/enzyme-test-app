import React, { Component } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';

import './Main.css';

class Main extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  robotFilter = (robots,searchField) => {
    return robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
      })
  }
  
  render() {
    const { robots, searchField, onSearchChange, isPending } = this.props;
    const filteredRobots = this.robotFilter(robots,searchField);
    return (
      <div className='tc'>
        <Header />
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          { isPending ? <h1>Loading</h1> :
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  }
}

export default Main
