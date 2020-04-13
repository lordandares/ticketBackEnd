import AWS from 'aws-sdk';

AWS.config.update({ region: 'us-east-1' });
// let s3 = new AWS.S3();
// let sns = new AWS.SNS();
// let lambda = new AWS.Lambda();
export const dynamo = new AWS.DynamoDB();
export const dynamodb = new AWS.DynamoDB.DocumentClient({ service: dynamo, convertEmptyValues: true });