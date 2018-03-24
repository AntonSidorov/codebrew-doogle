"use strict";

import * as express from "express";
import * as http from "http";
import * as fs from "fs";
var TelstraMessaging = require("Telstra_Messaging");

let app = express(),
  port = 5001,
  url = "";

let sendingInfo = {
// to: "+61404405050",
  to: "+6402111808",
  body: "AIDS IS COMING v2",
  from: "+61412345678",
  validity: 5,
  scheduledDelivery: 1,
  notifyURL: "http://13.210.252.3:5001/response",
  replyRequest: false
};

var defaultClient = TelstraMessaging.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
var auth = defaultClient.authentications["auth"];
auth.accessToken = "GV8fDTOJyg6wlnj9Ta3jSB0rnkt";

var apiInstance = new TelstraMessaging.MessagingApi();

var payload = new TelstraMessaging.SendSMSRequest(); // SendSMSRequest | A JSON or XML payload containing the recipient's phone number and text message. The recipient number should be in the format '04xxxxxxxx' where x is a digit
payload.body = sendingInfo.body;
payload.to = sendingInfo.to;
payload.from = sendingInfo.from;
payload.notifyURL = sendingInfo.notifyURL;

var callback = function(error, data, response) {
  if (error) {
    console.log("---------------------------------------------------");
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
  }
};

//end telstra code

app.set("port", port);
let httpServer = http.createServer(app);

app.use(express.static("static"));
app.use(express.json());

httpServer.listen(port);
httpServer.on("error", err => {
  console.log("dun fucked up");
});

httpServer.on("listening", () => console.log(`Listening on port ${port}...`));

app.get("/", (req, res) => {
  res.send("Hi from the final beta build test!");
});
app.get("/call", (req, res) => {
  apiInstance.sendSMS(payload, callback);
  res.send("Sent SMS");
});

let genHeaders = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin || url);
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
};

app.get("/search", (req, res) => {});

app.post("/response", (req, res) => {
  console.log(JSON.stringify(req.body));
  res.status(200).send();
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
