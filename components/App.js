const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

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
		
		this.onFilterChange = this.onFilterChange.bind(this);
		this.onFetchPets = this.onFetchPets.bind(this);
		this.onAdoptPet = this.onAdoptPet.bind(this);
		
  }

	onFilterChange(newType){
		this.setState({
			filters: Object.assign({}, this.state.filters,{
				type: newType
			})
		});
	}

	onFetchPets(){
		let url = '/api/pets';
		
		if(this.state.filters.type !== 'all'){
			url += `?type=${this.state.filters.type}`;
		}

		fetch(url)
			.then(res => res.json())
			.then(data => this.setState({pets: data}));
	}

	onAdoptPet(id){
		this.setState({
			adoptedPets: [...this.state.adoptedPets, id] 
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
              <Filters onChangeType = {this.onFilterChange} filters = {this.state.filters} onFindPetsClick = {this.onFetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet = {this.onAdoptPet} pets = {this.pets} adoptedPets = {this.adoptedPets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
