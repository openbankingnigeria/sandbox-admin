import lsp from '@/config/localstorage';

/**
 * use_default: 0 Means use zeroth item in services as the base
 * for the request library, so instead of doing lib.app.get,
 * you can just do lib.get
 */

/**
 * Interesting issue with passing default_payload as an object
 * It so happens that when you first load the app local storage
 * auth token is probably not defined yet so token is always null
 * Will try passing default payload as a function to be called each
 * time a request is made as a fix
 */
const httpConfig = {
  use_default: 0,
  services: [
    {
      name: 'app',
      BASE_URL: process.env.VUE_APP_API_BASE_URL,
      default_payload: () => ({ }),
      default_headers() {
        const { token } = lsp.get('auth');
        return {
          Authorization: `Bearer ${token}`,
        };
      },
      default_response_path: ['data'], // so we do response.data as extracted response
    },
  ],
};
export default httpConfig;
