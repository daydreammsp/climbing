import Router from 'express-promise-router'
import { query } from '../DataBase'

const router = new Router()

export default router

router.get('/', async (req, res) => {   
  //console.log(req)
     const { rows } = await query('select public.test1($1);', [1])
     console.log('in call', rows[0])
     res.send(rows[0])
   })