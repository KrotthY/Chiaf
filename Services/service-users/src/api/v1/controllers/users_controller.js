import { getAllRecipesService, getRecipeService, getUserByID, postCreateUser, updateRecipeService } from "../../../core/services/user_service.js"
import { recipesAllResponseDTO, userResponseDto } from "../dtos/users.dto.js"

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
    await updateRecipeService(req.params.id, req.body);
    res.status(200).json({success:true, message:"recipe successfully updated"})
  } catch (error) {
    next(error)
  }
}

