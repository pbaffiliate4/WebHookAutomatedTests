/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var twitter = require("twitter");
var callbackUrl = "http://wwww.someCallbackURL.com";
//tokens are optional params.
var tokens = {
"consumerKey": "yourConsumerKey",
"consumerSecret": "yourConsumerSecret"
};
  
var response = twitter.getRequestToken(callbackUrl);
return response;   							