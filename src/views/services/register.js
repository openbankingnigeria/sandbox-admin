export default {
  name: 'home',
  data() {
    return {
      modalConfig: {
        show: false,
        showClose: false,
        gradient: '',
        modalClasses: '',
        headerTitle: '',
        content: ''
      },
      loading: false,
      model: {
        fullname: '',
        email: '',
        phonenumber: '',
        company: '',
        password: '1201200'
      }
    }
  },
  methods: {
    register() {
      const self = this;
      self.loading = true;
      self.$http.postLite('v1/developers/signup', self.model)
      .then(response => {
        const rd = response.data;
        if (rd.data.email) {
          self.$router.push({name:'confirmation', params:{email: rd.data.email}});
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
