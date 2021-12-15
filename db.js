const { Sequelize } = require('sequelize');
// const Pool = require('pg').Pool
// const pool = new Pool({
//     user: 'postgres',
//     password: 'olegbas',
//     host: 'localhost',
//     port:5432,
//     database: 'testDb'
// })

const sequelize = new Sequelize('testDb', 'postgres', 'olegbas', {
    host: 'localhost',
    dialect: 'postgres'
});

// module.exports = pool
module.exports = sequelize
