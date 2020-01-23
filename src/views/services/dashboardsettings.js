import moment from 'moment';

export default {
  name: 'dashboardhome',
  data() {
    return {
      apiuser: {},
      requests: [],
      loading: false,
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
      self.$http.getLite(`v1/dashboard/self`)
      .then(response => {
      const rd = response.data;
          if (rd.data) {
              self.apiuser = rd.data;
          }
      })
      .catch(error => {
      const error_response = error.response;
      this.$swal('Oops', (error_response && error_response.data && error_response.data.message ) || error.message, 'error')
      })
    },
    onCopy() {
      //alert("Copied");
      this.$swal('Copied!');
    },
    resetkey() {
      const self = this;
      self.$swal.fire({
        title: 'Are you sure you want to reset your API keys?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.value) {
          self.resetkeymakerequest();
        }
      })
    },
    resetkeymakerequest() {
      const self = this;
      self.loading = true;
      self.$http.postLite(`v1/dashboard/resetapikeys`)
      .then(response => {
      const rd = response.data;
          if (rd.data) {
              //self.apiuser = rd.data;
              self.$swal.fire(
                'Done',
                'Your API keys havee been reset.',
                'success'
              );
              self.loadRequests();
          }
      })
      .catch(error => {
      const error_response = error.response;
      self.$swal('Oops', (error_response && error_response.data && error_response.data.message ) || error.message, 'error');
      })
      .finally( () => {
        self.loading = false;
      })
    },
    update() {
      const self = this;
      self.loading = true;
      self.$http.postLite(`v1/dashboard/edit_profile`, self.apiuser)
      .then(response => {
      const rd = response.data;
          if (rd.data) {
              //self.apiuser = rd.data;
              self.$swal.fire(
                'Done',
                'Update successful',
                'success'
              );
              self.loadRequests();
          }
      })
      .catch(error => {
      const error_response = error.response;
      self.$swal('Oops', (error_response && error_response.data && error_response.data.message ) || error.message, 'error');
      })
      .finally( () => {
        self.loading = false;
      })
    },
  },
  created() {
    this.apiuser = this.$route.meta.$authData;
    this.loadRequests();
  },
};
