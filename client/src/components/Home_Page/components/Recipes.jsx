/* eslint-disable */
import React, { useEffect, useContext, useState } from 'react';
import { RecipeContext } from '../../../state_&_contexts/RecipeContext';
import { APIContext } from '../../../state_&_contexts/APIContext';
import parse from 'html-react-parser';

// class Recipe extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showdetails: false,
//     }
//     this.onClick = this.onClick.bind(this);
//   }

//   onClick(e) {
//     e.preventDefault();
//     console.log(e.target.title);
//     this.props.setRecipeID(Number(e.target.title));
//     this.setState({
//       showdetails: true,
//     })
//   }

//   render() {
//     return(
//       <div>
//         {this.props.recipeList.map((recipe) =>
//           <div key={Number(recipe.id)} onClick={this.onClick} title={Number(recipe.id)}>
//             <img src={recipe.image} title={Number(recipe.id)}/>
//             {recipe.title}
//           </div>
//         )}
//       </div>
//     )
//   }
// }

// export default Recipe;




const Recipe = (props) => {
  const { recipeinfo } = useContext(RecipeContext);
  const { getPantry, getRecipesByPantry, getRecipeById } = useContext(APIContext);

  const [showdetails, setShowdetails] = useState(false);

  const onClick = (e) => {
    e.preventDefault();
    console.log(e.target.title);
    getRecipeById(Number(e.target.title));
    setShowdetails(true);
  }

  return (
    <div>
      {props.recipeList.map((recipe) =>
        <div key={Number(recipe.id)} onClick={onClick} title={Number(recipe.id)}>
          <h5>{recipe.title}</h5>
          <img src={recipe.image} title={Number(recipe.id)}/>
        </div>
      )}

      {showdetails ?
        <div title={recipeinfo.id} className='recipe'>
          <h1 className='recipeTitle'>{recipeinfo.title}</h1>
          <img className='recipeImage' src={recipeinfo.image}/>
          {recipeinfo.summary ?
            <p className='summary'>{parse(recipeinfo.summary)}</p>
          : null}
          {recipeinfo.extendedIngredients ?
            <div className='recipeIngredients'>
              <h3>Ingredients</h3>
              <ul className='recipeIngredientsList'>
                {recipeinfo.extendedIngredients.map((ingredient, i) =>
                  <li key={i}>
                    <h4>{ingredient.original}</h4>
                  </li>
                )}
              </ul>
            </div>
          : null}
          <p className='recipeExtraInfo'>
            Servings: {recipeinfo.servings}<br></br>
            Ready in {recipeinfo.readyInMinutes} Minutes<br></br>
            Cooking Instructions: <a href={recipeinfo.spoonacularSourceUrl}>{recipeinfo.title}</a><br></br>
          </p>
        </div>
      : null}
    </div>
  )
}

export default Recipe;