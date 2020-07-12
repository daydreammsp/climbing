const { Pool, Client } = require('pg')
const pool = new Pool()
require('dotenv').config()
const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:5432/climbing`;
const client = new Client({
    connectionString: connectionString
});

client.connect();

module.exports = {
  query: (text, params) => client.query(text, params),
}