const orders = deps => {
  const { axios, auth, convert, xml2Opt } = deps;
  const options = {
    headers: { 'Content-Type': 'application/json;charset=ISO-8859-1', 'Accept': 'application/vnd.pagseguro.com.br.v3+xml;charset=ISO-8859-1' },
    params: { email: auth.email, token: auth.token },
  };
  return {
    byApprovalCode: code => {
      options.url = `https://ws.sandbox.pagseguro.uol.com.br/pre-approvals/${code}/payment-orders`;
      options.method = 'GET';

      return new Promise( async (resolve, reject) => {
        try {
          const response = await axios(options);
          const data = convert.xml2js(response.data, xml2Opt);
          console.log(data);
          resolve(data);
        } catch (error) {
          /* implement error handler  */
          reject({
            error: error.response.data
          });
        }
      });

    }
  }
}

module.exports = orders;
