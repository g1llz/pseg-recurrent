### PagSeguro Recurring Payment (pseg-recurrent)<br/>
:brazil: Pagamento recorrente [PagSeguro](https://dev.pagseguro.uol.com.br/docs/pagamento-recorrente)

> Work in **progress**

### Credentials example
```js
const auth = {
  email: 'bruce@wayne.io',
  token: 'ABXXZ12BATMAN78XC0911OOPH4CC',
  sandbox: true
};
```

### CHECKLIST<br/>
- [x] GET session ID
```js
const id = Pagseguro(auth).sessionId()
  .then(data => data.code)
  .catch(err => console.log(err));
```
- [x] GET orders by approval code
```js
const orders = Pagseguro(auth).ordersByApprovalCode(code)
  .then(data => data)
  .catch(err => console.log(err));
```
- [ ] ...

### LICENSE
Released under [MIT](https://github.com/g1llz/pseg-recurrent/blob/master/LICENSE) license.
