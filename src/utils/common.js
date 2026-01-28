import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const hashInput = (password) =>
  bcrypt.hash(password, 10);

const compareInput = (password, hash) =>
  bcrypt.compare(password, hash);

const verifyJwt = (token, localSecret) => {
  jwt.verify(token, localSecret);
}
export {
  hashInput, 
  compareInput,
  verifyJwt
}