import React from "react";
class Spice extends React.Component{
    constructor(props){
    super(props)
    this.state={spice:"",array:[]}    
    this.bindName = this.ChangeName.bind(this)
    }
    ChangeName(e){
    this.setState({spice:this.state.spice = e.target.parentElement.children[2].value})
    this.setState({array:this.state.array =this.state.spice})   
    }
    render(){
        return(
            <div>
                <h2 id="second_title">Add Spices</h2>
                <h3 id="vegetable_title">{this.state.spice}</h3>
                <input type="text"/>
                <button onClick={this.bindName}>Send</button>
                  <ul>
                    <li>{this.state.array}</li>
                  </ul>
            </div>
        )
    }
}
export default Spice;