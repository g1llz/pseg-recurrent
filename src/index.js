const deps = require('./dependences');
const orders = require('./pagseguro/order');
const session = require('./pagseguro/session');
const subscription = require('./pagseguro/subscription');
const notification = require('./pagseguro/notification');

/* main const */
const Pagseguro = function(auth) {
  this.config = { auth, ...deps };
};

Pagseguro.prototype.sessionId = () => session.start()(this.config);

Pagseguro.prototype.ordersByApprovalCode = (code) => 
  orders.byApprovalCode(code)(this.config); 

Pagseguro.prototype.setDiscountOnNextOrder = (discount) =>
  orders.discountOnNextOrder(discount)(this.config);

Pagseguro.prototype.subscriptionByDateInterval = (search) =>
  subscription.byDateInterval(search)(this.config);

Pagseguro.prototype.notificationDetail = (code, type) =>
  notification.approvalOrTransaction(code, type)(this.config);

module.exports = Pagseguro;
