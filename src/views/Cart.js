import React from 'react'

export default function Cart({ cart, removeFromCart }) {
    const getUniqueCart = (cart) => {
        let uniqueCart = [];
        let ids = new Set();
        for (let item of cart){
            if (!ids.has(item.id)){
                uniqueCart.push(item)
                ids.add(item.id)
            }
        }
        return uniqueCart
    }
    const getQuantity = (item, cart) => {
        let count = 0;
        for (let cur of cart) {
            if (item.id ===cur.id){
                count++;
            }
        }
        return count
    }
  return (
    <table className='table table-striped'>
        <thead>
            <tr>
                <th>ID</th>
                <th></th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>SUBTOTAL</th>
                <th>Remove</th>
            </tr>
        </thead>
        <tbody>
            {getUniqueCart(cart).map(c=><tr>
                <td>{c.id}</td>
                <td><img style={{height:'2rem'}} src={c.img_url}/></td>
                <td>{c.product_name}</td>
                <td>{c.price}</td>
                <td>{getQuantity(c, cart)}</td>
                <td>{(getQuantity(c, cart)*parseFloat(c.price)).toFixed(2)}</td>
                <td><button className='btn btn-danger' onClick={()=>{removeFromCart(c)}}>Remove</button></td>
            </tr>)}
        </tbody>

    </table>
  )
}
