/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var mobilePush = require("mobile-push");
return mobilePush.createGroup("123", "android", "conf1");			