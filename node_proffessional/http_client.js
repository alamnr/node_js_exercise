var http = require('http');
var fs   = require('fs');
var options = {
  //host: "www.google.com",
  host: "www.xvideos.com",
  //port: 80,
  port: 443,
  //path: "/",
  path: "/video18245925/indian_country_days",
  method: "GET"
};
var file = fs.createWriteStream('test.txt');  
http.request(options, function(res) {
  res.pipe(file);
}).end();

/*
    nfortunately the standard DNS A-record (domain name to IP address) used by web-browsers to locate 
    web-servers does not include a port number. Web-browsers use the URL protocol prefix 
    (http://) to determine the port number (http = 80, https = 443, ftp = 21, etc.) unless 
    	the port number is specifically typed in the URL
    	 (for example "http://www.simpledns.com:5000" = port 5000).

Can I specify a TCP/IP port number for my web-server in DNS? (Other than the standard port 80)*/
//https://www.xvideos.com/video18245925/indian_country_days