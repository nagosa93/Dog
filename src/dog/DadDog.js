import React, { Component } from 'react';
import Dal from './Dal';
import DogItem from '../dog-item/DogItem';
import './DadDog.css'

class DadDog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogDeatils: []
        }

    }

    componentDidMount = () => {
        Dal.allDogs().then((dogs) => {
            this.setState({ dogDeatils: dogs.data.success })
        })
    }


    render() {

        let dogDeat = this.state.dogDeatils.map((i) => {
            console.log(i);
            
            return <DogItem key={i.id} id ={i.id}adopted={i.adopted} dogName={i.dogName} gender={i.gender} image={i.image} size={i.size} graduation={i.graduation} />
        })





        return (
            <div>
                <div className="head">
                    <img src="https://gilboadogs.co.il/templates/t6355/img/dog_blue_label.png" alt="logo"/>
                    <h1>Adopt Me</h1>
                </div>
                
                <div className="dad-dog">
                    {dogDeat}
                
                </div> 
            </div>

        )
    }
}

export default DadDog