const session = deps => {
  const { axios, auth, convert, xml2Opt } = deps;
  const options = {
    headers: { 'Content-Type': 'application/json;charset=ISO-8859-1' },
    params: { email: auth.email, token: auth.token },
  };
  return {
    start: () => {
      options.url = 'https://ws.sandbox.pagseguro.uol.com.br/v2/sessions';
      options.method = 'POST';

      return new Promise( async (resolve, reject) => {
        try {
          const response = await axios(options);
          const data = convert.xml2js(response.data, xml2Opt);
          console.log(data);
          resolve({
            code: data.session.id
          });
        } catch (error) {
          /* 401 - unauthorized error  */
          reject({
            error: error.response.data
          });
        }
      });
      
    }
  }
}

module.exports = session;