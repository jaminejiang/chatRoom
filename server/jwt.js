let jwt = require("jsonwebtoken");
let JWT_SECRET = "jm21";

function generateToken(user) {
    //1. Dont use password and other sensitive fields
    //2. Use fields that are useful in other parts of the
    //app/collections/models
    var u = {
        name: user,

    };
    return token = jwt.sign(u, JWT_SECRET, {
        expiresIn: 60 * 60 * 24 // expires in 24 hours
    });
}

function decodeToken(token) {
    var result = null;
    jwt.verify(token, JWT_SECRET, function(err, decoded) {
        if(!err) {
            result = decoded.name;
        }
    });
    return result;
}

module.exports = {
    generateToken: generateToken,
    decodeToken: decodeToken
}