import bcrypt from 'bcrypt'

export const hashInput = (password) =>
  bcrypt.hash(password, 10);

export const compareInput = (password, hash) =>
  bcrypt.compare(password, hash);