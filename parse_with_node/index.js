const Parse = require("parse/node");

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = "Al7ZSSh904iWQjRfzaz9A0EzFS7YSFLE6xdbvOgm";
const PARSE_HOST_URL = "https://parseapi.back4app.com/";
const PARSE_JAVASCRIPT_KEY = "eJOVDvWj1oZir3Fknppz04FQWEWjXeX6Vg3GvDuk";
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

// let allCountersQuery = new Parse.Query("Counter");
// allCountersQuery.include("creator");
//
// allCountersQuery.find().then((response) => {
//   for (const counter of response) {
//     console.log(counter.get("name"));
//     if (counter.get("creator")) {
//       console.log("name:" + counter.get("creator").get("displayName"));
//       console.log("id:" + counter.get("creator").id);
//
//       // let creatorQuery = new Parse.Query("Account");
//       // creatorQuery.get(counter.get("creator").id);
//       //   etc.
//     }
//   }
// });

async function login() {
  let user = await Parse.User.logIn("mircea", "pass");
  console.log(user.get("name"));
  console.log(Parse.User.current());
}

Parse.User.current().get("userProfile").get("name");

login();
