/* eslint-disable */
import React from 'react';
import { hot } from 'react-hot-loader';
import { observer, inject } from 'mobx-react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Vue2 } from './component/vue2';

const App = ({ store }: any) => {
  return (
    <div>
      <div className="header">
        <span>Garfish demo</span>
        <span className="master-store">store: {JSON.stringify(store)} total: {store.total}</span>
      </div>
      {/* <div id="submodule"></div> */}
      <BrowserRouter basename={'/'}>
        <div className="menu">
          <ul className="demo-menu">
            <li className="demo-menu-item"><Link to="/">Home</Link></li>
            <li className="demo-menu-item"><Link to="/vue2">Vue2</Link></li>
          </ul>
        </div>
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route path="/vue2" component={Vue2}></Route>
            </Switch>
          </header>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default hot(module)(inject('store')(observer(App)));
