const API_KEY = process.env.API_KEY;

function authenticate(req, res, next) {
console.log(API_KEY)
  if (req.headers['api-key'] === API_KEY) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
}

module.exports = authenticate;