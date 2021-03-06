const deps = require('./dependences');
const orders = require('./pagseguro/order');
const session = require('./pagseguro/session');
const subscription = require('./pagseguro/subscription');
const notification = require('./pagseguro/notification');

/* main const */
const Pagseguro = function(auth) {
  this.config = { auth, ...deps };
};

Pagseguro.prototype.sessionId = function() { 
  return session(this.config).start();
};

Pagseguro.prototype.ordersByApprovalCode = function(code) {
  return orders(this.config).byApprovalCode(code); 
};

Pagseguro.prototype.setDiscountOnNextOrder = function(discount) {
  return orders(this.config).discountOnNextOrder(discount);
};

Pagseguro.prototype.listSubsByDateInterval = function(search) {
  return subscription(this.config).listByDateInterval(search);
};

Pagseguro.prototype.subDetailByApprovalCode = function(code) {
  return subscription(this.config).detailByApprovalCode(code);
};

Pagseguro.prototype.notificationDetail = function(code, type) {
  return notification(this.config).approvalOrTransaction(code, type);
};

module.exports = Pagseguro;
