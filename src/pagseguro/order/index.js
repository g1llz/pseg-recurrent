const orders = deps => {
  const { axios, auth, convert, xml2Opt, base } = deps;
  const baseURL = auth.sandbox ? base.sandbox : base.production;
  const options = {
    headers: base.headers.withAccept,
    params: {
      email: auth.email,
      token: auth.token
    },
  };
  return {
    byApprovalCode: code => {
      options.url = `${baseURL}/pre-approvals/${code}/payment-orders`;
      options.method = 'GET';
      return new Promise(async (resolve, reject) => {
        try {
          const response = await axios(options);
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
      options.method = 'PUT';
      return new Promise( async (resolve, reject) => {
        try {
          const response = await axios(options);
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
