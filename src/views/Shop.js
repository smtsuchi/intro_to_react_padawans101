import React, { useState, useEffect } from 'react'

export default function Shop({ addToCart }) {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const res = await fetch('http://localhost:5000/api/products');
        const data = await res.json();
        if (data.status==='ok'){
            setProducts(data.data)
        }
    };

    useEffect(()=>{
        getProducts();
    }, [])



    return (
        <div className='row'>
            {products.map(p => <div key={p.id} className="card text-decoration-none text-dark" style={{ width: '18rem' }} >
                <img src={p.img_url} className="card-img-top" alt={p.product_name} />
                <div className="card-body">
                    <h5 className="card-title">{p.product_name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{p.price}</h6>
                    <p className="card-text">{p.description}</p>
                </div>
                <button onClick={()=>{addToCart(p)}} className='btn btn-primary'>Add To Cart</button>

            </div>)}
        </div>
    )
}
