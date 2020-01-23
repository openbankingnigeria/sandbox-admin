export default {
  name: 'home',
  data() {
    return {
      loading: false,
      model: {
        email: '',
      }
    }
  },
  methods: {
    login() {
      const self = this;
      self.loading = true;
      self.$http.postLite('v1/dashboard/admin/magiclinks/', self.model)
      .then(response => {
        const rd = response.data;
        if (rd.data) {
          self.$router.push({name:'confirmation', params:{email: self.model.email}});
        }
      })
      .catch(error => {
        const error_response = error.response; 
        self.$swal('Oops', (error_response && error_response.data && error_response.data.message ) || error.message, 'error');
      })
      .finally( () => {
        self.loading = false;
      })
    }
  }
};
