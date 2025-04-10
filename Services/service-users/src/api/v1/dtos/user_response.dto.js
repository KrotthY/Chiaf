
export const userResponseDB = (dataRow) =>{

  return {
    id: dataRow.id_user,
    name: dataRow.user_name,
    email: dataRow.user_email,
    subscription:dataRow.user_subscription,
    createAt: new Date(dataRow.created_at).toLocaleDateString()
  }
}