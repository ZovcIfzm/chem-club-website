const express = require('express');
const app = new express();
const path = require('path');

app.use(express.static('public'));

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname+'/public/pages/mainpage.html'));
});

app.listen(3000, () => console.log("app started"));