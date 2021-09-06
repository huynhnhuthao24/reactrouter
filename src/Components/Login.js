import React,{ Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component{
  constructor(props){
    super(props)
    this.state = {
      txtUserName: '',
      txtPassword: ''
    }
  }
  
  render(){
    const {txtUserName,txtPassword} = this.state;
    const getUser = localStorage.getItem('user');
    const {location} = this.props;
    console.log(location);
    if(getUser !== null){
      return(
        <Redirect to="/products" />
      )
    }
    return(
      <div className="container">
        <div className="row">
          <div className="col-6">
              <form onSubmit={this.onForm}>
                  <legend>
                      Login
                  </legend>
                  <div className="form-group">
                      <label>User Name</label>
                      <input  
                          type="text" 
                          className="form-control" 
                          name="txtUserName" 
                          value={txtUserName}
                          onChange={this.onLogin} 
                      />
                  </div>
                  <div className="form-group">
                      <label>Password</label>
                      <input  
                          type="password" 
                          className="form-control"
                          value={txtPassword}
                          name="txtPassword" 
                          onChange={this.onLogin}
                        />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
              </form>
          </div>
          <div className="col-6">
            
          </div>
        </div>
    </div>
    )
  }
  onLogin = (e) =>{
    var target = e.target;
    var name = target.name; 
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }
  onForm = (e) =>{
    const {txtUserName,txtPassword} = this.state;
    e.preventDefault();
    if(txtUserName === 'admin' && txtPassword === 'admin'){
      localStorage.setItem('user',JSON.stringify({
        username: txtUserName,
        password: txtPassword
      }))
    }
  }
  
}

export default Login;
