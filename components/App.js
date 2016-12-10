const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');
import * as allPets from '../data/pets'

class App extends React.Component {
  constructor() {
    super();

    this.changeFilters = this.changeFilters.bind(this)
    this.findPets = this.findPets.bind(this)
    this.addPet = this.addPet.bind(this)

    this.state = {
      pets: [allPets],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  changeFilters(type) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type
      })
    })
  }

  findPets() {
    let url = '/api/pets'

    if(this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    }

    fetch(url)
    .then(res => res.json())
    .then(pets => this.setState({ pets }))
  }

  addPet(id) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
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
              <Filters filters={this.state.filters} onChangeType={this.changeFilters} onFindPetsClick={this.findPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.addPet} adoptedPets={this.state.adoptedPets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
