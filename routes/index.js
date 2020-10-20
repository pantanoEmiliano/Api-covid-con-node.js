var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");
const indexController = require("../controllers/indexController");
const covid = "https://corona.lmao.ninja/v2/countries?yesterday&sort"
const paisController = require("../controllers/paisController")
const nobelController = require("../controllers/nobelController")
/* GET home page. */

router.get("/nobel", nobelController.root)
router.post("/nobel", nobelController.filter)
router.post("/nobelVal", nobelController.val)

router.get("/nobel/:id", nobelController.pais)

router.get("/nobel/country", nobelController.filter)

router.get("/", indexController.root);
//router.get("/pais/:id?",function(req,res){
//  res.render("pais")
//})
//router.post("/pais",paisController)

router.get("/continentes", indexController.continentes)


router.get("/all", indexController.resume )


module.exports = router;
