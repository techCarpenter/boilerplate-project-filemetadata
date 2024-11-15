var express = require('express');
var cors = require('cors');
var multer = require('multer');
const upload = multer({ dest: 'uploads/' });

require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), async (req, res) => {
  let type = req.file.mimetype;
  let size = req.file.size;
  let name = req.file.originalname;
  res.json({
    type,
    name,
    size
  })
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
