import pkg from 'pg';
const { Pool } = pkg;

// database connection setup
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: parseInt(process.env.DATABASE_PORT || '5432', 10), // Convert port to number
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

export default pool;
