const mongoose = require('mongoose');
const Managers = mongoose.model('Managers');

module.exports = {
  getAll:(req,res)=>{
    Managers.find({},(err,data)=>{
      if(err){
        res.json({message:'error',data:err});
      }else{
        res.json({message:'success',data:data});
      }
    }).sort({type:1});
  },
  getOne:(req,res)=>{
    console.log(req.params.id)
    Managers.findOne({p_id:req.params.id},(err,data)=>{
      console.log('asfsdfasd',data);
      if(err){
        res.json({message:'error',data:err});
      }else{
        res.json({message:'success',data:data});
      }
    });
  },
  new:(req,res)=>{
    Managers.create(req.body,(err,data)=>{
      if(err){
        res.json({message:'error',data:err});
      }else{
        res.json({message:'success',data:data});
      }
    });
  },
  update:(req,res)=>{
    Managers.findByIdAndUpdate({_id:req.params.id},req.body,{runValidators:true,context:'query'},(err,data)=>{
      if(err){
        res.json({message:'error',data:err});
      }else{
        res.json({message:'success',data:data});
      }
    });
  },
  destroy:(req,res)=>{
    console.log('id from delete: ',req.params.id)
    Managers.findOneAndDelete({p_id:req.params.id},(err,data)=>{
      if(err){
        res.json({message:'error',data:err});
      }else{
        console.log('delete success', data);
        res.json({message:'success',data:data});
      }
    });
  }
}