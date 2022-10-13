const authorize = (req,res,next) => {
    let {user, password} = req.query; 
    if (user === 'john' && password === '5x67q') {
        req.user = 'aftab';
        next();
    } else {
        res.status(401).send('Access Denied!')
    }
}

module.exports = authorize