export default {
  name: 'home',
  data() {
    return {
      email: '',
    }
  },
  created() {
    this.email = this.$route.params.email;
  }
};
