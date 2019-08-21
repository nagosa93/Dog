import React, { Component } from 'react';
import Dal from '../dog/Dal';
import { log } from 'util';
import { Redirect } from 'react-router-dom'

class AdminLogin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            adminUser: this.props.adminUser,
            adminPassword: this.props.adminPassword,
            logAdmin: " ",
            error: " ",
            loggedIn:false
        }


    }
    loginDeatails = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submit = (e) => {
        e.preventDefault()
        let logDeat = {
            adminUser: this.state.adminUser,
            adminPassword: this.state.adminPassword
        }
        Dal.login(logDeat)
            .then((adminData) => {
                if (adminData.data && adminData.data.error) {
                    this.setState({ error: adminData.data.error })
                }
                else {
                    this.setState({ logAdmin: adminData.data.success.adminUser, error:'',loggedIn:true})
                }

            })
    }






    render() {
        console.log(this.state);



        let loginSuccess = "";
        if (this.state.logAdmin !== " ") {
            loginSuccess = <p>{this.state.logAdmin}</p>

        }
        if (this.state.loggedIn) {
            return <Redirect to='/admin'/>
        }
        console.log(loginSuccess);

        return (
            <div className="login-form">
                <div className="login">
                <h1>Login  </h1>

                <form onSubmit={this.submit}>
                    User :<br />
                    <input autoComplete="off" type="text" name="adminUser" onChange={this.loginDeatails} /> <br />
                    Password :<br />
                    <input autoComplete="off" type="text" name="adminPassword" onChange={this.loginDeatails} /> <br />
                    <input type="submit" value="Login" />
                </form>
                {loginSuccess}
                {this.state.error}
                </div>
            </div>
        )
    }
}
export default AdminLogin