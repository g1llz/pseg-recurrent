const deps = require('./dependences');

/* main const */
const Pagseguro = (auth) => {
  const orders = require('./order')({ auth, ...deps });
  const session = require('./session')({ auth, ...deps });
  const subscription = require('./subscription')({ auth, ...deps });
  const notification = require('./notification')({ auth, ...deps });

  return {
    sessionId: () => session.start(),
    ordersByApprovalCode: code => orders.byApprovalCode(code),
    setDiscountOnNextOrder: discount => orders.discountOnNextOrder(discount),
    subscriptionByDateInterval: search => subscription.byDateInterval(search),
    notificationDetail: (code, type) => notification.approvalOrTransaction(code, type) 
  };
};

module.exports = Pagseguro;
