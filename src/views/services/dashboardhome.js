import moment from 'moment';

export default {
  name: 'dashboardhome',
  data() {
    return {
      apiuser: {},
      overview: { integrators: {}, transactions: {}, users: {} },
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
      self.$http.getLite(`v1/dashboard/overview`)
      .then(response => {
      const rd = response.data;
          if (rd.data) {
              self.overview = rd.data;
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
