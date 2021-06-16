import React  from 'react';

import Home from './components/Home'
import SearchPage from './components/Searchpage'
import {Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>

      <Route exact path="/"><Home/></Route>

      <Route path="/search"><SearchPage/></Route>
      
      </Switch>
     
    </div>
  );
}

export default App;
