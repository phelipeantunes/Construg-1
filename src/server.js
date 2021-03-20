'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mysql = require('mysql');
const fs = require("fs");

var conn = mysql.createConnection({
    host: "pesquisamysql.mysql.database.azure.com",
    user: "rootpesquisa", password: "{pesquisa@123}",
    database: "{your_database}",
    port: 3306,
    ssl: {
        ca: fs.readFileSync("{ca-cert filename}")
    }
});

// router.get('/', (req, res) => {
//     res.status(200).send("AAAAAAAAAAA! OUTRO COMMIT TESTE");
// });

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);
