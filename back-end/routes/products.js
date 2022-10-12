const express=require("express")
const router=express.Router();
const{getProducts} = require("../controllers/productController")
router.route("/productos").get(getProducts)
module.exports=router;