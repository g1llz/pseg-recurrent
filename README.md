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

- [x] Detail of notification sent by Pagseguro
```js
const detail = pagseguro.notificationDetail('ABCDEF123000ZXXZ9870WW', 'transaction')
  .then(data => data)
  .catch(err => console.log(err));

/* data detail */
{
  data: {
    transaction: {
      date: '2019-04-01T00:01:01.000-01:00',
      code: '14D00F18-4355-4BAC-BD01-7B42F3XX754C',
      reference: 'dca12922d82d344299a9',
      type: '11',
      status: '3',
      lastEventDate: '2019-04-01T00:01:01.000-01:00',
      paymentMethod: [Object],
      grossAmount: '29.90',
      discountAmount: '0.00',
      creditorFees: [Object],
      netAmount: '28.01',
      escrowEndDate: '2019-06-13T10:16:41.000-03:00',
      installmentCount: '1',
      itemCount: '1',
      items: [Object],
      sender: [Object],
      shipping: [Object],
      gatewaySystem: [Object],
      primaryReceiver: [Object]
    }
  }
}

```
- [ ] ...

### LICENSE
Released under [MIT](https://github.com/g1llz/pseg-recurrent/blob/master/LICENSE) license.
