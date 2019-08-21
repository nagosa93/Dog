import React, { Component } from 'react';
import Dal from '../dog/Dal';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {

            name: " ",
            email: " ",
            phone: " ",
            userSuccess: ''
        }

    }



    userDeatails = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submit = (e) => {
        e.preventDefault()
        let newUser = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone

        }
        Dal.add(newUser)
            .then((data) => {
                this.setState({ userSuccess: data.data.success })
            })
            console.log(newUser);
            

    }



    render() {
        console.log(this.state);
        console.log();
        
        
        return (
            <div>

                <h2>In order for us to contact you please fill in the following details please</h2>

                <form onSubmit={this.submit} className="contact-form">
                    <div className="form-group">
                        <label for="inputEmail4">Email : </label>
                        <input type="email" className="form-control" id="inputEmail4" onChange={this.userDeatails} name="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label for="inputCity">Name : </label>
                        <input type="text" className="form-control" id="inputCity" placeholder="name" name="name" onChange={this.userDeatails} />
                    </div>
                    <div className="form-group">
                        <label for="validationTooltip02">Phone : </label>
                        <input type="text" className="form-control" id="validationTooltip02" name="phone" placeholder="phone" onChange={this.userDeatails} />
                        <div class="valid-tooltip">
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
                {this.state.userSuccess}
            </div>

        );
    }
}

export default Form;