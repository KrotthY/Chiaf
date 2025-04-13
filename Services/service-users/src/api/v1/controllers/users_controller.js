import { getAllRecipesService, getFoodsService, getIngredientService, getRecipeService, getUserByID, postCreateUser, updateRecipeService } from "../../../core/services/user_service.js"
import { getFoodsCategoryDTO, getRecipeIngredientsDTO, recipesAllResponseDTO, userResponseDto } from "../dtos/users.dto.js"

// users
export const getUsers = async (req,res,next)=>{
  try{
    const userId = parseInt(req.params.id,10)
    const userResponse  = await getUserByID(userId)
    res.status(200).json({ success:true, data:userResponseDto(userResponse)})
  }catch (error) {
    next(error)
  }
}

export const postNewUser = async(req,res,next)=>{
  try {
    const userCreated = await postCreateUser(req.body)
    res.status(200).json({success:true,data:userCreated})
  } catch (error) {
    next(error)
  }
}

// recipes
export const getAllRecipes = async (req,res,next)=>{
  try {
    const recipesResponse = await getAllRecipesService()
    res.status(200).json({success:true, data: recipesAllResponseDTO(recipesResponse)})
  } catch (error) {
    next(error)
  }
}

export const getRecipeById = async (req,res,next) =>{
  try {
    const recipeID = parseInt(req.params.id,10)
    const recipeResponse =await getRecipeService(recipeID)
    res.status(200).json({success:true, data:recipesAllResponseDTO(recipeResponse)})
  } catch (error) {
    next(error)
  }
}

export const patchRecipe = async(req,res,next)=>{
  try {
    const recipeResponse = await updateRecipeService(req.params.id, req.body);
    res.status(200).json({success:true, message:"recipe successfully updated",data:recipeResponse})
  } catch (error) {
    next(error)
  }
}

//Foods

export const getAllFoods = async (req,res,next) =>{
  try {
    const foodsResponse = await getFoodsService();
    res.status(200).json({success:true,data:getFoodsCategoryDTO(foodsResponse)})
  } catch (error) {
    next(error)
  }
}


//ingredients

export const getIngredientRecipe = async (req,res,next) =>{
  try {
    const ingredientsResponse = await getIngredientService();
    res.status(200).json({success:true, data:getRecipeIngredientsDTO(ingredientsResponse)})
  } catch (error) {
    next(error)
  }
}


