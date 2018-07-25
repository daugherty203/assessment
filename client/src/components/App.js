import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import {beers} from '/beers';
import {breweries} from '/beers';
import axios from 'axios'

class App extends Component {

componentDidMount () {
  axios.get =('https://api/all_beers.'
  )
  .then((res) => {       
    this.setState({data:res.all.beers});
  })
  axios.get =('https://api/all_breweries')
  .then((res) => {       
    this.setState({data:res.all.breweries});

  })

  }




  render() {
    return (
      <Segment style={styles.background}>
        <NavBar />
        <Flash />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={NoMatch} />
          <Route component={beers} />
          <Route component={breweries} />
        </Switch>
      </Segment>
    );
  }
}

const styles = {
  background: {
    backgroundColor: 'black',
  },
}

export default App;
