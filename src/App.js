import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DetailsPlace from './Components/DetailsPlace/DetailsPlace';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';


export const travelContext = createContext()

function App() {

  const [travelInformation, setTravelInformation] = useState()

  return (
    <travelContext.Provider value={[travelInformation, setTravelInformation]}>
      <Router>

        <Switch>

          <Route path="/details/:id">
            <DetailsPlace></DetailsPlace>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/">
            <Header></Header>
          </Route>
        </Switch>

      </Router>
    </travelContext.Provider>
  );
}

export default App;
