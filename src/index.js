const deps = require('./dependences');

/* main const */
const Pagseguro = (auth) => {
  const orders = require('./order')({ auth, ...deps });
  const session = require('./session')({ auth, ...deps });

  return {
    sessionId: () => session.start(),
    ordersByApprovalCode: code => orders.byApprovalCode(code),
    setDiscountOnNextOrder: discount => orders.discountOnNextOrder(discount)
  };
};

module.exports = Pagseguro;
