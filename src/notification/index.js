const notification = deps => {
  const { axios, auth, convert, xml2Opt, base } = deps;
  const baseURL = auth.sandbox ? base.sandbox : base.production;
  const options = {
    method: 'GET',
    params: {
      email: auth.email,
      token: auth.token
    },
  };
  const headers = {
    transaction: {
      'Content-Type': 'application/json;charset=ISO-8859-1'
    },
    preApproval: {
      'Content-Type': 'application/json;charset=ISO-8859-1',
      'Accept': 'application/vnd.pagseguro.com.br.v3+xml;charset=ISO-8859-1'
    }
  };
  
  return {
    approvalOrTransaction: (code, type) => {
      const path = type === 'preApproval' ? 'pre-approvals' : 'v3/transactions';
      options.headers = type === 'preApproval' ? headers.preApproval : headers.transaction;
      options.url = `${baseURL}/${path}/notifications/${code}`;
      return new Promise( async (resolve, reject) => {
        try {
          const response = await axios(options);
          const data = convert.xml2js(response.data, xml2Opt);
          resolve({
            data
          });
        } catch (error) {
          /* implement error handler  */
          const status = error.response.status;
          const reason = error.response.data;
          reject({
            status: status,
            error: reason
          });
        }
      });
      
    }
  };
};

module.exports = notification;
