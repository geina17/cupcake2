// * Inside the `connection.js` file, setup the code to connect Node to MySQL.

// * Export the connection.
//node depen
var dolphin = require('mysql');
var conn;

//for heroku deploy
if (process.env.JAWSBD_URL) {
    conn = dolphin.createConnection(process.env.JAWSBD_URL);
} else {
    conn = dolphin.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'baked'
    });
}

//export the connection
module.exports = conn;