import { createNewUser, getAllRecipesDB, getDataUserByID, getFoodsCategoryDB, getIngredientsDB, getRecipeDB, patchRecipeDB, validateEmail } from "../repositories/user_repository.js"

// users
export const getUserByID = async (userIdParams) =>{
  
  if(isNaN(userIdParams)){
    const errorId = new Error('Invalid user ID')
    errorId.status = 400
    throw errorId
  }

  const userDB = await getDataUserByID(userIdParams)

  if(!userDB){
    const errorUser = new Error('User not found')
    errorUser.status = 404
    throw errorUser
  }

  return userDB
}

export const postCreateUser = async (userBody) =>{

  const emailValidate = await validateEmail(userBody.user_email)
  if(emailValidate !== undefined){
    const errorEmail = new Error('Email is registered')
    errorEmail.status = 400 
    throw errorEmail
  }

  return await createNewUser(userBody)
}


// recipes
export const getAllRecipesService = async ()=>{

  const existsRecipes = await getAllRecipesDB()
  if(!existsRecipes){
    const errorRecipes = new Error("recipes not founds")
    errorRecipes.status = 404
    throw errorRecipes
  }

  return existsRecipes
}


export const getRecipeService = async (idRecipeCTR)=>{
  if(isNaN(idRecipeCTR)){
    const errorRecipeID = new Error('Invalid recipe ID')
    errorRecipeID.status = 400
    throw errorRecipeID
  }

  const recipeDB =  await getRecipeDB(idRecipeCTR)

  if(!recipeDB){
    const errorRecipeDB = new Error('Recipe not found')
    errorRecipeDB.status = 404
    throw errorRecipeDB
  }

  return recipeDB
}

export const updateRecipeService = async (idRecipeCTR,bodyRecipeCTR)=>{

  if(isNaN(idRecipeCTR)){
    const errorUpdate = new Error('Invalid recipe ID for Update')
    errorUpdate.status = 400
    throw errorUpdate
  }
  const recipeUpdateDB = await patchRecipeDB(idRecipeCTR,bodyRecipeCTR);
  if(recipeUpdateDB === undefined){
    const errorUpdateDB = new Error('Recipe not updated')
    errorUpdateDB.status = 404
    throw errorUpdateDB
  }

  return recipeUpdateDB
}


// foods

export const getFoodsService = async () =>{
  const foodsDB = await getFoodsCategoryDB()
  if(!foodsDB){
    const errorFoods = new Error('Food not found')
    errorFoods.status = 404
    throw errorFoods
  }
  return foodsDB
}

// ingredients

export const getIngredientService = async () =>{
  const ingredientsDB = await getIngredientsDB();
  if(!ingredientsDB){
    const errorIngredient = new  Error ('Ingredient not found')
    errorIngredient.status = 404 
    throw errorIngredient 
  }

  return ingredientsDB
}
