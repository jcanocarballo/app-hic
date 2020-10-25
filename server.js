const express = require('express');
const path = require('path');

const app = express();

app.use(express.satatic(__dirname + 'apphic'));

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname+'apphic/index.html'));
});

app.listen(process.env.PORT || 8080);