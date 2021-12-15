import React from "react";
class Spice extends React.Component{
    constructor(props){
    super(props)
    this.state={spice:"",array:[]}    
    this.bindName = this.ChangeName.bind(this)
    this.counter=0
    }
    ChangeName(event){
        let eventValue = event.target.parentElement.children[2].value;
        this.setState({spice:this.state.spice = eventValue})
        this.state.array.push(this.state.spice)
        //! second way 
        // document.getElementById("ul_list3").innerHTML+=`<li>${this.state.array[this.counter]}</li>`
        // this.counter++    
    }
    render(){
        return(
           <div id="spice_div">
                <h2 id="four_title">Add Spices</h2>
                <h3 id="vegetable_title">{this.state.spice}</h3>
                <input type="text"id="input3"/>
                <button onClick={this.bindName}>Send</button>
                <ul id="ul_list3"className="ul_list">
                {
                    //! first way
                    this.state.array.map((item)=> <li>{item}</li>  )
                }
                </ul>
           </div>
        )
    }
}
export default Spice;