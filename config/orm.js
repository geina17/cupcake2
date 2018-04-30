// Import (require) `connection.js` into `orm.js`

//    * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//      * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`

//    * Export the ORM object in `module.exports`.

//import node depen
var conn = require('./conn.js');

//connect to mysql
conn.connect(function (err) {
    if (err) {
        console.error('error connecting:' + err.stack);
        return;
    }
    console.log('connected as id' + conn.threadId);
});
function objToSql(ob) {
    // column1=value, column2=value2,...
    var arr = [];
   
    for (var key in ob) {
      arr.push(key + '=' + ob[key]);
    }
   
    return arr.toString();
   }
//method for mysql
var orm = {
    //selectAll
    selectAll: function (table, callback) {
        //run mysql
        conn.query("select * from " + table + ";", function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    //insertONe
    insertOne: function (table, cols, vals, callback) {
        
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += "?, ?";
        queryString += ") ";
        //run mysql
        conn.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    //updateOne
    updateOne: function (table, colVals, condition, callback) {
        //run mysql
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(colVals);
        queryString += " WHERE ";
        queryString += condition;
        //UODATE cakes SET eaten = true WHERE id = 1
        conn.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }
};

//export the orms
module.exports = orm;