
import {Auth0Provider} from '@auth0/auth0-react';
//import { Routes } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './Routes/Routes'

function App() {
  return (
    <Auth0Provider
    domain="autopartes2001.us.auth0.com"
    clientId="xb020iwat9uULwYHJjNc0HQ7Bb8PJm5D"
    redirectUri={window.location.origin}
  >
    <Routes />
  </Auth0Provider>
  );
}

export default App;
