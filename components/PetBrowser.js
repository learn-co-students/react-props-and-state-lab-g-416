const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
    //for every Pet object in the pets prop, map it into a Pet component using the pet object and index
    const pets = this.props.pets.map((pet, index) => (
      <Pet pet={pet} id={index} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)} />
    ));

    return (
      <div className="ui cards">
        {pets}
        <code>&lt;Pet /&gt;</code> &nbsp; components should go here
        }
      </div>
    );
  }
}

module.exports = PetBrowser;
