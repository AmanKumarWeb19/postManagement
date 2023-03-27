const jwt = require("jsonwebtoken");
const auth = function (req, res, next) {
  let token = req.headers.authorization;
  jwt.verify(token, "masai", function (err, decoded) {
    if (decoded) {
      req.body.userId = decoded.userId;
      next();
    } else {
      res.send("Login First!!!!!!!!!");
    }
  });
};

module.exports = {
  auth,
};
