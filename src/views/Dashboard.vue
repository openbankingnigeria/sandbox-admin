<template>
  <div class="page-container clearfix">
     <section class="page-sidebar sidebardashboard appblue mh100">
      <div class="sidebarcontentdashboard">
          <div class="appbrand dbmod">
              <a href="https://openbanking.ng" target="_blank"><img src="https://openbanking.ng/wp-content/uploads/2019/10/log2.svg" alt=""></a>
          </div>
          <div class="sidebarmenu"> 
            <div class="sidebarmenu-item active clearfix" id="dashboard_home">
              <span class="sidebarmenu-icon fleft">
                <img src="/fassets/icondb.svg" alt="">
              </span>
              <span class="sidebarmenu-text fleft">
                <router-link to="/dashboard" class="sidebarmenulink">Dashboard</router-link>
              </span>
            </div>
            <div class="sidebarmenu-item clearfix" id="dashboard_settings">
              <span class="sidebarmenu-icon fleft">
                <img src="/fassets/integsico.svg" alt="">
              </span>
              <span class="sidebarmenu-text fleft mupminus1">
                  <router-link to="/dashboard/integrators" class="sidebarmenulink">Integrators</router-link>
              </span>
            </div>
            <div class="sidebarmenu-item clearfix" id="dashboard_users">
              <span class="sidebarmenu-icon fleft">
                <img src="/fassets/iconprofile.svg" alt="">
              </span>
              <span class="sidebarmenu-text fleft mupminus1">
                  <router-link to="/dashboard/users" class="sidebarmenulink">Users</router-link>
              </span>
            </div>
          </div>
      </div>
     </section>
     <section class="page-main maindashboard mh100">
      <div class="dashboardmenu clearfix">
        <div class="menupane fright">
          <span class="menupane-item">
            <a href="https://apis.openbanking.ng/?version=latest" target="_blank" class="menupanelink">Documentation</a>
          </span>
          <span class="menupane-item">
            <a href="https://openbanking.ng/about/" target="_blank" class="menupanelink">About Us</a>
          </span>
          <span class="menupane-item">
            <span class="menupane-icon">
              <img src="/fassets/logout.svg" alt="">
            </span>
            <a href="#" v-on:click="logout()" class="menupanelink">Log out</a>
          </span>
        </div>
      </div>
      <router-view></router-view>
     </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeServices from '@/views/services/dashboard';

export default HomeServices;
</script>
