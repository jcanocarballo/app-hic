const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + 'app-hic'));

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname+'app-hic/index.html'));
});

app.listen(process.env.PORT || 8080);