import React, {Component} from 'react';
import {connect} from 'react-redux';
//import {robots} from './robots';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import {setSearchField, requestRobots} from '../actions'

const mapStateToProps = state => {
  //console.log(state)
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeSearch: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch)
    //onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     robots: [],
  //     //searchfield: ''
  //   }
  // }
  componentDidMount() {
    //console.log('store:',this.props.store)
    // fetch('https://jsonplaceholder.typicode.com/users').then(res => {
    //   return res.json();
    // }).then(robots => {
    //   this.setState({robots: robots})
    // })
    this.props.onRequestRobots();

  }
  // onChangeSearch = (event) => {
  //   //console.log(event.target.value)
  //   this.setState({searchfield: event.target.value});
  //
  //   //console.log(filterRobots)
  // }
  render() {
    //const {robots, /*searchfield*/} = this.state;
    const {searchField , onChangeSearch, robots, isPending} = this.props;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (/*!robots.length*/isPending) {
      return (<div className="loading tc">
        <h1>Loading</h1>
      </div>)
    }
    return (<div className='tc'>
      <h1 className="f1">Robots Friends</h1>
      <SearchBox searchChange={/*this.onChangeSearch*/ onChangeSearch}/>
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filterRobots}/>
      </ErrorBoundry>
      </Scroll>
    </div>);
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
