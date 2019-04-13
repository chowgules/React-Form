var mysql = require("mysql");
var express = require("express");
var App = express();
var bodyparser = require("body-parser");

App.use(bodyparser.json());

var con_object = {
    host: "localhost",
    user: "root",
    password: "",
    database: "customer"
};

var con = mysql.createConnection(con_object);


con.connect(function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log("connected to database");
    }
});

App.post("/", function (req, res) {
    console.log("requested server to post data.");
    console.log(req.body);

    res.writeHead(200, { "Content-Type": "plain/text" });
    res.write("Thanks for posting data.");
    res.end();

    var name = req.body.name;
    var ph_no = req.body.ph_no;

    var sql_query = "insert into customer (name, ph_no) values ('" +
        name +
        "','" +
        ph_no +
        "');";

    con.query(sql_query, function (error, data) {
        if (error) {
            console.log(error);
        } else {
            console.log(JSON.stringify(data));
        }
    });

});


App.get('/', function (req, res) {
    var sql_query = "select * from customer;";
    console.log("running select query");
    con.query(sql_query, function (error, data) {
        if (error) {
            console.log(error);
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(data));
            res.end();
        }
    });
});


App.listen(8010, function () {
    console.log('Server online');
});
