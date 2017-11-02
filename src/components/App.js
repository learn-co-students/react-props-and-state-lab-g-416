import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };

    this.onChangeType = this.onChangeType.bind(this);
    this.onFindPetsClick = this.onFindPetsClick.bind(this);
    this.onAdoptPet = this.onAdoptPet.bind(this);
  }

  onChangeType(type) {
    this.setState({
      filters: Object.assign(this.state.filters, {type: type})
    });
  }

  onFindPetsClick(event) {
    const baseUrl = '/api/pets',
      urlWithTypeParam = baseUrl + '?type=',
      urls = {
        all: baseUrl,
        cat: urlWithTypeParam + 'cat',
        dog: urlWithTypeParam + 'dog',
        micropig: urlWithTypeParam + 'micropig'
      };
      fetch(urls[this.state.filters.type]).then(pets => this.setState({pets: pets}));
  }

  onAdoptPet(petId) {
    this.setState({
      adoptedPets: this.state.adoptedPets.concat([petId])
    });
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
              <Filters filters={this.state.filters} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
