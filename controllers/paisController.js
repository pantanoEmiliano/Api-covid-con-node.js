const { json } = require("express")

const paisController = function(req,res){
  pais = JSON.stringify(req.body.search)
  
  link ="https://corona.lmao.ninja/v2/countries/"
   console.log(pais)
res.render("pais")
}
module.exports = paisController;