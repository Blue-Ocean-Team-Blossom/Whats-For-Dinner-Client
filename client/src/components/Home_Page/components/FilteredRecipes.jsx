/* eslint-disable */
import React, { useEffect, useContext, useState } from 'react';
import { Select } from 'react-select';
import axios from 'axios';
import SearchBar from './SearchBar.jsx';

class FilteredRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      ingredients: [],
      recipes: []
    }

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.fetchIngredients = this.fetchIngredients.bind(this);

  }

  handleSearchChange(e) {
    this.setState ({
      search: e.target.value
    });
    // this.fetchIngredients();
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
      <div className ='search-bar'>
        <SearchBar onChange={this.handleSearchChange} list={this.state.ingredients}/>
        <button className = 'btn-search'>Add</button>
      </div>
    )
  }
}


export default FilteredRecipe;