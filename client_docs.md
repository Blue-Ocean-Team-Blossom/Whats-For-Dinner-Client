# Client Documentation


## Server Side Rendering to API Endpoints:
- Requires `.env` setup, refer to `README.md`.
- Backend API Documentation: https://documenter.getpostman.com/view/15037434/TzXunKnp#intro
- API Context Handlers (centralized frontend functions to interact with API): Repo Root Directory`/client/src/states_&_contexts/APIContext.js`

### Recipes:
`/RecipesByPantry`:
- method `GET`
- Backend Documentation Reference: /Spoonacular API Endpoints/GET Get Recipes by Pantry by Authorization Header
- This will respond to our API Context Handler: `getRecipesByPantry`

`/Recipe/:id`:
- method `GET`
- Backend Documentation Reference: /Spoonacular API Endpoints/GET Recipe Information by RecipeId
- This will respond to our API Context Handler: `getRecipeById`

`/ingredients`:
- method `GET`
- Backend Documentation Reference: /Spoonacular API Endpoints/GET Autocomplete Ingredient Name
- This will respond to Repo Root Directory`/client/src/components/FilteredRecipes.jsx` function: `fetchIngredients`

`filteredRecipes`:
- method `GET`
- Backend Documentation Reference: /Spoonacular API Endpoints/GET Get recipes by Ingredients
- This will respond to Repo Root Directory`/client/src/components/FilteredRecipes.jsx` function: `handleSearchButton`

### Pantry:
***`/pantry`:***
- method `GET`
- CURRENT SETUP: Backend Documentation Reference: /Pantry Endpoints/GET Entire Pantry by Authorization header
OR
- Another option to work with: Backend Documentation Reference: /Pantry Endpoints/GET Entrie Pantry by userId
- This will respond to our API Context Handler: `getPantry`

***`/pantry`:***
- method `DELETE`
- Backend Documentation Reference: /Pantry Endpoints/DEL Delete Pantry Item by PantryId
- This will respond to our API Context Handler: `deleteFromPantry`

***`/pantry`:***
- method `PUT`
- Backend Documentation Reference: /Pantry Endpoints/PUT Update Pantry Item
- This will respond to our API Context Handler: `updateItem`

***`/pantry/autocomplete`:***
- method `POST`
- Backend Documentation Reference: /Spoonacular API Endpoints/GET Autocomplete Ingredient Name
- This will respond to our API Context Handler: `autocomplete`

***`/pantry`:***
- method `POST`
- Backend Documentation Reference: /Pantry Endpoints/POST Add Pantry Item
- This will respond to our API Context Handler: `addToPantry`

### Users:
***`/auth`:***
- method `GET`
- Backend Documentation Reference: /Authentication Endpoints/GET Current user from Authorization header
- This will respond to our API Context Handler: (not implemented at this time)

***`/signup`:***
- method `POST`
- Backend Documentation Reference: /Authentication Endpoints/POST Create New User for Authorization
- This will respond to our API Context Handler: `createUser`

***`/login`:***
- method `POST`
- Backend Documentation Reference: /Authentication Endpoints/POST Login User for Authorization
- This will respond to our API Context Handler: `userLogin`


## Context States
***Pantry Context:***
- Root Repo Directory`/client/src/state_&_context/PantryContext.js`
- Autocomplete Options = `autocompOpts`
- Item in input field = `itemInput`
- User's pantry = `pantry`
- Valid pantry item entry truthiness (Renders user error message if false )= `valid`

***Recipe Context:***
- Root Repo Directory`/client/src/state_&_context/RecipeContext.js`
- Suggested Recipes = `recipe`
- Filtered Recipes = `filteredrecipe`
- Recipe Info = `recipeinfo`
- Truthiness to render recipes based on pantry size = `showpantryrecipes`

***User Context:***
- Root Repo Directory`/client/src/state_&_context/UserContext.js`
- User ID in database = `userId`
- User Token in database = `token`
- The active user logged in = `username`


## Context API:
### Users:
***`createUser`:***
- Creates a new user with our API.

***`userLogin`:***
- Login an existing user with our API.

### Pantry:
***`getPantry`:***
- Gets currently logged in user's pantry from our API.

***`deleteFromPantry`:***
- Deletes item from user's API pantry.

***`updateItem`:***
- Updates item from user's API pantry.

***`addToPantry`:***
- Adds valid item to user's API pantry.

***`autocomplete`:***
- Gets valid ingredients from Spoonacular API associated to 3 or more characters in item input field in the user's pantry page.

### Recipes:
***`getRecipesByPantry`:***
- Gets recipes associated with user's pantry items.

***`getRecipeById`:***
- Gets recipes associated with user's input field item.


## Views:
***Login/Signup:***
- Initial view for application.
- Toggleable between signup and login.
- Renders `components/Login_Signup_Page/Login_Signup.jsx`.

***Home:***
- Initially renders `components/Home_Page/components/index.jsx` to give Suggested Recipe List View (based on Pantry) and a button under main navigation buttons which toggles between searchable recipes by ingredients or suggested recipe list (based on Pantry).
- When toggled to Search Recipes, renders `components/Home_Page/components/Recipes.jsx`.
- When toggled to Suggested Recipes, renders `components/Home_Page/components/FilteredRecipes.jsx`.

***Pantry:***
- Upon Logging In or a successful Sign Up, this will be the very next view rendered.
- Renders `components/Pantry_Page/index.jsx` which renders `components/Pantry_Page/PantryForm.jsx` and `components/Pantry_Page/PantryList.jsx` with `PantryItem.jsx`'s.
