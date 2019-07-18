import React from 'react';
import axios from 'axios';
import { Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container';
import SignupPage from './pages/SignupPage';
import DogsPage from './pages/DogsPage';
import AuthManagerUtil from './utils/AuthManagerUtil';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: ['Nunito', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
    fontSize: 14,
    fontColor: '#475665',
  },
  palette: {
    text: {
      primary: '#475665'
    },
    primary: {
      light: '#FFF2E9',
      main: '#ec660b',
      dark: '#ec660b',
      contrastText: '#fff'
    },
    secondary: {
      light: '#0050a0',
      main: '#0050a0',
      dark: '#0050a0',
      contrastText: '#fff'
    },
    error: {
      main: '#D40026',
      contrastText: '#fff'
    },
    success: {
      main: '#38AC38'
    },
    buttonPrimary: {
      backgroundColor: '#000'
    }
  }
});

console.log(AuthManagerUtil.isAuthenticated());
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    AuthManagerUtil.isAuthenticated() === true
      ? <Component {...props} />
      : <Redirect to='/signup' />
  )} />
)

const styles = () => ({
  
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Container fixed>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={SignupPage} />
            <Route path="/signup" component={SignupPage} />
            <PrivateRoute  path="/dogs" component={DogsPage} />
            {/*
            <Route component={NotFound} /> */}
          </Switch>
        </BrowserRouter>
      </Container>
      
    </MuiThemeProvider>
  );
}

export default (withStyles(styles)(App));
