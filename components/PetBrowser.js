const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
	constructor(){
		super();
	}

	render() {
		const pets = this.props.pets.map(pet =>{
			return <Pet pet = {pet} isAdopted = {this.props.adoptedPets.includes(pet.id)} onAdoptPet = {this.props.onAdoptPet}/>
		});
		
    return (
      <div className="ui cards">
      	{pets}
			</div>
    );
  }
}

module.exports = PetBrowser;
