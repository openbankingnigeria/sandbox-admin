import moment from 'moment';

export default {
  name: 'dashboardhome',
  data() {
    return {
      apiuser: {},
      integrators: [],
    }
  },
  methods: {
    fdt(ct) {
      return moment(ct).format('DD/MM/YY');
    },
    ftt(ct) {
      return moment(ct).format('hh:mm A');
    },
    loadRequests() {
      const self = this;
      let route = `v1/dashboard/integrators`
      if(self.$route.meta.is_users) {
        route = `v1/dashboard/users`
      }
      self.$http.postLite(route)
      .then(response => {
      const rd = response.data;
          if (rd.data) {
              self.integrators = rd.data;
          }
      })
      .catch(error => {
      const error_response = error.response;
      self.$swal('Oops', (error_response && error_response.data && error_response.data.message ) || error.message, 'error');
      })
    },
  },
  created() {
    this.apiuser = this.$route.meta.$authData;
    this.loadRequests();
    //this.$swal("Home home");
  },
};
