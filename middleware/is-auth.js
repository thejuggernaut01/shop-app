module.exports = (req, res, next) => {
  if (req.session.isLogged) {
    return next();
  }
  return res.redirect("/login");
};
