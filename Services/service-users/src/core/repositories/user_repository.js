import { db } from "../../infra/database/connection.js";

export const getAllUsers = async ()=>{
  try {
    const result = await db.query("select * from users");
    const rows = result.rows
    return rows
    
  } catch (error) {
    console.error("Error query", error)
  } 

}

