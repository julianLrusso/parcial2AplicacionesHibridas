import jwt from "jsonwebtoken";

function authorization (req, res, next) {
    try {
        const token = req.headers['auth-token'] || '';
        req.user = jwt.verify(token, 'CLAVE_SECRETA');
        next()
    } catch (e) {
        res.status(401).json({
            message: 'Unauthorized - ' + e.message
        });
    }
}

export {
    authorization
}