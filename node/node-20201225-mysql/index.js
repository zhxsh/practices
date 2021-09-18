var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '192.168.13.71',
    port: '32000',
    user: 'root',
    password: 'introcks1234',
    database: 'ifaas_community_sec',
});

connection.connect();

connection.query('select * from t_label', function(error, results, fileds) {
    if(error) {
        console.error(error);
    }

    console.log(results[0].label_name);
})