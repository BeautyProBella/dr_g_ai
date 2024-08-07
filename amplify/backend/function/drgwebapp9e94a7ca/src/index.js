// Remove the AWS SDK import
// const AWS = require('aws-sdk');

// If using AWS Bedrock, remove the initialization for now
// const bedrock = new AWS.Bedrock({
//     region: 'us-east-1' // Use your specific AWS region
// });

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    // Return a simple response for testing
    return {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda! No AWS SDK used.'),
    };
};
