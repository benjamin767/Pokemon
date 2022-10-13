import './App.css';
import { Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div>
      <Route 
        path='/home'
        component={Nav}
      />
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

    </div>
  );
}

export default App;
