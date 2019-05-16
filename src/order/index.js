const orders = deps => {
  const { axios, auth, convert, xml2Opt, base } = deps;
  const baseURL = auth.sandbox ? base.sandbox : base.production;
  const options = {
    headers: { 'Content-Type': 'application/json;charset=ISO-8859-1', 'Accept': 'application/vnd.pagseguro.com.br.v3+xml;charset=ISO-8859-1' },
    params: { email: auth.email, token: auth.token },
  };
  return {
    byApprovalCode: code => {
      options.url = `${baseURL}/pre-approvals/${code}/payment-orders`;
      return new Promise(async (resolve, reject) => {
        try {
          const response = await axios.get(options);
          const data = convert.xml2js(response.data, xml2Opt);
          resolve(data);
        } catch (error) {
          if (error.response.status === 400) {
            reject({
              status: error.response.status,
              ...convert.xml2js(error.response.data, xml2Opt)
            });
          }
          /* implement error handler  */
          reject({
            status: error.response.status,
            error: error.response.data
          });
        }
      });
    },
    discountOnNextOrder: discount => {
      const { code, discountType, discountValue } = discount;
      options.url = `${baseURL}/pre-approvals/${code}/discount`;
      options.data = { type: discountType, value: discountValue };
      return new Promise( async (resolve, reject) => {
        try {
          const response = await axios.put(options);
          if (response.status === 200)
            resolve({});
        } catch (error) {
          if (error.response.status === 400) {
            reject({
              status: error.response.status,
              ...convert.xml2js(error.response.data, xml2Opt)
            });
          }
          /* implement error handler  */
          reject({
            status: error.response.status,
            error: error.response.data
          });
        }
      });
    }
  };
};

module.exports = orders;
