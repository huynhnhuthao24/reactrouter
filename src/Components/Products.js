import React,{ Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect
} from "react-router-dom"; 
import Product from "./Product";

class Products extends Component{
  render(){
    const products = [
      {
        id: 1,
        slug: 'iphoneX',
        name: 'Iphone X',
        price: 35000000
      },
      {
        id: 2,
        slug: 'iphone8',
        name: 'Iphone 8',
        price: 10000000
      },
      {
        id: 3,
        slug: 'iphone6',
        name: 'Iphone 6',
        price: 5000000
      }
    ]
    const getUser = localStorage.getItem('user'); 
    console.log(getUser);
    if(getUser == null){
      return(
        <Redirect to="/" />
      )
    }
    return(
      <div className="container-fluid" >
        <div className="row">
            <ul className="list-group">         
                {this.showItem(products)}
            </ul> 
        </div>
        <div className="row">
            <Route path="/products/:slug" component={Product} />
        </div>
    </div>
    )
  }
  
  showItem = (products) => {
      var { match } = this.props;
      const url = match.url;
      var result = null;
      if(products.length >0){
        result = products.map((product,index) =>{
          return(
            <NavLink to={`${url}/${product.slug}`} key={index}>
                <li className="list-group-item" >
                  {product.id} - {product.name} - {product.price}
                </li>
            </NavLink>
              
            
          )
        })
      }
      return result;
  }
}

export default Products;
