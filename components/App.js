const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');
const petsData = require('../data/pets');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [petsData],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };

    this.changeFilterType = this.changeFilterType.bind(this)
    this.findPets = this.findPets.bind(this)
    this.adoptPet = this.adoptPet.bind(this)
  } 

  changeFilterType(type) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type
      })
    })
  }

  findPets(event) {
    let url = '/api/pets'

    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    }

    fetch(url)
      .then(response => response.json())
      .then(pets => this.setState({ pets }))
  }

  adoptPet(pet) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, pet]
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType={this.changeFilterType} onFindPetsClick={this.findPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} adoptedPets={this.state.adoptedPets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
