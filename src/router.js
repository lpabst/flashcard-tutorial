import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home.js';
import Study from './components/Study/Study.js';
import Test from './components/Test/Test.js';

export default(
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/study' exact component={Study} />
        <Route path='/test' exact component={Test} />
    </Switch>
)