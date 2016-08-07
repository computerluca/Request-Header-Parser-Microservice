var express = require('express');
var app = express();
var getIP = require('ipware')().get_ip;

app.get("/",function(req,resp){
    /* <h1>I can get the IP address, language and operating system for my browser</h1> */


    var ipInfo = getIP(req);
   var user_agent = 'User-Agent: ' + req.headers['user-agent'];
   var language = req.headers["accept-language"];
   var response_object = {"ipaddress":ipInfo.clientIp,"language":language,"software":user_agent};
   resp.end(JSON.stringify(response_object));



})
app.listen(8080);
