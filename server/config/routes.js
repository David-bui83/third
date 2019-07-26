const managers = require('../controllers/managers');
const path = require('path');

module.exports = app =>{
  app.get('/api/managers',managers.getAll);
  app.get('/api/managers/:id',managers.getOne);
  app.post('/api/managers',managers.new);
  app.put('/api/managers/edit/:id',managers.update);
  app.delete('/api/managers/:id',managers.destroy);
  app.all('*',(req,res)=>{
    res.sendFile(path.resolve('./public/dist/public/index.html'));
  });
}