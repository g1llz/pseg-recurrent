const session = deps => {
  const { axios, auth, convert, xml2Opt, base } = deps;
  const baseURL = auth.sandbox ? base.sandbox : base.production;
  const options = {
    headers: { 'Content-Type': 'application/json;charset=ISO-8859-1' },
    params: { email: auth.email, token: auth.token },
  };
  return {
    start: () => {
      options.url = `${baseURL}/v2/sessions`;
      options.method = 'POST';

      return new Promise( async (resolve, reject) => {
        try {
          const response = await axios(options);
          const data = convert.xml2js(response.data, xml2Opt);
          resolve({
            code: data.session.id
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

module.exports = session;
