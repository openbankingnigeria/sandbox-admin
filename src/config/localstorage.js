const localStorageProxy = {};
localStorageProxy.set = function lss(key, data, stringifyJSON) {
  const k = key;
  let d = data;
  if (stringifyJSON) {
    d = JSON.stringify(data);
  }
  localStorage.setItem(k, d);
};
localStorageProxy.get = function lsg(key, getConfig) {
  let d = localStorage.getItem(key);
  const g = getConfig || { parse_json: 1, if_no_data_send_empty_object: 1 };
  if (g.parse_json) {
    d = JSON.parse(d);
  }
  if (g.if_no_data_send_empty_object && !d) {
    d = {};
  }
  return d;
};

localStorageProxy.statics = {
  setMRLToken(token) {
    if (!localStorageProxy.get('lp_toks', { parse_json: false, if_no_data_send_empty_object: false })) {
      localStorageProxy.set('lp_toks', token);
    }
  },
  getMRLToken() {
    return localStorageProxy.get('lp_toks', { parse_json: false, if_no_data_send_empty_object: false });
  },
};

export default localStorageProxy;
