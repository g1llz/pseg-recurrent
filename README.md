### PagSeguro Recurring Payment (pseg-recurrent)<br/>
:brazil: Pagamento recorrente [PagSeguro](https://dev.pagseguro.uol.com.br/docs/pagamento-recorrente)

> **Work in progress** :metal: <br/>
> **ALL METHODS RETURN A PROMISE**

### Set credentials and boom!
```js
const Pagseguro = require('pseg-recurrent');

const pagseguro = new Pagseguro({
  email: "bruce@wayne.io",
  token: "ABXXZ12BATMAN78XC0911OOPH4CC",
  sandbox: true
});
```

### CHECKLIST<br/>
- [x] Get session ID

Method: `sessionId()`

Example:.
```js
pagseguro.sessionId()
  .then(data => data.code)
  .catch(err => console.log(err));
```
- [x] List orders by approval code

Method: `ordersByApprovalCode(code)`

Example:.
```js
pagseguro.ordersByApprovalCode("ABCDEF123000ZXXZ9870WW")
  .then(data => data)
  .catch(err => console.log(err));
```
- [x] Set discount on next order

Method: `setDiscountOnNextOrder(discount)`

Example:.
```js
const discount = { 
  code: "ABCDEF123000ZXXZ9870WW", /* subscription code; */
  type: "DISCOUNT_PERCENT",
  value: "10.00" 
};

pagseguro.setDiscountOnNextOrder(discount)
  .then(data => data)
  .catch(err => console.log(err));
```

- [x] List subscriptions by date interval

Method: `subscriptionByDateInterval(search)`

Example:.
```js
const search = { 
  initialDate: "2019-04-01T00:00:00.0Z",
  finalDate: "2019-04-19T00:00:00.0Z",
  status: "ACTIVE", /* OPTIONAL - subscription status; */
  preApprovalRequest: "ABCDEF123000ZXXZ9870WW" /* OPTIONAL - code of plan; */
};

pagseguro.subscriptionByDateInterval(search)
  .then(data => data)
  .catch(err => console.log(err));

/* response detail */
{
  preApprovalSearchResult: {
    resultsInThisPage: '1',
    currentPage: '1',
    totalPages: '1',
    date: '2019-05-30T13:54:27-03:00',
    preApprovals: {
      preApproval: [
        {
          name: 'dc1',
          code: 'B0EB1247D5D5685774CBCF93A665028C',
          date: '2019-05-30T10:14:31-03:00',
          tracker: '035893',
          status: 'ACTIVE',
          reference: 'dca12922d82d344299a9', /* YOU define this ref at the time you sign up */
          lastEventDate: '2019-05-30T10:14:32-03:00',
          charge: 'AUTO'
        }
      ]
    }
  }
}
```

- [x] Detail of notification sent by Pagseguro

Method: `notificationDetail(code, type)`

Example:.
```js
pagseguro.notificationDetail('ABCDEF123000ZXXZ9870WW', 'transaction')
  .then(data => data)
  .catch(err => console.log(err));

/* response detail */
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
