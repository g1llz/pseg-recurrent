const axios = require('axios');
const convert = require('xml-js');
const xml2Opt = require('./helpers/text-from-xml');

const deps = { axios, convert, xml2Opt };

/* main const */
const Pagseguro = (auth) => {
  const orders = require('./order')({ auth, ...deps });
  const session = require('./start-session')({ auth, ...deps });

  return {
    sessionId: () => session.start(),
    ordersByApprovalCode: () => orders.byApprovalCode()
  };
}

module.exports = Pagseguro;
