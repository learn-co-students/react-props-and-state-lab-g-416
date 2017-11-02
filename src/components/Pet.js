import React from 'react';

class Pet extends React.Component {

  constructor(props) {
    super(props);
    this.onAdoptPetClick = this.onAdoptPetClick.bind(this);
  }

  onAdoptPetClick(event) {
    this.props.onAdoptPet(this.props.pet.id);
  }


  render() {
    const { isAdopted, pet } = this.props;
    const { name, type, age, weight, gender } = pet;
    return (
      <div className="card">
        <div className="content">
          <a className="header">{name} { gender === 'male' ? '♂' : '♀'}</a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          { !isAdopted ?
            <button className="ui primary button" onClick={this.onAdoptPetClick}>Adopt pet</button>
            :
            <button className="ui disabled button">Already adopted</button>
          }
        </div>
      </div>
    );
  }
}

export default Pet;
