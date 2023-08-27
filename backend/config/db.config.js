const AWS = require('aws-sdk');

const db = new AWS.DynamoDB.DocumentClient();

const userTable = 'users';
const uniDataTable = 'crawledUniData';

module.exports = {
    db,
    userTable,
    uniDataTable
}