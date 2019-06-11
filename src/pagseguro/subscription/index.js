const subscription = deps => {
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
    byDateInterval: search => {
      const { email, token } = options.params;
      options.url = `${baseURL}/pre-approvals`;
      options.params = { email, token, ...search };
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
    }
  };
};

module.exports = subscription;
