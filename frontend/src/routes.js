import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import GraphPage from './pages/GraphPage';

export default function Routes(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={GraphPage}/>
        </Switch>
      </BrowserRouter>
    );
}



