const express = require("express")
const authRoutes = express.Router()
const {register, login} = require("../controllers/authController")
const authenticateMiddleware = require("../middleware/authMiddleware")

authRoutes.post("/register", register)
authRoutes.post("/login",login )
authRoutes.get("/checkauth", authenticateMiddleware, (req,res)=>{
    try {
        const user = req.user
        res.status(200).json({
            success:true,
            message:"Authenticated user",
            data:{
                user
            }
        })
    } catch (err) {
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
})


module.exports = authRoutes;