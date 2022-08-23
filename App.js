import { View, Text } from 'react-native'
import React,{} from 'react'
import { Provider } from 'react-redux';
import store from './store';
import Home from './Home';

export default function App() {  
    return (
     
      <Provider store={store}>
        <Home/>
      </Provider>
    );
}