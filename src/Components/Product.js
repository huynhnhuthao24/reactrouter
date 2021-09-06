import React,{ Component } from "react";

class Product extends Component{
  render(){
    var {match} = this.props;
    console.log(match);
    var url = match.url
    return(
      <div >
        {match.url}
    </div>
    )
  }
}

export default Product;
