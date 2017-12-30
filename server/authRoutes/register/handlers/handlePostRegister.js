const User = require('../../../models/user.js')

const handlePostRegister = (req, res) => {
  const { email, password } = req.body
  console.log(req.body)

  const account = new User({ email })

  User.register(account, password, err => {
    if (err) {
      return res.json({ success: false, msg: 'Nombre de usuario ya existe.' })
    }
    res.json({ success: true, msg: 'Exito, nuevo usuario creado.' })
  })
}

module.exports = handlePostRegister
