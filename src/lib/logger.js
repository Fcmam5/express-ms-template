const bunyan = require('bunyan');

const logger = (name) => bunyan.createLogger({ src: true, name });

module.exports = logger;
