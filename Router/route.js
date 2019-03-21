const express = require('express')
const router = express.Router();
const multipart = require('connect-multiparty')
const upload = require('../fileUpload')
const multipartMiddleware = new multipart();

router.post('/upload', multipartMiddleware, (req, res) => {
    let folder = Object.values(req.files)[0] //array of files

    let multipleFiles = Array.isArray(folder)

    switch(multipleFiles) {
        case false: 
        upload(folder);
        break;

        default:
        for(let files of folder) { //multiple uploads to s3
            upload(files);
        }
    }   
   
})

module.exports = router; 

