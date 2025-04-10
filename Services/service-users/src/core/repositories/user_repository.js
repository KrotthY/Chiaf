import { db } from "../../infra/database/connection.js";

export const getDataUserByID = async (userId)=>{
  const query = `Select usr.id_user , usr.name as user_name , usr.email as user_email, 
  sub.name as user_subscription, usr.created_at
  from users usr join subscriptions sub on(usr.subscription_id = sub.id_subscription) where usr.is_active = true and usr.id_user = $1`
  try {
    const { rows } = await db.query(query,[userId]);
    return rows[0]
    
  } catch (error) {
    console.error("[UserRepository] Error fetching user data:", error)
    throw error
  } 

}

