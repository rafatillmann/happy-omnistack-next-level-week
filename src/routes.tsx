import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';

import Landing from './pages/Landing';

function Routes(){
    return(
        <BrowserRouter>
        <Route path="/" component={Landing}></Route>
        </BrowserRouter>
    );
}

export default Routes;