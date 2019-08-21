import React, { Component } from 'react';
import Dal from '../dog/Dal';

class RemoveDog extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: " ",
            removeSuccess: " ",
            error: ""
        }
    }

    dogId = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submit = (e) => {
        e.preventDefault()
        let dogData = {
            id: this.state.id
        }
        Dal.removeDog(dogData)
            .then((dog) => {
                if (dog.data && dog.data.error) {
                    console.log(dog.data.error);
                    this.setState({ error: dog.data.error })

                }
                this.setState({ removeSuccess: dog.data.success })
            })

    }

    render() {
        console.log(this.state)

        let dogToDelete = "";
        if (this.state.removeSuccess != " ") {
            dogToDelete = <p>{this.state.removeSuccess}</p>

        }




        return (
            <div>
                <h1>Remove dog page </h1>

                <form onSubmit={this.submit} className="action-from"> 
                    Id number :<br />
                    <input type="text" name="id" onChange={this.dogId} /> <br />
                    <input type="submit" value="Remove" />
                </form>

                {dogToDelete}
                {this.state.error}
            </div>

        )

    }
}
export default RemoveDog