require('dotenv/config');
const multer = require('multer');
const AWS = require('aws-sdk')
const { v4 } = require('uuid')

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET
})

const storage = multer.memoryStorage({
    destination: function(req, file, callback) {
        callback(null, '');
    }
})

const upload = multer({ storage }).single('image')

const post = (req, res) => {
    const myImage = req.file.originalname.split('.')
    const fileType = myImage[myImage.length - 1]
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${v4()}.${fileType}`,
        Body: req.file.buffer
    }
    
    s3.upload(params, (err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })

}

const Image = {
    upload,
    post
}

module.exports =  Image