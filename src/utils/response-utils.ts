const {
  ACCESS_CONTROL_ALLOW_ORIGIN,
  ACCESS_CONTROL_ALLOW_METHODS
} = process.env;

const HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Origin': ACCESS_CONTROL_ALLOW_ORIGIN,
  'Access-Control-Allow-Methods': ACCESS_CONTROL_ALLOW_METHODS,
  'Access-Control-Allow-Headers': true
};

export function buildResponse(statusCode: number, body: any) {
  return body
    ? {
        statusCode,
        headers: HEADERS,
        body: JSON.stringify(body)
      }
    : {
        statusCode,
        headers: HEADERS
      };
}
