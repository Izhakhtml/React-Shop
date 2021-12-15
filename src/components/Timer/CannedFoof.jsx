import React from "react";
class CannedFood extends React.Component{
    constructor(props){
    super(props)
    this.state ={cannedFood:"",array:[]}
    this.event = this.ChangeName.bind(this)
    this.counter=0
    }
    ChangeName(event){
        let eventValue = event.target.parentElement.children[2].value;
        this.setState({cannedFood:this.state.cannedFood = eventValue})
        this.state.array.push(this.state.vegetable)
        //! second way
        // document.getElementById("ul_list2").innerHTML+=`<li>${this.state.array[this.counter]}</li>`
        // this.counter++   
    }
    render(){
        return(
            <div id="cannedfood_div">
                <h2 id="three_title">Add CannedFood</h2>
                <h3 id="vegetable_title">{this.state.cannedFood}</h3>
                <input type="text"id="input2" />
                <button onClick={this.event}>Send</button>
                <ul id="ul_list2" className="ul_list">
                {
                    //! first way
                    this.state.array.map((item)=> <li>{item}</li>  )
                }
                </ul>
            </div>
        )
    }
}
export default CannedFood;