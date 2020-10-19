import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; //fazer o spa
import GraphPage from '../pages/GraphPage';


export function Routes(){
    return (
    //coloca as coisas do spa
    <BrowserRouter>
        <switch>
            <Route path='/' exact component={GraphPage}/>
        </switch>
    </BrowserRouter>
    );
}
