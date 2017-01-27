import React from 'react';
import Filters from './Filters';
import PetBrowser from './PetBrowser';
import Pets from '../../data/pets'
console.log(Pets.getAll())


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: Pets.getAll(),
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };

    this.fetchPets=this.fetchPets.bind(this);
    this.handleChangeFilterType = this.handleChangeFilterType.bind(this);
    this.handleAdoptPet = this.handleAdoptPet.bind(this);
  }

  fetchPets() {
    // let url = '/api/pets';
    // let url = Pets.getAll();

    if (this.state.filters.type !== 'all'){
      this.setState({
        pets: Pets.getByType(this.state.filters.type)
      })
    } else {
      this.setState({
        pets: Pets.getAll()
      })
    }

    // if (this.state.filters.type !== 'all') {
    //
    //   // url += `?type=${this.state.filters.type}`;
    // }

    // fetch(url)
    //   // .then(res => res.json())
    //   .then(pets => this.setState({ pets }));
  }


  handleChangeFilterType(type) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type,
      })
    });
  }

  handleAdoptPet(petId) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId],
    });
  }

  render() {
    console.log(this.state.filters);
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters}
                       onChangeType={this.handleChangeFilterType}
                       onFindPetsClick={this.fetchPets}


              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.handleAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
