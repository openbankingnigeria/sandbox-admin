import Axios from 'axios';

console.log(process.env);
Axios.defaults.baseURL = `${process.env.VUE_APP_API_BASE}`;

function setup(setupConfig, VueInstance) {
  function makeRequest(method, url, data, _extraConfig) {
    const baseURL = this.config.BASE_URL;
    let requestURL = url;
    if (baseURL) {
      requestURL = `${baseURL}${url}`;
    }

    const payload = data || {};
    const extraConfig = _extraConfig || {};
    const headers = extraConfig.headers || {};
    let requestPayload = {};
    if (this.config.default_headers_func) {
      this.config.default_headers = this.config.default_headers_func();
    }

    if (this.config.default_payload_func) {
      this.config.default_payload = this.config.default_payload_func();
    }

    if (extraConfig.ignore_defaults) {
      const idval = extraConfig.ignore_defaults;
      if (idval.includes('params')) {
        // Ignore default params
        this.config.default_payload = {};
      }
      if (idval.includes('headers')) {
        // Ignore default headers
        this.config.default_headers = {};
      }
    }
    const requestHeaders = { ...this.config.default_headers, ...headers };
    const tempHeaders = {
      headers: requestHeaders,
    };
    const shouldUseParams = {
      get: 1,
      options: 1,
      delete: 1,
    };

    if (shouldUseParams[method] || extraConfig.use_params) {
      extraConfig.params = { ...this.config.default_payload, ...payload };
    } else {
      requestPayload = { ...this.config.default_payload, ...payload };
    }
    const requestConfig = { ...tempHeaders, ...extraConfig };
    let axiosArguments = [requestURL, requestPayload, requestConfig];
    if (shouldUseParams[method] || extraConfig.use_params) {
      axiosArguments = [requestURL, requestConfig];
    }

    // console.log(VueInstance, VueInstance.$Progress);
    VueInstance.$Progress.start();
    const requestPromise = new Promise((resolve, reject) => {
      Axios[method](...axiosArguments)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          VueInstance.$Progress.finish();
        });
    });
    return requestPromise;
  }

  function get(config) {
    return this.makeRequest('get', config.url, config.payload, config.config);
  }

  function post(config) {
    return this.makeRequest('post', config.url, config.payload, config.config);
  }

  function postLite(url, data, config) {
    return this.makeRequest('post', url, data, config);
  }

  function getLite(url, data, config) {
    return this.makeRequest('get', url, data, config);
  }

  function put(config) {
    return this.makeRequest('put', config.url, config.payload, config.config);
  }

  function del(config) {
    return this.makeRequest('delete', config.url, config.payload, config.config);
  }

  function Scaffold(config) {
    this.config = {
      BASE_URL: config.BASE_URL,
      default_headers: config.default_headers,
      default_payload: config.default_payload,
    };

    if (typeof config.default_headers === 'function') {
      this.config.default_headers_func = config.default_headers;
    }

    if (typeof config.default_payload === 'function') {
      this.config.default_payload_func = config.default_payload;
    }

    this.makeRequest = makeRequest;
    this.get = get;
    this.getLite = getLite;
    this.post = post;
    this.postLite = postLite;
    this.put = put;
    this.delete = del;
  }

  /**
   * So we can do lib.get directly
   * as though we were using axios raw
   */
  let defaultConfig = null;
  if (typeof setupConfig.use_default !== 'undefined') {
    defaultConfig = setupConfig.services[setupConfig.use_default];
  }
  const reqLib = new Scaffold(defaultConfig || {});

  setupConfig.services.forEach((c) => {
    reqLib[c.name] = new Scaffold(c);
  });

  // console.log(reqLib);
  return reqLib;
}
export default setup;
