import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

export default function Shopping(){

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.filter(item =>{
    return item.qty > 0
  }))
  console.log(cart)

const totalqty = useSelector((state) => 
  state.cart.reduce((acc, cur)=> acc + cur.qty, 0)
)

const totalPrice = useSelector((state) => state.cart.reduce((acc, cur)=>
  acc + cur.price * cur.qty, 0)
)

  return (
      <div style={panelStyle}>
          <h2>
              Shopping ({totalqty})

              <button onClick={()=> dispatch({type: 'CLEAR_CART'})}>
                Limpar carrinho
              </button>
          </h2>

          
           <table>
             <tbody>
                {cart.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.price.toFixed(2) * item.qty}</td>
                        <td>
                          


                        <button onClick={()=> dispatch({type: 'REMOVE_FROM_CART', id: item.id})}>
                            -
                          </button>

                          {item.qty}

                          <button onClick={()=> dispatch({type: 'ADD_TO_CART', id: item.id})}>
                            +
                          </button>
                          
                          
                          
                          
                          </td>
                    </tr>
                        ))}
              </tbody>
            </table>

            <h4>Total preço: R${totalPrice.toFixed(2)}</h4>
         </div>
  )
}

const panelStyle = {
  padding: "10px",
  height: "100vh",
  width: '50vw',
  background: '#FFC107',
}