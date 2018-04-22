import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import promise from 'redux-promise'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import User from './User/User'
import Foo from './Foo'
import reducers from './reducers/index'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends Component {
    render() {
        return (
            <Provider store={createStoreWithMiddleware(reducers)}>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path="/foo" component={Foo}/>
                            <Route path="/" component={User}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
