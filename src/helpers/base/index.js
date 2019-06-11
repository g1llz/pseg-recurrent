const base = {
  sandbox: 'https://ws.sandbox.pagseguro.uol.com.br',
  production: 'https://ws.pagseguro.uol.com.br',
  headers: {
    withAccept: {
      'Content-Type': 'application/json;charset=ISO-8859-1',
      'Accept': 'application/vnd.pagseguro.com.br.v3+xml;charset=ISO-8859-1'
    },
    withOutAccept: {
      'Content-Type': 'application/json;charset=ISO-8859-1'
    }
  }
};

module.exports = base;
