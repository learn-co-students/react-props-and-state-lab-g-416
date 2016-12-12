const React = require('react');

class Filters extends React.Component {
  constructor() {
    super();

		this.filterHandler = this.filterHandler.bind(this);
		this.findPetsClickEvent = this.findPetsClickEvent.bind(this);
  }

	filterHandler(event){
		this.props.onChangeType(event.target.value);
	}

	findPetsClickEvent(){
		this.props.onFindPetsClick();
	}

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select value = {this.props.filters.type} onChange = {this.filterHandler}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick = {this.findPetsClickEvent}>Find pets</button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
