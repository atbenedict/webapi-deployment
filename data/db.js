const knex = require("knex");
const dbase = process.env.DB || "development";

const config = require("../knexfile.js")[dbase];

module.exports = knex(config);
