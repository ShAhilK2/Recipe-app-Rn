import {ENV} from "./src/config/env.js";

export default {
  out: './src/db/migrations',
  schema: './src/db/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: ENV.DATABASE_URL,
  },
};