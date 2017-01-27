import React from 'react';

class Filters extends React.Component {
  constructor() {
    super();

    this.handleFilterTypeChange = this.handleFilterTypeChange.bind(this);
    this.handleFind = this.handleFind.bind(this);
  }

  handleFilterTypeChange(ev) {
    console.log(ev.target.value);
     this.props.onChangeType(ev.target.value);
     console.log(this.props);
     console.log(this.props.onChangeType(ev.target.value));
    //  this.props.onFindPetsClick(ev.target.value);
   }

  handleFind(){
    this.props.onFindPetsClick();
  }



  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type"  onChange={this.handleFilterTypeChange} >
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleFind}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
