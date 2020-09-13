exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      event,
      context,
    }),
  });
};
