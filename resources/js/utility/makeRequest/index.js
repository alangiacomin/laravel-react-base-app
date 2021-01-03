import absoluteUrl from '../absoluteUrl';

const makeRequest = (params) => {
  const defaults = {
    url: '',
    method: 'get',
    data: {},
    onSuccess: () => {},
    onFailure: () => {},
    cancelToken: null,
  };
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  const {
    url, data, onSuccess, method, onFailure, cancelToken,
  } = { ...defaults, ...params };
  const dataOrParams = ['GET', 'DELETE'].includes(method.toUpperCase()) ? 'params' : 'data';

  window.axios
    .request({
      url: absoluteUrl(url),
      method,
      headers,
      // [dataOrParams]: dataOrParams == "params" ? qs.stringify(data) : data,
      [dataOrParams]: data,
      cancelToken,
    })
    .then((result) => onSuccess(result.data))
    .catch((error) => {
      onFailure(error);
    });
};

export default makeRequest;
