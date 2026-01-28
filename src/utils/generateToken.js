import jwt from "jsonwebtoken";
import { config } from "../config/index.js";

const {
  accessTokenSecret,
  accessTokenExpire,
  refreshTokenExpire,
  refreshTokenSecret,
} = config;

const generateAccessToken = (userId) => {
  return jwt.sign({ userId }, accessTokenSecret, {
    expiresIn: accessTokenExpire,
  });
};
const generateRefreshToken = (userId) => {
  return jwt.sign({ userId }, refreshTokenSecret, {
    expiresIn: refreshTokenExpire,
  });
};

export { generateAccessToken, generateRefreshToken };
