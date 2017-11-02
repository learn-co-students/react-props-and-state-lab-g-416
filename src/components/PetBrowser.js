import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const petElements = this.props.pets.map(
      pet => <Pet
                pet={pet}
                isAdopted={this.props.adoptedPets.includes(pet.id)}
                onAdoptPet={this.props.onAdoptPet}
              />)
    return (
      <div className="ui cards">
        {petElements}
      </div>
    );
  }
}

export default PetBrowser;
