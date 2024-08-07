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
