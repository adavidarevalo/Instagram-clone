const AWS = require('aws-sdk');

const aws_access_key_id = process.env.AWS_ACCESS_KEY_ID
const aws_secret_access_key = process.env.AWS_SECRET_ACCESS_KEY

const s3 = new AWS.S3({
    accessKeyId: aws_access_key_id,
    secretAccessKey: aws_secret_access_key
  });

const awsUpdateAvatar = async(file, filePath) => {
    const aws_backet_name = process.env.AWS_BUCKET_NAME

    const params = {
        Bucket: aws_backet_name,
        Body : file,
        Key : filePath
      };

    try {
        const response = await s3.upload(params).promise();
        return response?.Location
    } catch (error) {
        console.error(error)
        throw new Error()
    }
}

const awsDeleteAvatar = async(filePath) => {
  const aws_backet_name = process.env.AWS_BUCKET_NAME

  const params = {
      Bucket: aws_backet_name,
      Key : filePath
    };

    try {
      const data = await s3.deleteObject(params, function(err, data) {
        if (err) throw new Error(err.message); 
        else console.log('Deleted');
      });
      return data;
    } catch (err) {
      console.error(error)
        throw new Error()
    }
}


module.exports = {awsUpdateAvatar, awsDeleteAvatar}
