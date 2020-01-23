import moment from 'moment';

export default {
  name: 'dashboardhome',
  data() {
    return {
      apiuser: {},
      requests: [],
      integrator: {},
    }
  },
  methods: {
    fdt(ct) {
      //11 September, 2019 (5:45 AM)
      return moment(ct).format('DD MMMM, YYYY (hh:mm A)');
    },
    fdtr(ct) {
      return moment(ct).format('DD/MM/YY');
    },
    ftt(ct) {
      return moment(ct).format('hh:mm A');
    },
    loadRequests() {
      const self = this;
      let route = `v1/dashboard/admin/requestlogs`;
      self.$http.postLite(route, {apiuser: self.$route.params.id})
      .then(response => {
      const rd = response.data;
          if (rd.data) {
              self.integrator = rd.data.user;
              self.integrator.lastcall = self.integrator.reqlogs && self.integrator.reqlogs[0] && self.integrator.reqlogs[0].lastcall;
              self.requests = rd.data.logs.rows;
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
