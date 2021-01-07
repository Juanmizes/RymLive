'use strict'

//Install express server
const express = require('express');
const path = require('path');

const app = express();

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', '*');
//     res.header('Access-Control-Request-Headers', '*');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('');
//     next();
// });

// Serve only the static files form the dist directory
app.use(express.static(__dirname+"/dist/RymLive"));

app.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname+"/dist/RymLive/index.html"));
    
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200);