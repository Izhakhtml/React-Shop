import React from "react";
class Spice extends React.Component{
    constructor(props){
    super(props)
    this.state={spice:"",array:[]}    
    this.bindName = this.ChangeName.bind(this)
    }
    ChangeName(e){
        let listId = document.getElementById("ul_list")
        let inputValue = document.getElementById("input3")
        this.setState({spice:this.state.spice = inputValue.value})
        this.setState({array:this.state.array = this.state.spice});
        listId.innerHTML+=`<li>${this.state.array}</li>`    
    }
    render(){
        return(
            <div>
                <h2 id="four_title">Add Spices</h2>
                <h3 id="vegetable_title">{this.state.spice}</h3>
                <input type="text"id="input3"/>
                <button onClick={this.bindName}>Send</button>
                <ul id="ul_list"></ul>
                  
            </div>
        )
    }
}
export default Spice;