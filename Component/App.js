import React from 'react'
import Header from './Header'
import Product from './Product'

function App(params) {
    return (
        <article>
            <div className="Container">
             <Header/>
            
                <Product/>
                <Product/>
                <Product/>
            
            </div>
        </article>
    )
}


export default App