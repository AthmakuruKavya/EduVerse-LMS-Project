const jwt = require("jsonwebtoken")

//verifying the token
const verifyToken = (token,secretKey) =>{
    return jwt.verify(token,secretKey)
}

const authenticate = (req, res, next) =>{
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).jsob({
            success : false,
            message : "User is not authenticated"
        })
    }

    const token = authHeader.split(' ')[1];
    const payload = verifyToken(token,"lms-project")
    req.user = payload
    next()
}
module.exports = authenticate;