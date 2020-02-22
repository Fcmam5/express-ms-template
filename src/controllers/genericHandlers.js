const logger = require('../lib/logger')(__filename);

const Handlers = {
  handle404: (req, res) =>
    res.status(404).json({
      status: 'error',
      statusCode: 404,
      message: 'Page not found',
    }),
  // eslint-disable-next-line no-unused-vars
  handelServerErrors: (err, req, res, next) => {
    logger.error(err);
    const { isBoom } = err; // If the error is thrown by @hapi/boom
    const statusCode = isBoom ? err.output.statusCode : err.statusCode;
    const message = isBoom ? err.output.payload.message : err.message;

    return res.status(statusCode).json({
      status: 'error',
      statusCode,
      message,
    });
  },
};

module.exports = Handlers;
