const fs = require('fs')
const aws = require('aws-sdk')
require('dotenv').config();


const s3 = new aws.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_KEY
})

const filename = 'PLAYSTATION_THUMB_1800x.png'

const uploadFile = () => {
    fs.readFile(filename, (err, data) => {
        if(err) throw err;
        const params = {
            Bucket: 'bww-site-assets',
            Key: 'PLAYSTATION_THUMB_1800x.png',
            Body: JSON.stringify(data, null, 2)
        }

        s3.upload(params, function(s3Err, data){
            if (s3Err) throw s3Err
            console.log(`file upload successfully at ${data.Location}`)
        })
    })
}


module.exports = uploadFile



