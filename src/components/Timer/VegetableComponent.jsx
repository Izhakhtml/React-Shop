import React from "react";
class Vegetable extends React.Component{
    constructor(props){
    super(props)
    this.state={vegetable:"",array:[]}    
    this.bindName = this.ChangeName.bind(this)
    this.counter=0
    }
    ChangeName(event){
    let eventValue = event.target.parentElement.children[2].value;
    this.setState({vegetable:this.state.vegetable = eventValue})
    this.state.array.push(this.state.vegetable)
    //! second way
    // document.getElementById("ul_list2").innerHTML+=`<li>${this.state.array[this.counter]}</li>`    
    // this.counter++
    }
    render(){
        return(
            <div id="vegetable_div">
                <h2 id="second_title">Add Vegetables</h2>
                <h3 id="vegetable_title">{this.state.vegetable}</h3>
                <input type="text"id="input"/>
                <button onClick={this.bindName}>Send</button>
                <ul id="ul_list" className="ul_list">
                {
                    //! first way
                    this.state.array.map((item)=> <li>{item}</li>  )
                }
                </ul>
            </div>
        )
    }
}
export default Vegetable;