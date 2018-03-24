"use strict";

import * as express from "express";
import * as http from "http";
import * as fs from "fs";
let app = express(),
  port = 5001,
  url = "";

app.set("port", port);
let httpServer = http.createServer(app);

app.use(express.static("static"));

httpServer.listen(port);
httpServer.on("error", err => {
});

httpServer.on("listening", () => console.log(`Listening on port ${port}...`));

app.get("/", (req, res) => {
  res.send("Hi from the final beta build test!");
});

let genHeaders = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin || url);
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
};

app.get("/search", (req, res) => {
});

// https://www.npmjs.com/package/telstra-messaging

// app.get("/phoneactivate", function(req, res) {
//   genHeaders(req, res);
//   let user = req.query.userid,
//     code = req.query.code;
//   if (!user || !code) res.status(400).send("Bad request");
//   else {
//     let result = firebase.activatePhone(user, code);
//     res.status(200).json(result);
//   }
// });

// app.get("/checkemail", function(req, res) {
//   genHeaders(req, res);
//   var email = req.query.email;
//   if (!email) res.status(400).send("Bad request");
//   else {
//     let result = firebase.checkEmail(email);
//     res.status(200).json(result);
//   }
// });