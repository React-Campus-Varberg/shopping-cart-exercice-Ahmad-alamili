import React from 'react'
import Header from './Header'
import Product from './Product'

class App extends React.Component {
constructor(props){
    super(props)
    this.state ={
        value: 0,
        card : [{
            title :"Lorem Ipsum",
            subtitle:"typesetting industry",
            discr:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            title :"typesetting industry",
            subtitle:"Lorem Ipsum",
            discr:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            title :"industry's standard",
            subtitle:"since the 1500s",
            discr:"Lorem Ipsum  dummy text of the printing and typesetting industry. has been the industry's standard dummy text ever since the 1500s"
        }]
    }
 
}

 addHandler (e) {
  this.setState({value: this.state.value + 1})
 
}
    render(){
    
    
        return (
        <article>
            <div className="Container">
                <Header value ={this.state.value}/>
                {this.state.card.map((item,index)=>{
                    return (
                <Product key={index} title={item.title} subtitle={item.subtitle} decrp={item.discr} value = {(e)=>this.addHandler(e)}/>
                )
                })}
            </div>
        </article>
    )}
}


export default App