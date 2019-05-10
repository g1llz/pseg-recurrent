const orders = deps => {
  const { axios, convert, xml2Opt } = deps;
  return {
    byApprovalCode: code => {
      const options = {
        url = `https://ws.sandbox.pagseguro.uol.com.br/pre-approvals/${code}/payment-orders`;
        method = 'GET';
      };

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
