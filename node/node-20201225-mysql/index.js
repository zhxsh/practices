var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '',
    port: '',
    user: 'root',
    password: '',
    database: '',
});

connection.connect();

connection.query('select * from t_label', function(error, results, fileds) {
    if(error) {
        console.error(error);
    }

    console.log(results[0].label_name);
})