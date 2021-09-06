import React,{ Component } from "react";
import { Prompt } from "react-router-dom";
import Product from "./Product";
class Contact extends Component{
  constructor(props){
    super(props);
    this.state = {
      isChecked: false
    }
  }
  render(){
    const {isChecked} = this.state
    return(
      <div className="text-center">
        <button type="button" className="btn btn-primary" onClick={ () => {this.onOut(false)} }>Ok</button>
        <button type="button" className="btn btn-danger" onClick={ () => {this.onOut(true)} }>No Ok</button>
        <Prompt 
            when={isChecked} 
            message={location => ( `ban co muon cut khong ? ${location.pathname}` )}
        />
    </div>
    )
  }
  onOut = (isChecked) =>{
    this.setState({
      isChecked: isChecked
    })
  }
}

export default Contact;
