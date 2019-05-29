### PagSeguro Recurring Payment (pseg-recurrent)<br/>
:brazil: Pagamento recorrente [PagSeguro](https://dev.pagseguro.uol.com.br/docs/pagamento-recorrente)

> Work in **progress**

### Set credentials and boom!
```js
const pagseguro = Pagseguro({
  email: "bruce@wayne.io",
  token: "ABXXZ12BATMAN78XC0911OOPH4CC",
  sandbox: true
});
```

### CHECKLIST<br/>
- [x] Get session ID
```js
const id = pagseguro.sessionId()
  .then(data => data.code)
  .catch(err => console.log(err));
```
- [x] List orders by approval code
```js
const orders = pagseguro.ordersByApprovalCode("ABCDEF123000ZXXZ9870WW")
  .then(data => data)
  .catch(err => console.log(err));
```
- [x] Set discount on next order
```js
const discount = { 
  code: "ABCDEF123000ZXXZ9870WW", /* subscription code; */
  type: "DISCOUNT_PERCENT",
  value: "10.00" 
};

const setDiscount = pagseguro.setDiscountOnNextOrder(discount)
  .then(data => data)
  .catch(err => console.log(err));
```

- [x] List subscriptions by date interval
```js
const search = { 
  initialDate: "2019-04-01T00:00:00.0Z",
  finalDate: "2019-04-19T00:00:00.0Z",
  status: "ACTIVE", /* OPTIONAL - subscription status; */
  preApprovalRequest: "ABCDEF123000ZXXZ9870WW" /* OPTIONAL - code of plan; */
};

const subsList = pagseguro.subscriptionByDateInterval(search)
  .then(data => data)
  .catch(err => console.log(err));
```
- [ ] ...

### LICENSE
Released under [MIT](https://github.com/g1llz/pseg-recurrent/blob/master/LICENSE) license.
