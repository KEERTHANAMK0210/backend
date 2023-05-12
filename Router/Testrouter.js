const express=require("express")
const bookdata = require("../Contoler/Bookdata")
const deltbook = require("../Contoler/Deletebook")
const bookget = require("../Contoler/Getbook")

const login = require("../Contoler/Login")
const sign = require("../Contoler/Signup")

const protect = require("../middleware/Tokenverification")
const Eachbook = require("../Contoler/Viewbook")
const bookedit = require("../Contoler/update")
const clientdata = require("../Contoler/Clientdata")
const clientget = require("../Contoler/Getclient")

const clientedit = require("../Contoler/Editclient")
const clientview = require("../Contoler/Viewclient")
const deltclient = require("../Contoler/Deleteclient")
const customerdata = require("../Contoler/Customerdata")
const custget = require("../Contoler/GetCustomer")
const custedit = require("../Contoler/EditCustomer")
const customerview = require("../Contoler/ViewCustomer")
const deltcust = require("../Contoler/DeleteCustomer")
const teamdata = require("../Contoler/TeamMemberdata")
const tmget = require("../Contoler/getTm")
const tmedit = require("../Contoler/EditTm")
const tmview = require("../Contoler/ViewTm")
const delttm = require("../Contoler/DeleteTm")
const orderdata = require("../Contoler/OrderData")
const orderget = require("../Contoler/GetOrder")
const orderedit = require("../Contoler/Editorder")
const orderview = require("../Contoler/ViewOrder")
const deltorder = require("../Contoler/DeleteOrder")
const addtocart = require("../Contoler/AddToCart")
const getcart = require("../Contoler/ViewCart")

const userLogin = require("../Contoler/UserLogin")
const removefromcart = require("../Contoler/Deletecart")
const UserReg = require("../Contoler/UserRegistration")






const router=express.Router()
const middleware=[protect]

//router.route("/token").get(login)

//router.route("/signup").post(sign)

router.route("/login").post(login,middleware)

router.route("/book").post(bookdata)
//get book data
router.route("/getbookdata").get(bookget)
router.route("/deletebook/:id").delete(deltbook)
router.route("/Eachbook/:id").get(Eachbook)
router.route("/edit/:id").put(bookedit)

//client

router.route("/client").post(clientdata)
router.route("/getclient").get(clientget)
router.route("/editclient/:id").put(clientedit)
router.route("/view/:id").get(clientview)
router.route("/deleteclient/:id").delete(deltclient)

//customer

router.route("/customer").post(customerdata)
router.route("/getcustomer").get(custget)
router.route("/editcust/:id").put(custedit)
router.route("/custview/:id").get(customerview)
router.route("/custdelete/:id").delete(deltcust)


//teammember

router.route("/member").post(teamdata)
router.route("/getmember").get(tmget)
router.route("/editmember/:id").put(tmedit)
router.route("/viewmember/:id").get(tmview)
router.route("/deletemember/:id").delete(delttm)

//Order
router.route("/order").post(orderdata)
router.route("/getorder").get(orderget)
router.route("/editorder/:id").put(orderedit)
router.route("/vieworder/:id").get(orderview)
router.route("/deleteorder/:id").delete(deltorder)




router.route('/userregistration').post(UserReg,middleware)
router.route('/userlogin').post(userLogin,middleware)
router.route('/addtocart').post(addtocart)
router.route('/getcart').post(getcart)
router.route('/deletecart').put(removefromcart)







module.exports=router