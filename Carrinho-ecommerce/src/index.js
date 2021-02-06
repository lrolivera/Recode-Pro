import React from 'react';
import ReactDOM from 'react-dom';
import Products from './Products';
import Shopping from './Shopping';
import store from './redux/store';
import {Provider} from 'react-redux';

console.log(store.getState());


ReactDOM.render( 

<Provider store={store}>

<div style={{display: 'flex'}}> 
<Products/>
<Shopping/> 
 </div>   

 </Provider>
    
, document.getElementById('root')
);



