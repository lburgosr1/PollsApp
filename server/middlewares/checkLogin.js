const checkLogin = (req, res, next) => {
  const { logged, duplicationChecking } = req.body
  if (duplicationChecking === 'login') {
    if (logged) next()
    else res.status(403).send({error: 'Debes registrarte para votar!'})
  } else {
    next()
  }
}

module.exports = checkLogin
