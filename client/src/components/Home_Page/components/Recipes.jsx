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
    console.log(e.target.id);
    getRecipeById(Number(e.target.id));
    setShowdetails(true);
  }

  const close = (e) => {
    e.preventDefault();
    setShowdetails(false);
  }

  return (
    <div id='infinite-recipesList'>
      {props.recipeList.map((recipe) =>
        <div className='recipesList' key={Number(recipe.id)}>
          <h2 className='recipesListTitle' onClick={onClick} id={Number(recipe.id)}>{recipe.title}</h2>
          <img className='recipesListIMG' src={recipe.image} onClick={onClick} id={Number(recipe.id)}></img>
          <hr width='22.5%'></hr>
        </div>
      )}

      {showdetails ?
        <div className='modal'>
          <div title={recipeinfo.id} className='recipe'>
            <h1 className='recipeTitle'>{recipeinfo.title}</h1>
            <img className='recipeImage' src={recipeinfo.image}/>
            {recipeinfo.summary ?
              <p className='recipeSummary'>{parse(recipeinfo.summary)}</p>
            : null}
            {recipeinfo.extendedIngredients ?
              <div className='recipeIngredients'>
                <h2>Ingredients</h2>
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
            <a onClick={close} className="close"></a>
          </div>
        </div>
      : null}
    </div>
  )
}

export default Recipe;