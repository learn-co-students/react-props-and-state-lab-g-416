import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeTypeFilter = this.onChangeTypeFilter.bind(this);
  }

  onChangeTypeFilter(event) {
    this.props.onChangeType(event.target.value);
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.props.filters.type} onChange={this.onChangeTypeFilter}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
