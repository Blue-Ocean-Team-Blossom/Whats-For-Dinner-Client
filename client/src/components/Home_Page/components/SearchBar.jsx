/* eslint-disable */
import React from 'react';
import Select from 'react-select';

var dummydata = [
  {
      id: 296687,
      title: "chicken",
      imageType: "jpg"
  },
  {
      id: 42569,
      title: "chicken bbq",
      imageType: "jpg"
  },

  {
      id: 83890,
      title: "chicken blt",
      imageType: "jpg"
  },
  {
      id: 737543,
      title: "chicken pie",
      imageType: "jpg"
  }
]

const searchList = dummydata.map(
  ({ title }) => {
    return{
      label: title,
      value: title
    }
  }
)

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      selectedOption: null,
      ingredients: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleChange(selectedOption) {
    this.setState({
      selectedOption: null
    });
  }

  handleSearchChange(e) {
    this.setState ({
      search: e.target.value
    });
    this.fetchIngredients();
  }

  fetchIngredients() {
    axios.get('/ingredients/auto')
      .then((success) => {
        this.setState ({
          ingredients: success.data
        })
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <Select options={searchList} onChange={this.handleSearchChange} placeholder= "Search Ingredients" openMenuOnClick={false}/>
      </div>
    );
  }
}

export default SearchBar;
