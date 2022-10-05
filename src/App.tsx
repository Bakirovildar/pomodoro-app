import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./store/store";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import { useNavigate } from 'react-router-dom'

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
))

function App() {

    const navigate = useNavigate()

    useEffect(() => {
        navigate('/tasks')
    }, [])


    return (
        <Provider store={store}>
            <div className="App">
                <Header/>
                <Content/>
            </div>
        </Provider>
    );
}

export default App;
