import localStorageProxy from '@/config/localstorage';

// eslint-disable-next-line
/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["to"] }] */

const auth = {};
function authCheck(to, from, next) {
  if(to.name == 'login') {
    document.body.classList.add('appblue');
  }
  else if (to.meta.is_db_view) {
    document.body.classList.add('apptint');
  } else {
    document.body.classList.remove('appblue');
    document.body.classList.remove('apptint');
  }
  let authData = null;
  try {
    authData = localStorageProxy.get('auth');
  } catch (e) {
    authData = null;
  }
  if(to.meta.active_class) {
    document.querySelectorAll('.sidebarmenu-item').forEach(cnode => {
      cnode.classList.remove('active');
    })
    const activeel = document.querySelector(to.meta.active_class);
    if(activeel) activeel.classList.add('active');
  }
  if (!authData || (authData && !authData.token)) {
    next('/login');
  } else {
    to.meta.$authData = authData;
    next();
  }
}

function authIsLoggedIn(to, from, next) {
  if(to.name == 'login') {
    document.body.classList.add('appblue');
  }
  else if (to.meta.is_db_view) {
    document.body.classList.add('apptint');
  } else {
    document.body.classList.remove('appblue');
    document.body.classList.remove('apptint');
  }
  const authData = localStorageProxy.get('auth');
  if (authData && authData.fb) {
    next('/');
  } else {
    next();
  }
}

function logout() {
  localStorage.clear();
}

auth.authCheck = authCheck;
auth.authIsLoggedIn = authIsLoggedIn;
auth.logout = logout;

export default auth;
