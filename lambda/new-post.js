const uuid = require('uuid');

exports.handler = function(event, context, callback) {
	let data = JSON.parse(event.body);
	let result = LambdaFunction(data);

	callback(null, result);
}

function LambdaFunction(data) {
  let statusCode;
  let body;

  if (data.name === 'amessinger') {
    statusCode = 201;
		data.id = uuid.v4();
    body = JSON.stringify(data);
  } else {
    statusCode = 403;
    body = JSON.stringify({ status: 'access denied' });
  }

  return { statusCode, body };
}
