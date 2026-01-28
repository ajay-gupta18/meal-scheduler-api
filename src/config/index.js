export const config =  {
  port: process.env.PORT || 5000,
  dbUrl: process.env.DB_URI || '',
  accessTokenSecret: process.env.JWT_SECRET || 'your_jwt_secret_key',
  accessTokenExpire: process.env.JWT_EXPIRE || '7d',
  refreshTokenExpire: process.env.REFRESH_TOKEN_EXPIRE || '30d',
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || 'your_refresh_token_secret_key',
};
