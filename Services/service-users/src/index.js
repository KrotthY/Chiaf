import express from 'express'
import config from './shared/config/index.js'
import api_routes from './api/v1/routes/users_routes.js'
import { errorHandler } from './shared/errors/error_handler.js';
const app = express();

app.use(express.json())
app.use('/api/v1',api_routes)
app.use(errorHandler)


app.listen(config.port,()=>{
  console.log("Api Listening: ", config.port)
})
