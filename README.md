### PagSeguro Recurring Payment (pseg-recurrent)<br/>
:br: Pagamento recorrente [PagSeguro](https://dev.pagseguro.uol.com.br/docs/pagamento-recorrente)

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
[] GET session ID
```js
const xyz = Pagseguro(auth).sessionId()
  .then(data => console.log(data.code))
  .catch(err => console.log(err));
```
[] GET orders by approval code
```js
const xyz = Pagseguro(auth).ordersByApprovalCode(code)
  .then(data => console.log(data))
  .catch(err => console.log(err));
```
[] ...

### LICENSE
Released under [MIT](https://github.com/g1llz/pseg-recurrent/blob/master/LICENSE) license.