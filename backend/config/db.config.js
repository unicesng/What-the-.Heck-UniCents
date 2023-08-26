const AWS = require('aws-sdk');

const db = new AWS.DynamoDB.DocumentClient();

const userTable = 'users';

module.exports = {
    db,
    userTable
}