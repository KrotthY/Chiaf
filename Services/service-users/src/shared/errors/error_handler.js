
export const errorHandler = (err,req,res,next)=>{

  const errorStatus = err.status || 500
  const errorMsg = err.message || 'Internal server error'

  res.status(errorStatus).json({success:false,status:errorStatus ,message: errorMsg});
}