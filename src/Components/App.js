import { makeStyles } from '@material-ui/core';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route,
} from 'react-router-dom'
import './App.css'
import '../fonts.css';
import { SignIn } from '../Views/SignIn/index';
import { SignUp } from '../Views/SignUp/index';
import { Career } from '../Views/Career/index';
import { About } from '../Views/About/index'
import { Pricing } from '../Views/Pricing/index';
import { TermsAndCondition } from '../Views/TermsAndCondition/index';
import { ThankYou } from '../Views/ThankYou/index'
import { GetInTouch } from '../Views/GetInTouch/index';
import { NotFound } from '../Views/NotFound/index'
import {ForgotPassword} from '../Views/ForgotPassword/index';
// import FormCard from './Shared/FormCard/FormCard';

const useStyles = makeStyles(() => ({
  '@global': {
    html: {
      height: '100%',
      scrollbarWidth: 'none',
    },
    body: {
      margin: 0,
      height: '100%',
      overflowY: 'overlay',
    },
    '#root': {
      height: '100%'
    }
  }
}))
function App() {
  useStyles();
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <About />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/career'>
            <Career />
          </Route>
          <Route exact path='/pricing'>
            <Pricing />
          </Route>
          <Route exact path='/termsandcondition'>
            <TermsAndCondition />
          </Route>
          <Route exact path='/contact'>
            <GetInTouch />
          </Route>
          <Route exact path='/landingpage'>
            <ThankYou />
          </Route>
          <Route exact path='/signin'>
            <SignIn />
          </Route>
          <Route exact path='/signup'>
            <SignUp />
          </Route>
          <Route exact path='/forgotpassword'>
            <ForgotPassword />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
