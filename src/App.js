import React  from 'react';

import Home from './components/Home'
import SearchPage from './components/Searchpage'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>

      <Route exact path="/"><Home/></Route>

      <Route path="/search"><SearchPage/></Route>
      
      </Switch>
      </Router>
     
    </div>
  );
}

export default App;
