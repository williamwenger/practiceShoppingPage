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
                    <img src = {data.image} alt = "clothe" class = "product"></img>
                </div>
            </div>      
        </>
    )
};

export default Clothing;