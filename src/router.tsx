import *  as React from 'react';
import {Route} from 'react-router-dom';
import Home from './containers/home'
import Detail from './containers/news'

class BaseRouter extends React.Component{
   public render(){
        return(
            <div>
                <Route path="/" component={Home} />
                <Route path="/detail" component={Detail} />
            </div>
        )
    }
}

export default BaseRouter;