import * as lambda from "aws-lambda";

export const handler = async (
  _event: lambda.APIGatewayProxyEvent,
  _context: lambda.APIGatewayEventRequestContext
): Promise<lambda.APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "This is a lambda testing",
    }),
  };
};
