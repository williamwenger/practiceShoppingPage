import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Clothing from './Clothing';

function Merch(){
    const [merch, setMerch] = useState('');
    //When merch is called, useEffect runs
    useEffect(function(){
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
            console.log(res);
            setMerch(res.data)
        })
        .catch(err => {
            console.err(err);
        })
    }, [])
    
    return(
        <div className = "product-image-container-container-container">
            
            {
                merch.map(x => {
                    return(
                        <Clothing key={x.id} data={x}/>
                    )
                })
            }
            
        </div>
    );
}
export default Merch;