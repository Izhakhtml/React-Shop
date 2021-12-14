import React from "react";
class Vegetable extends React.Component{
    constructor(props){
    super(props)
    this.state={vegetable:"",array:[]}    
    this.bindName = this.ChangeName.bind(this)
    // this.addList = this.AddToArray.bind(this)
    }
    ChangeName(e){
    this.setState({vegetable:this.state.vegetable = e.target.parentElement.children[2].value})
    this.setState({array:this.state.array =this.state.vegetable})   
    }
    // AddToArray(){
    // this.setState({array:this.state.array =this.state.vegetable})   
    // }
    render(){
        return(
            <div>
                <h2 id="second_title">Add Vegetables</h2>
                <h3 id="vegetable_title">{this.state.vegetable}</h3>
                <input type="text"/>
                <button onClick={this.bindName}>Send</button>
                  <ul>
                    <li>{this.state.array}</li>
                  </ul>
            </div>
        )
    }
}
export default Vegetable;