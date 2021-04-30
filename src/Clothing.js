import React, {useEffect } from 'react';

function Clothing(props) {
    const { data } = props;
    useEffect(() => {
        console.log(data);
    }, []);

    return(
        <>
        
        <div class = "product-image-container-container">
                <div class = "product-image-container">
                    <img src = {data.image} alt = "clothe" className = "product prodImg"></img>
                    <div class = "middle">
                        <div class = "text">
                            <button>Buy now!</button>
                        </div>
                    </div>
                    <p>${data.price}</p>
                    <p>{data.title}</p>
                </div>
            </div>      
        </>
    )
};

export default Clothing;