import React, { Component } from 'react';
import './DogItem.css';
import Dal from '../dog/Dal';



class DogItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.image,
            dogName: this.props.dogName,
            gender: this.props.gender,
            size: this.props.size,
            graduation: this.props.graduation,
            adopted: this.props.adopted,
            id: this.props.id

        }

        this.adopt = this.adopt.bind(this);
    }

    // adopt = () => {
    //     if (this.state.adopted) {
    //         alert('dog adopted')
    //     }
    //     else {
    //         Dal.adoptedDog(this.state.id)
    //             .then((dog) => {
    //                 if (dog && dog.data && dog.data.success) {
    //                     this.setState({
    //                         adopted: dog.data.success.adopted
    //                     })
                    
    //                 }  
    //             })
    //     }

    // }

    adopt() {
        if (this.state.adopted) {
            
            alert('dog adopted')
        }
        else {
            Dal.adoptedDog(this.state.id)
                .then((dog) => {
                    if (dog && dog.data && dog.data.success) {
                        this.setState({
                            adopted: dog.data.success.adopted
                        })
                    
                    }  
                })
        }

    }

    render() {
        console.log(this.props.id);

        return (
            <div className="dog-item">
                {this.state.adopted &&
                    <div className="adopt-tag">
                        Adopted
                   </div>

                }

                <div className="dog-image">
                    <img src={this.props.image} alt="Dog" width="100" />
                </div>
                <div className="dog-name">
                    {this.props.dogName}
                </div>
                <div className="dog-info">
                    <div className="info-item">
                        {this.props.gender}
                    </div>
                    <div className="info-item">
                        {this.props.size}
                    </div>
                    <div className="info-item">
                        {this.props.graduation}
                    </div>
                </div>
                <button onClick={this.adopt}>Adopt me</button>
              
            </div>
        );
    }
}

export default DogItem;