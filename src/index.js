const axios = require('axios');
const convert = require('xml-js');
const xml2Opt = require('./helpers/text-from-xml');
const base = require('./helpers/base');

const deps = { axios, convert, xml2Opt, base };

/* main const */
const Pagseguro = (auth) => {
  const orders = require('./order')({ auth, ...deps });
  const session = require('./session')({ auth, ...deps });

  return {
    sessionId: async () => await session.start(),
    ordersByApprovalCode: () => orders.byApprovalCode()
  };
};

module.exports = Pagseguro;
