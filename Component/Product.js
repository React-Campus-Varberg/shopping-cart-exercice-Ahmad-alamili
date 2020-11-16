import React from 'react'

function Product(params) {
    console.log(params);
    return(
        <div class="card">
            <div class="container">
                <div className="subcontainer">
                    <h4><b>{params.title}</b></h4> 
                    <p>{params.subtitle}</p> 
                    <p>{params.decrp}</p>
                    <button onClick={params.value }>Add Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product