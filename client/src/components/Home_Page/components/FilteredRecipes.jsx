/* eslint-disable */
import React from 'react';
import { Select } from 'react-select';
import axios from 'axios';
import SearchBar from './SearchBar.jsx';
import IngredientsList from './IngredientsList.jsx';
import FilteredList from './FilteredList.jsx';
import Recipe from './Recipes.jsx';

class FilteredRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      recipes: [],
      search: '',
      filter: []
    }

    this.fetchIngredients = this.fetchIngredients.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.deleteFilter = this.deleteFilter.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);

  }

  fetchIngredients(string) {
    axios.get(`/ingredients?query=${string}`)
      .then((success) => {
        this.setState ({
          ingredients: success.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleSearchChange(e) {
    this.fetchIngredients(e.nativeEvent.data);
  }

  addIngredient (e) {
    this.state.filter.push(e.target.innerText);
    this.setState({
      filter: this.state.filter
    })
  }

  deleteFilter (index) {
    this.state.filter.splice(index, 1)
    this.setState({
      filter: this.state.filter
    })
  }

  handleSearchButton (e) {
    e.preventDefault();
    var ingredients = this.state.filter.join(',');
    axios.get(`/filteredRecipes?ingredients=${ingredients}`)
    .then((success) => {
      this.setState({
        recipes: success.data
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }


  render() {
    return (
      <div className ='search-bar'>
        <SearchBar change={this.handleSearchChange}/>
        <IngredientsList list={this.state.ingredients} add={this.addIngredient}/>
        <div>FILTER</div>
        <FilteredList list={this.state.filter} delete={this.deleteFilter}/>
        <button type="button" onClick={this.handleSearchButton}>Search</button>
        <Recipe recipeList={this.state.recipes}/>
      </div>
    )
  }
}


export default FilteredRecipe;