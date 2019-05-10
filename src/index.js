const axios = require('axios');
const convert = require('xml-js');
const xml2Opt = require('./helpers/text-from-xml');

const Pagseguro = (credentials) => {
  const deps = { axios, credentials, convert, xml2Opt };
  const orders = require('./order')(deps);
  const session = require('./start-session')(deps);

  return {
    sessionId: () => session.start(),
    ordersByApprovalCode: () => orders.byApprovalCode()
  };
}

module.exports = Pagseguro;
