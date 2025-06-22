import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import {ENV} from "../config/env.js";
import * as schema from "../db/schema.js"

const sql = neon(ENV.DATABASE_URL);

const db = drizzle(sql,{schema});
