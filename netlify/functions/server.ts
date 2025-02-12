const serverBundle = require('../../dist/fulfiledu/server/main');

exports.handler = async (event: any, context: any) => {
  const app = serverBundle.app();

  return new Promise((resolve, reject) => {
    app(event, {
      status: (code: any) => ({
        code,
        send: (body: any) => {
          resolve({
            statusCode: code,
            body,
            headers: {
              'Content-Type': 'text/html',
            },
          });
        },
      }),
    });
  });
};
