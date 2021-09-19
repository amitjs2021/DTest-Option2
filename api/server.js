const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors')
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4500

// middle ware
app.use(express.static('uploadfiles')); //to access the files in public folder
app.use(cors()); // it enables all cors requests
app.use(fileUpload());



//file reading from path for now only sitemap.txt is fixed file name use
var usersFilePath = path.join(__dirname, 'uploadfiles/sitemap.txt');

// file reader api in SYNC mode - we can convert this in non-blocking mode if require
app.get('/api/v1/maps', function (req, res) {
  fs.readFile(usersFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
    res.json({
      Status: 'Success',
      body: data
    }
    )

  })

});

// file upload api
app.post('/api/v1/upload', (req, res) => {
  if (!req.files) {
    return res.status(500).send({ msg: "file is not found" })
  }
  // accessing the file
  const myFile = req.files.file;

  //  mv() method places the file inside uplaodfiles directory
  myFile.mv(`${__dirname}/uploadfiles/${myFile.name}`, function (err) {
    if (err) {
      console.log(err)
      return res.status(500).send({ msg: "Error occured" });
    }
    // returning the response with file path and name
    return res.send({ name: myFile.name, path: `/${myFile.name}` });
  });
})

app.listen(PORT, () => {
  console.log('server is running at port 4500');
})