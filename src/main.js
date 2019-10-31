import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from "./store/reducers";
import MainComponent from "./components/MainComponent";

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
    <MainComponent/>
</Provider>, document.getElementById('root'));





