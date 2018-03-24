"use strict";

import * as express from "express";
import * as http from "http";
import * as fs from "fs";
import * as admin from 'firebase-admin';
const TelstraMessaging = require("Telstra_Messaging");
import { Helper } from './classes/helper';
var serviceAccount = require('./service-account.json');


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://open-aid-2.firebaseio.com/'
});

let app = express(),
  port = 5001,
  url = "";

const defaultApp = admin.initializeApp();

let defaultAuth = defaultApp.auth();
let defaultDatabase = defaultApp.database();



let sendingInfo = {
  to: "+61404405050",
  // to: "+6402111808",
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
auth.accessToken = "6L6XNzEwaxosGHlDLdjFSJxfPNOc";

var apiInstance = new TelstraMessaging.MessagingApi();

var payload = new TelstraMessaging.SendSMSRequest(); // SendSMSRequest | A JSON or XML payload containing the recipient's phone number and text message. The recipient number should be in the format '04xxxxxxxx' where x is a digit
payload.body = sendingInfo.body;
payload.to = sendingInfo.to;
payload.from = sendingInfo.from;
payload.notifyURL = sendingInfo.notifyURL;

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
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
  const fromNumber = req.body.from;
  console.log(req.body);
  let userInput = req.body.body.split(/[ \n\t\\\r\./,-]/gi);
  console.log('Got a message:' + JSON.stringify(userInput));
  let userNeeds = [];
  for (let i = 0; i < userInput.length; i++){
    if (userInput[i].match(/(medical|sanitation|water|education|agriculture|material|emergency)/gi)
      && (userNeeds.indexOf(userInput[i].toUpperCase()) === -1)){
      userNeeds.push({
        neededAidType: userInput[i].toUpperCase(),
        specifications: ""
      });
      while (i + 1 < userInput.length &&
        userInput[i + 1].match(/(medical|sanitation|water|education|agriculture|material|emergency)/gi) === null
              && i < userInput.length){
        userNeeds[userNeeds.length - 1].specifications += userInput[i + 1] + " ";
        i++;
      }
    }
  }
  if (userNeeds.length === 0){
    payload.body = "🅱️ad luck. we cant help you 😂";
    payload.to = req.body.from;
    apiInstance.sendSMS(payload, callback);
  } else { 
    payload.body = "Thanks for your contribution 😎";
    payload.to = req.body.from;
    apiInstance.sendSMS(payload, callback);
  }
  console.log(userNeeds);
  defaultDatabase.ref('communities/0/requests').push().set({
    fromNumber: {
      description: userNeeds,
      peopleAffected: 100 + Math.floor(Helper.randomNumber(0, 13)),
      geoData: {
        lat: -37.797705 + Helper.randomNumber(-0.0005, 0.0005),
        long: 144.958773 + Helper.randomNumber(-0.0005, 0.0005),
        radius: 33
      },
      name: "User Request",
      urgency: getUrgency(),
      workersRequested: Math.floor(Helper.randomNumber(5, 10))
    }
  });
  res.status(200).send();
});

const getUrgency = () => {
  const num = Helper.randomNumber(0,1);
  if (num < 0.3){
    return "LOW";
  } else if (num < 0.6) {
    return "MEDIUM";
  } else {
    return "HIGH";
  }
}
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
