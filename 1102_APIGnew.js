const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        let data1 = await ddb.put({
            TableName: "hirutestddb",
            Item: {
                id: id,
                name: name
            }
        }).promise();
        console.log(data1)
    } catch (err) {
        console.log(err)
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};