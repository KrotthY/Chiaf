import { getAllUsers } from "../../../core/repositories/user_repository.js"

export const getUsers = async (req,res)=>{

  const responseQuery  = await getAllUsers()
  res.json({message:responseQuery})
}

