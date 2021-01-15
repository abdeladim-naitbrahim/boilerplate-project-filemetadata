var express = require('express');
var cors = require('cors');
require('dotenv').config()
var bodyparser=require('body-parser');
var fileUpload=require('express-fileupload');
var app = express();
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));
app.use(bodyparser.json());
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});







app.post('/api/fileanalyse', function(req, res) {
//saveuser( req.body.username,y=>res.json(y));
let x=req.files.upfile;
let y={name:x.name,type:x.mimetype,size:x.size}
console.log(y);
res.json(y);
});