import pkg from 'pg';
import config from '../../shared/config/index.js';

const { Pool } = pkg

const pool = new Pool({
  connectionString:config.db_url
})

pool.on('connect',()=>{
  console.log('Connected to postgres')
})

pool.on('error',(err)=>{
  console.error('DB Error: ',err)
  process.exit(-1);
})

export const db = {
  query:(text, params) => pool.query(text,params),
  pool,
}

