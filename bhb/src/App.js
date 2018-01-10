import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';
import logo from './images/logo.png';
import Banner from './components/Banner';
import {About} from './components/About';
import Header from './components/Header';
import PageContent from './components/PageContent';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <Router>
      <div>
          <Route exact path={`/`} render={
              (props) => {
                  window.scrollTo(0, 0);
                  return (
                      <div>
                          {/* <Header img={logo} url="#/" homepage />
                          <Home events={this.state.events} {...props} /> */}
                          <Header img={logo} url="www.bollinghball.com" homepage/>
                          <Banner />
                          <About />
                          <PageContent />
                          <Footer img={logo} url="www.bollinghball.com" homepage/>
                      </div>
                  );
              }
          } />
          <Route exact path={`/:slug`} render={
              (props) => {
                  window.scrollTo(0, 0)
                  return (
                      <div>
                          {/* <Header img={logo} url="#/" homepage />
                          <Details events={this.state.events} {...props} /> */}
                          <Header img={logo} url="www.bollinghball.com" homepage/>
                          <Footer img={logo} url="www.bollinghball.com" homepage/>
                      </div>
                  );
              }
          } />
      </div>
  </Router>
    );
  }
}

export default App;
