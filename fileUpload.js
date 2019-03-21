const fs = require('fs')
const aws = require('aws-sdk')
require('dotenv').config();
const getFiletype = require('./fileType')


const s3 = new aws.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_KEY
})

//const filePath = 'PLAYSTATION_THUMB_1800x.png'

const uploadFile = (file) => {

    //const fileExtension = getFiletype();
    fs.readFile(file.path,  (err, data) => {
        if(err) throw err;
        const params = {
            Bucket: 'bww-site-assets',
            Key: file.originalFilename,
            Body: data,
            ACL: "public-read",
            Metadata: {}
        }

        s3.upload(params, function(s3Err, data){
            if (s3Err) throw s3Err
           console.log(data.Location)
        })
    })
}




module.exports = uploadFile




// const hello = {
//     hi: {

//     },
//     h2: 'hello',
//     h3: {}
// }

// for(let prop in hello) {
//     console.log(typeof hello[prop])
// }

// switch(fileExtension) {
        //     case 'jpg':
        //     params.Metadata['alt'] = 'Bingo'
        //     break;

        //     default:
        //         params.Metadata['alt'] = 'Xbox'
        //         params.Metadata['title'] = 'Nintendo'
        // }
