'use strict';

const callback = require('./action-response-200-json');
const getQuery = require('./action-get-query-http');

module.exports = (Model) => {
  return (req, res) => {
    const query = getQuery(req.url);
    User.remove(query, (err, data) => callback(err, data, res));
  };
};