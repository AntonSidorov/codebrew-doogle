"use strict";

import * as express from "express";
import * as http from "http";
import * as fs from "fs";
import * as admin from "firebase-admin";
const TelstraMessaging = require("Telstra_Messaging");
import { Helper } from "./classes/helper";

let app = express(),
  port = 5001,
  url = "";

let serv: admin.ServiceAccount = {
  projectId: "open-aid-2",
  privateKey:
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDtGLwHBLeIUFa7\nXELOb2rmQ0IgyAZfH8PH+8zexshRH6ztZ6iF03ULUHIL9EEJ0kwAbWmaB3RFLyk3\n9BNfe2E8mao3b1Mo+2oJE0b3ZQgZ1JEQpTWfCbjzGBjXsMSp/rPRCnSEE2aibla6\n9CRZt0dRAoxWR/GSdLz5bTADalz64d0Nd8iZeajrWubSBmEUlMU03c86anTUotNv\nJP1SWLC7VCRp/G1nFZ4gLUBXmhDIUq5rTD3DvdKVvl2gclYcsotbIMIB/jesOI7E\nhsSvcu8Kx5H2jF+87r1y6Fbo1B2BW5FkBG+VDOIBglHcKm8H3r8pNuPrpRjGVc+Q\nxwtnbXdTAgMBAAECggEAEdg1Op//wjottO9GNexL0uXIAdicJiepYBFTA4dZh0WH\nidyt4die7AmTc9Pf20HhJ30UoBukhBp/Ey+DD8Ik+N8l4QM3cpOtkN5LDo6jk/Ic\nMvEEPqKIMX+kSwOKYbMCTJ7pUxF0vY/pZiu+2qPBMdcrwcirZVb07B7sKK2mLtmQ\n4y4yi7BJ2CSRMlZ5RT3rZtp6YBIGGdfBHKz5cS2IEOpcO3Yw12Ozhx3Micxtd8gB\nLysBgR10kJe+4S5R4FvKSw/o2utXLtwzvQuUyiz761uAjCWRXrGEJddBJ3V/Pnoo\nC/quc5Sm3rANituZ4yWioYwy70fasQHY5nQ0TQ17WQKBgQD+lSxiESgNT+Cw2gmz\nBtNAcj5hDKejfXk2pLvAsB9CVKEcwkjUIeicSD7ccKYAugP28g4kP8jwdpjj1ja/\nFoads3fGsB5lOcjLzA+v0rse4Exe/uaFTygQqvN+5g6fz4pnMcGIloy9znJY+1li\n+rLQHBDhmWMvwIoNgYyw9KlE6wKBgQDuaqPnxWN1v9ag1ktu+7XpTbkID8sqM4pO\nRMMssTmZqcJBTM0yKldI2mEpF/muG8byRKGi3UD112dQK2Flhw7oclJWfgFyyJ+i\nhRLKwro/Xw+JPpcPiRuREtQEUqonnmKqxe7NB7vHH7vAXO34Dou6XNnLOtXUHSYz\nIqjI4SudOQKBgQC6KvIi4LLuUSxZh4iyP1p6dVDCfZOVjer3F64o8WJaijKrKjRB\n1G4a4wX9A++Q9nZxvn6y6WYS2ldhvUOZp2pXpmb/h8kicwgwaBBMngiyQon2qeZ/\nM+xzi9+2O5wUJ5vpbMw/CwDuyCp8gYnTRMtAPlXl89pBkEYkLElrGe8ycwKBgBY/\n1XP3s8R1Vq5D0V5WFy/ilPXvo2IY1Ttgp2YwU9PHR92YMT4RPXwLBS40kpRw+yv4\nw6zTQRCwPW/53GkBJZ8DrDNuJuxzVJJyIMLTUVZApM6GDMriXLQ5MZgFruNroIGX\nXyW7Jwb6KydUhNC1aszFhX21y+azobD79wxoFw3hAoGBAJCvl8t1HIs5TxfpRMmc\nJOrc8w1KfnKzothY7I2bWl6+HnqGqz988XJFI63RUMgBCr9iCxnVS0vd8Hq6Pzr4\nvG36vbP8DqNt5G26PnzYkWNqFc9JlCN2dSMVQ3coh7+iPXRdwKw2qCqh+k9UKabH\n4Kqf/2xfBWK84agFMkCabUg4\n-----END PRIVATE KEY-----\n",
  clientEmail: "firebase-adminsdk-pd8q5@open-aid-2.iam.gserviceaccount.com"
};

const defaultApp = admin.initializeApp({
  credential: admin.credential.cert(serv),
  databaseURL: "https://open-aid-2.firebaseio.com/"
});

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
//auth.accessToken = "AAV7XCRH76TEL0HTPdtkgQxUQkX4";

var api = new TelstraMessaging.AuthenticationApi();
var apiInstance = new TelstraMessaging.MessagingApi();

var clientId = "DiL8SNygmWKsqGPNAPhG3POhXJGhG1GG"; // String |

var clientSecret = "0NGsHcHScxgwAGOa"; // String |

var grantType = "client_credentials"; // String |

let token = "";
var authToken = api.authToken(
  clientId,
  clientSecret,
  grantType,
  (error, data, response) => {
    if (error) throw {};
    token = data.access_token;
  }
);

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
  if (!token) {
    res.send("Can't send an SMS, invalid token");
    return;
  }
  console.log(token);
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
  console.log("Got a message:" + JSON.stringify(userInput));
  let userNeeds = [];
  for (let i = 0; i < userInput.length; i++) {
    if (
      userInput[i].match(
        /(medical|sanitation|water|education|agriculture|material|emergency)/gi
      ) &&
      userNeeds.indexOf(userInput[i].toUpperCase()) === -1
    ) {
      userNeeds.push({
        neededAidType: userInput[i].toUpperCase(),
        specifications: ""
      });
      while (
        i + 1 < userInput.length &&
        userInput[i + 1].match(
          /(medical|sanitation|water|education|agriculture|material|emergency)/gi
        ) === null &&
        i < userInput.length
      ) {
        userNeeds[userNeeds.length - 1].specifications +=
          userInput[i + 1] + " ";
        i++;
      }
    }
  }
  if (userNeeds.length === 0) {
    payload.body = "🅱️ad luck. we cant help you 😂";
  } else {
    payload.body = "Thanks for your contribution 😎";
  }

  console.log(token);
  if (!token) {
    res.send("Can't send an SMS, invalid token");
    return;
  }
  payload.to = req.body.from;
  apiInstance.sendSMS(payload, callback);
  console.log(userNeeds);
  defaultDatabase
    .ref("communities/0/requests")
    .push()
    .set({
      description: userNeeds
        .map(v => `${v.neededAidType}: ${v.specifications}`)
        .join("\r\n"),
      peopleAffected: 100 + Math.floor(Helper.randomNumber(0, 13)),
      geoData: {
        lat: -37.797705 + Helper.randomNumber(-0.0005, 0.0005),
        long: 144.958773 + Helper.randomNumber(-0.0005, 0.0005),
        radius: 33
      },
      name: "SMS Request",
      urgency: Helper.randomItem(["LOW", "MEDIUM", "HIGH"]),
      workersRequested: Math.floor(Helper.randomNumber(5, 10))
    });
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
