const {Pool} = require('pg')

const pool  = new Pool({
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: process.env.port
})
const connect = async () => {
    await pool.connect((err, client, release) => {
        if (err) {
            return console.error('Error acquiring client', err.stack)
        }
    })
}

connect();

module.exports = pool;