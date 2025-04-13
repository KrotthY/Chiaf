import { db } from "../../infra/database/connection.js";

//users db
export const getDataUserByID = async (userId)=>{
  const querySelect = `Select usr.id_user , usr.name as user_name , usr.email as user_email, 
  sub.name as user_subscription, usr.created_at
  from users usr join subscriptions sub on(usr.subscription_id = sub.id_subscription) where usr.is_active = true and usr.id_user = $1`
  const { rows } = await db.query(querySelect,[userId]);
  return rows[0]
}

export const validateEmail = async(userEmail)=>{
  const querySelect = `select id_user from users where email = $1`
  const { rows } = await db.query(querySelect,[userEmail.toLowerCase()])
  return rows[0]
}

export const createNewUser = async (data) => {
  const queryInsert = `INSERT INTO users (name,email,password)
  VALUES($1,$2,$3)
  RETURNING id_user
  ;`;
  const {rows} = await db.query(queryInsert,[data.user_name,data.user_email.toLowerCase(),data.user_password])
  return rows[0]
}


// recipes db

export const getAllRecipesDB = async ()=>{
  const querySelect = `select
  r.id_recipe, r.name as recipe_name, r.description ,r.score , r.estimated_time, r.calories, r.difficulty_level , a.id_author, a.name as author_name,a.score_total_recipes,r.created_at   
  from recipes r join authors a on(r.author_id = a.id_author);`
  const { rows } = await db.query(querySelect)
  return rows
}

export const getRecipeDB = async (idRecipeSrc) =>{
  const querySelect = `select
  r.id_recipe, r.name as recipe_name, r.description ,r.score , r.estimated_time, r.calories, r.difficulty_level , a.id_author, a.name as author_name,a.score_total_recipes,r.created_at   
  from recipes r join authors a on(r.author_id = a.id_author) where r.id_recipe = $1`
  const { rows } = await db.query(querySelect,[idRecipeSrc])
  return rows
}

export const patchRecipeDB = async (idRecipeSRC,data) =>{
  const queryUpdate = `update recipes
  set name=$2,description=$3,estimated_time=$4,calories=$5,difficulty_level=$6 
  where id_recipe = $1
  RETURNING id_recipe;`
  const { rows } = await db.query(queryUpdate,[idRecipeSRC,data.recipe_name,data.recipe_description,data.recipe_estimated_time,data.recipe_calories,data.recipe_difficulty_level])
  return rows[0]
}



// Foods

export const getFoodsCategoryDB = async() =>{
  const querySelect = `select fst.id_food_subtype,fst.name as food_category, ft.name as name_food_type, img.url  
  from  food_types ft 
  join food_subtypes fst
  on(ft.food_subtype_id = fst.id_food_subtype ) join images img on(fst.id_food_subtype = img.food_subtype);`;
  const  { rows } = await db.query(querySelect);
  return rows;
}


// Ingredient
export const getIngredientsDB = async () =>{
  const querySelect  = `select ft.name ,i.quantity ,r.name  as  recipe_name, r.description, r.estimated_time, r.score, r.calories, r.difficulty_level , um.abbreviation
  from ingredients i  
  join recipes r on(i.recipe_id = r.id_recipe)
  join unit_measurements um on(i.unit_mst_id = um.id_unit_mst) 
  join food_types ft on(ft.id_food_type = i.food_type_id)
  where r.id_recipe = 1;;`
  const { rows } = await db.query(querySelect)
  return rows
}