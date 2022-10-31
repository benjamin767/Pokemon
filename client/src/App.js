import './App.css';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import DetailsContainer from './components/DetailsContainer/DetailsContainer';

function App() {
  return (
    <div>
      <Route 
        path='/home'
        component={Nav}
      />
      <Switch>
        <Route
          exact
          path='/'
          component={Landing}
        />
        <Route
          exact
          path='/home'
          component={Home}
        />
        <Route 
          exact
          path='/home/:id'
          component={DetailsContainer}
        />
      </Switch>
    </div>
  );
}

export default App;
