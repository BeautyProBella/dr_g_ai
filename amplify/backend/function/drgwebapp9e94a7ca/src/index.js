// Import the AWS SDK
const AWS = require('aws-sdk');

// Initialize the Bedrock client
const bedrock = new AWS.Bedrock({
    region: 'us-east-1' // Use your specific AWS region
});

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    // Define parameters for your Bedrock request
    const params = {
        // Example parameters - replace with your actual Bedrock API parameters
        FunctionName: 'drgwebapp9e94a7ca',
        Payload: JSON.stringify(event)
    };

    try {
        // Call AWS Bedrock
        const bedrockResponse = await bedrock.invokeFunction(params).promise();

        // Process Bedrock response
        const responsePayload = JSON.parse(bedrockResponse.Payload);

        return {
            statusCode: 200,
            // Uncomment below to enable CORS requests
            // headers: {
            //     "Access-Control-Allow-Origin": "*",
            //     "Access-Control-Allow-Headers": "*"
            // },
            body: JSON.stringify(responsePayload),
        };
    } catch (error) {
        console.error(`Error calling Bedrock: ${error.message}`);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error processing your request.' }),
        };
    }
};
