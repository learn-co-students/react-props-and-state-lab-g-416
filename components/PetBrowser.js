const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {

    const pets = this.props.pets.map((pet, index) => (
      <Pet pet={pet} id={index} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)} />
      // "onAdoptPet" function in the props, that we find in the App.js
    ));

    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

module.exports = PetBrowser;
