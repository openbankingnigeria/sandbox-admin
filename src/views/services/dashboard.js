export default {
  name: 'dashboard',
  methods: {
    logout() {
      window.localStorage.removeItem('auth');
      this.$router.push('/landing');
    }
  }
};
