import lsp from '@/config/localstorage';

export default {
  name: 'home',
  data() {
    return {
      email: '',
    }
  },
  methods: {
    login() {
      const self = this;
      const token = self.$route.params.token;
      self.$http.postLite(`v1/dashboard/magiclinks/${token}/verify`)
      .then(response => {
        const rd = response.data;
        if (rd.data && rd.data.token) {
          lsp.set('auth', rd.data, 1);
          self.$router.push('/dashboard');
        }
      })
      .catch(error => {
        const error_response = error.response;
        this.$swal.fire({
          type: 'error',
          title: 'Oops...',
          text: (error_response && error_response.data && error_response.data.message ) || error.message
        }) //((error_response && error_response.data && error_response.data.message ) || error.message)
      })
    }
  },
  created() {
    this.login()
  }
};
