import { getDataUserByID } from "../../../core/repositories/user_repository.js"
import { userResponseDB } from "../dtos/user_response.dto.js"

export const getUsers = async (req,res,next)=>{
  
  try{
    const userId = parseInt(req.params.id,10)
    if(isNaN(userId)){
      return res.status(400).json({message: 'Invalid user ID'})
    }
  
    const userDataResponse  = await getDataUserByID(userId)
    if(!userDataResponse){
      return res.status(404).json({message:'User not found'})
    }

    const userResponseDBFormat = userResponseDB(userDataResponse)

    res.json(userResponseDBFormat)

  }catch (error) {
    next(error)
  }

}

