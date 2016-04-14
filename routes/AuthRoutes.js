import db from './server'
import jwt from 'jsonwebtoken'
import passwordService from '../services/passwordService'
import crypto from 'crypto'

const generateSalt = (numBytes) => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(numBytes, (error, buf) => {
      if (error) return reject(error)
      resolve(buf.toString('hex'))
    })
  })
}

export default const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    generateSalt(32).then((salt) => {
      crypto.pbkdf2(password, salt, 64000, 256, 'sha256', (err, key) => {
        if (err) return reject(err)
        resolve({ salt, hash: key.toString('hex') })
      })
    })
  })
}

export default const isPasswordSame = (hash, salt, plaintext) => {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plaintext, salt, 64000, 256, 'sha256', (err, key) => {
      if (err) return reject(err)
      resolve(key.toString('hex') === hash)
    })
  })
}



export default function (router) {
  router.post('/authenticate', function (req, res) {
    db.user.findOne({where: {username: req.body.username}}).then((user) => {
      // Plain text passwords? TERRIBLE IDEA
      if (user) {
        passwordService.isPasswordSame(user.password, user.salt, req.body.password).then((result) => {
          if (result) {
            let token = jwt.sign(user.dataValues, config.api_secret, {
              expiresIn: 60 * 60
            })
            return res.json({success: true, username: user.username, token})
          }
          return res.json({success: false, message: 'Authentication Failed!'})
        })
      } else {
        return res.json({success: false, message: 'Authentication Failed!'})
      }
    })
  })
}
