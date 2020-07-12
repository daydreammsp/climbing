const Main = require('./main').default




module.exports = app => {
  app.use('/Main', Main)
  
}