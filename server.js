const express = require('express');

// create our Express app
const app = express();

// In Cloud9 use port 8080

app.get('/', (req, res) => {
    
    const ipaddress = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
     
    const softwareRegEx = /\((.+?)\)/g
    
    const software = softwareRegEx.exec(req.get('user-agent'))[1];
    
    res.json({ 
        ipaddress,
        language: req.get('Accept-Language').split(',')[0],
        software
    });

});

// To run your application run the command node server.js in your console.

app.listen(process.env.PORT || 8080, function () {
  console.log('Request Header Parser App Started!')
});