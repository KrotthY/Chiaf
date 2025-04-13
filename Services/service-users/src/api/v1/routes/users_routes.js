import { Router } from 'express'
import { getAllFoods, getAllRecipes, getRecipeById, getUsers,patchRecipe,postNewUser } from '../controllers/users_controller.js'
import { validateDto } from '../../../shared/middlewares/validate.dto.js';
import { createNewUserDto, UpdateRecipeDto } from '../dtos/users.dto.js';
const router = Router();

// users
router.get('/users/:id',getUsers)
router.post('/users',validateDto(createNewUserDto),postNewUser)

//recipes

router.get('/recipes',getAllRecipes)
router.get('/recipes/:id',getRecipeById)

router.patch('/recipes/:id',validateDto(UpdateRecipeDto),patchRecipe)

//foods

router.get('/foods',getAllFoods)



export default router