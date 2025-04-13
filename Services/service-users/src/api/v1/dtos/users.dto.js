import joi from 'joi'

// users
export const userResponseDto = (dataRaw) =>{
  return {
    id: dataRaw.id_user,
    name: dataRaw.user_name,
    email: dataRaw.user_email,
    subscription:dataRaw.user_subscription,
    createAt: new Date(dataRaw.created_at).toLocaleDateString()
  }
}


export const createNewUserDto = joi.object({
  user_name: joi.string().min(3).required(),
  user_email:joi.string().email().required(),
  user_password: joi.string().min(8).max(30).required()
})


// recipes

export const recipesAllResponseDTO = (dataRaw)=>{
  return dataRaw.map( recipeData => ({
    id_recipe: recipeData.id_recipe,
    recipe_name: recipeData.recipe_name,
    recipe_description: recipeData.description,
    recipe_score: recipeData.score ,
    recipe_estimated_time: recipeData.estimated_time,
    recipe_calories: recipeData.calories,
    recipe_difficulty_level: recipeData.difficulty_level,
    recipe_created_at: new Date(recipeData.created_at).toLocaleDateString(),
    author:[
      {
        id_author: recipeData.id_author,
        author_name:  recipeData.author_name,
        author_score: recipeData.score_total_recipes
      }
    ]
  })) 
}

export const UpdateRecipeDto = joi.object({
  recipe_name: joi.string().min(3).max(100).required(),
  recipe_description: joi.string().min(10).max(1000).required(),
  recipe_estimated_time: joi.number().min(1).max(1440).required(),
  recipe_calories: joi.number().min(0).max(5000).required(),
  recipe_difficulty_level: joi.string().valid('easy', 'medium', 'hard').required()
})

// Foods 


export const getFoodsCategoryDTO = (dataRaw)=>{

  return dataRaw.reduce((acc,item)=>{

    if(!acc[item.id_food_subtype]){

      acc[item.id_food_subtype] = {
        id_category:item.id_food_subtype,
        category_name:item.food_category,
        category_content: []
      }
    }

    acc[item.id_food_subtype].category_content.push({
      food_name: item.name_food_type,
        img_url: item.url
    })

    return acc
  },{})
}

// ingredients 
export const getRecipeIngredientsDTO = (dataRaw) => {
  if (dataRaw.length === 0) return null;
  const  {
    recipe_name,
    description: recipe_description,
    estimated_time: recipe_estimated_time,
    score:recipe_score,
    calories:recipe_calories,
    difficulty_level: recipe_difficulty_level,
  } = dataRaw[0]

  const ingredients = dataRaw.map(ingredient =>({
    ingredient_name:ingredient.name,
    ingredient_quantity:ingredient.quantity,
    ingredient_abbreviation:ingredient.abbreviation,
  }))

  return {
    recipe_name,
    recipe_description,
    recipe_estimated_time,
    recipe_score,
    recipe_calories,
    recipe_difficulty_level,
    ingredients
  }

  

}