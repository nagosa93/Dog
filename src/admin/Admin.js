import React, { Component } from 'react';
import Dal from '../dog/Dal';
import './Admin.css';
import RemoveDog from './RemoveDog';
import CreatAdmin from './CreatAdmin';
import UserDeatails from './show_user-deat';


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: " ",
            dogName: " ",
            gender: " ",
            image: " ",
            size: " ",
            graduation: " ",
            sucssesAddDog: [],
            selectFile: " "
        }

    }

    fileSelectedHendler = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            console.log(e.target.result);
            this.setState({ image: e.target.result })

        }
    }


    dogDetails = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submit = (e) => {
        e.preventDefault()

        let dog = {
            id: this.state.id,
            dogName: this.state.dogName,
            gender: this.state.gender,
            image: this.state.image,
            size: this.state.size,
            graduation: this.state.graduation
        }
        Dal.addDog(dog)
            .then((data) => {
                console.log(data)
                this.state.sucssesAddDog.push(data.data.success)
                this.setState({ sucssesAddDog: this.state.sucssesAddDog })


            })

    }

    render() {

        let dogAdded = "";
        if (this.state.sucssesAddDog.length > 0) {
            dogAdded = this.state.sucssesAddDog.map((i) => {
                return (<div>
                    <p>{i.id} {i.dogName} {i.gender} <img src={i.image} /> {i.size} {i.graduation}</p>
                </div>)
            })
        }


        return (
            <div className="admin-actions">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="add-tab" data-toggle="tab" href="#add" role="tab" aria-controls="add" aria-selected="true">Add</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="remove-tab" data-toggle="tab" href="#remove" role="tab" aria-controls="remove" aria-selected="false">Remove</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="create-tab" data-toggle="tab" href="#create" role="tab" aria-controls="create" aria-selected="false">Create</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="add" role="tabpanel" aria-labelledby="add-tab">
                        <h1>Add dog </h1>
                        <form onSubmit={this.submit}  className="action-form">
                            Dog id <br />
                            <input type="text" name="id" onChange={this.dogDetails} /><br />
                            Dog name <br />
                            <input type="text" name="dogName" onChange={this.dogDetails} /><br />
                            Gender:<br />
                            <input type="text" name="gender" onChange={this.dogDetails} /><br />
                            Image:<br />
                            <input type="file" name="image" onChange={this.fileSelectedHendler} /><br />

                            Size:<br />
                            <input type="text" name="size" onChange={this.dogDetails} /><br />
                            Graduation:<br />
                            <input type="text" name="graduation" onChange={this.dogDetails} /><br />
                            <input type="submit" value="add" /> <br />

                        </form>
                        {dogAdded}
                    </div>
                    <div class="tab-pane fade" id="remove" role="tabpanel" aria-labelledby="remove-tab">
                        <RemoveDog/>
                        
                    </div>
                    <div class="tab-pane fade" id="create" role="tabpanel" aria-labelledby="create-tab">
                        <CreatAdmin/>
                        
                    </div>
                    <div class="tab-pane fade" id="create" role="tabpanel" aria-labelledby="create-tab">
                        <UserDeatails/>
                        
                    </div>
                </div>
            </div>
             
        )
    }
}

export default Admin