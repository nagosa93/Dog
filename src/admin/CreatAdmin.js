import React, { Component } from 'react';
import Dal from '../dog/Dal';
// import 'Admin.css';

class CreatAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            adminId: " ",
            adminUser: " ",
            adminPassword: " ",
            adminSuceess: {}
        }
    }


    adminDeatails = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submit = (e) => {
        e.preventDefault()
        let adminObj = {
            adminId: this.state.adminId,
            adminUser: this.state.adminUser,
            adminPassword: this.state.adminPassword,
        }
        Dal.creatNewAdmin(adminObj)
            .then((admin) => {
                console.log(admin.data);
                this.setState({ adminSuceess: this.state.adminSuceess })
            })

    }





    render() {
        console.log(this.state)

        let displayAdmin = '';
        if (this.state.adminSuceess.adminId) {
            displayAdmin = <p>{this.state.adminSuceess.adminId + this.state.adminSuceess.adminUser + this.state.adminSuceess.adminPassword} </p>
        }

        return (

            <div>
                <h1>Add admin </h1>
                <form onSubmit={this.submit} className="action-form">
                    Admin id :<br />
                    <input type="text" name="adminId" onChange={this.adminDeatails} /><br />
                    Admin user :<br />
                    <input type="text" name="adminUser" onChange={this.adminDeatails} /><br />
                    Admin password:<br />
                    <input type="text" name="adminPassword" onChange={this.adminDeatails} /> <br />
                    <input type="submit" value="Add" /> <br />
                </form>
                {displayAdmin}
            </div>
        )
    }

}

export default CreatAdmin