import React from 'react'
import theme from './theme.js'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home'
import Search from './pages/Search'
import Video from './pages/Video'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <Switch>
          <Route path='/search/:keyword'><Search /></Route>
          <Route path='/video/:id'><Video /></Route>
          <Route path='/video'><Video /></Route>
          <Route path='/'><Home /></Route>

        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App;


