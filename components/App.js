const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

const petsData = require('../data/pets');
// importing pets data

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

    this.findPets = this.findPets.bind(this);
    this.adoptPet = this.adoptPet.bind(this);
    this.changeFilterType = this.changeFilterType.bind(this);
  }

  findPets(event){
    let url = '/api/pets'

    if(this.state.filters.type !== 'all'){
      url += `?type=${this.state.filters.type}`
    }

    fetch(url)
      .then(resp => resp.json())
      .then(pets => this.setState({ pets }))
  }

  adoptPet(id){
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  changeFilterType(type){
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type
      })
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
              <Filters filters={this.state.filters} onFindPetsClick={this.findPets} onChangeType={this.changeFilterType} />
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
