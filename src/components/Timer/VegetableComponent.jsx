import React from "react";
class Vegetable extends React.Component{
    constructor(props){
    super(props)
    this.state={vegetable:"",array:[]}    
    this.bindName = this.ChangeName.bind(this)
    }
    ChangeName(e){
    let listId = document.getElementById("ul_list")
    let inputValue = document.getElementById("input")
    this.setState({vegetable:this.state.vegetable = inputValue.value})
    this.setState({array:this.state.array = `${this.state.vegetable}`});
    listId.innerHTML+=`<li>${this.state.array}</li>`    
    }
    render(){
      
        
        return(
            <div >
                <h2 id="second_title">Add Vegetables</h2>
                <h3 id="vegetable_title">{this.state.vegetable}</h3>
                <input type="text"id="input"/>
                <button onClick={this.bindName}>Send</button>
                <ul id="ul_list"></ul>
            </div>
        )
    }
}
export default Vegetable;