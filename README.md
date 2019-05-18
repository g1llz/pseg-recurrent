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
- [x] GET session ID
```js
const id = pagseguro.sessionId()
  .then(data => data.code)
  .catch(err => console.log(err));
```
- [x] GET orders by approval code
```js
const orders = pagseguro.ordersByApprovalCode("ABCDEF123000ZXXZ9870WW")
  .then(data => data)
  .catch(err => console.log(err));
```
- [x] SET discount on next order
```js
const discount = { 
  code: "ABCDEF123000ZXXZ9870WW",
  type: "DISCOUNT_PERCENT",
  value: "10.00" 
};

const setDiscount = pagseguro.setDiscountOnNextOrder(discount)
  .then(data => data)
  .catch(err => console.log(err));
```
- [ ] ...

### LICENSE
Released under [MIT](https://github.com/g1llz/pseg-recurrent/blob/master/LICENSE) license.
