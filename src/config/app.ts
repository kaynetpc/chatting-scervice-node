import dotenv from 'dotenv';
dotenv.config();

const getEnv = (name: string, defaultValue = '') => {
  return process.env[name] || defaultValue;
};

export const AppConfigs = {
  SERVER_PORT: getEnv('SERVER_PORT', '3000'),
  APP_ROUTE: getEnv('APP_ROUTE', '/api'),
  DATABASE_URL: getEnv('DATABASE_URL', 'mongodb://localhost:27017/midland'),
  ACCESS_TOKEN_SECRET: getEnv('ACCESS_TOKEN_SECRET', 'ghjbjbh'),
  TOKEN_SECRET_LIFE: getEnv('TOKEN_SECRET_LIFE', '20m'),
  REFRESH_TOKEN_SECRET: getEnv('REFRESH_TOKEN_SECRET', 'ghjbjbh'),
  REFRESH_TOKEN_SECRET_LIFE: getEnv('REFRESH_TOKEN_SECRET_LIFE', '45m'),
  COOKIE_PARSER_KEY: getEnv('COOKIE_PARSER_KEY', 'c')
};
