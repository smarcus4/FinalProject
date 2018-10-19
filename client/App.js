import React, {Compoent} from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import {teal, orange} from 'material-ui/colors'
import { hot } from 'react-hot-loader'
// import Survey from "./user/Survey"
// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
    light: '#6ec6ff',
    main: '#2196f3',
    dark: '#1769aa',
    contrastText: '#fff',
  },
  secondary: {
    light: '#a255ff',
    main: '#651fff',
    dark: '#0100ca',
    contrastText: '#fff',
  },
    openTitle: teal['700'],
    protectedTitle: orange['700'],
    type: 'light'
  }
})

const App = () => (
  

  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <MainRouter/>
    </MuiThemeProvider>
  </BrowserRouter>
   

  

)


export default hot(module)(App)
