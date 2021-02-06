import React from 'react';
import {useDispatch, useSelector} from 'react-redux'; 
import productsReducer from './redux/productsReducer';

export default function Products(){

const dispatch = useDispatch();
const products = useSelector(state => state.products);
console.log(products);

    return (
        <div style={panelStyle}>
            <h2>
                Produtos
            </h2>


          <div style={cardsDivStyle}>

                {products.map(item => (
                    <div key={item.id} style={cardStyle}>

                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <button  onClick={()=> dispatch({type:'ADD_TO_CART', id: item.id})}>Comprar</button> 

                       

                    </div>
                ))}
            </div>
        </div>
    )
}

const panelStyle = {
    padding: "10px",
    height: "100vh",
    width: '50vw',
    background: '#FFFFFF',
}

const cardStyle = {
    background: '#FFC107',
    width: '120px',
    height: '100px',
    fontWeight: 'bold',
    borderRadius: '15px',
    margin: '5px',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'center',
    textAlign: 'center',
}

const cardsDivStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
}