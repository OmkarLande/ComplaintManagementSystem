const jwt = require('jsonwebtoken'); // Import the jwt library
require('dotenv').config()

exports.auth = async (req, res, next) => {
    try {
        // Token extraction
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer", "").trim(); // Fix the typo in "Authorization"
        console.log("Token Extracted");
        
        // Token missing
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Token is missing',
            });
        }
        
        // Verify token
        try {
            const decode = await jwt.verify(token, process.env.JWT_SECRET); // Add 'await' here
            console.log(decode);
            req.user = decode;
        } catch (error) {
            // Token issue
            return res.status(401).json({
                success: false,
                message: 'Token is not valid',
            });
        }
        
        next();
        console.log("1");
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Error while token validation',
        });
    }
};
