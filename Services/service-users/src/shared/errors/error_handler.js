
export const errorHandler = (err,req,res,next)=>{
  console.error('💥 Error validate:', err);
  res.status(500).json({ message: 'Internal server error' });
}