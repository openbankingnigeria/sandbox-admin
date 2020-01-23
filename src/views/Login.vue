<template>
  <section class="clearfix">
    <section class="page-sidebar sidebardefault sbg sbgwhite mh100">
      <div class="sidebarcontent">
          <div class="appbrand">
              <a href="https://openbanking.ng" target="_blank"><img src="https://openbanking.ng/wp-content/uploads/2019/10/log3.svg" alt=""></a>
          </div>
          <div class="sidebarcaption black">
              We are building a common standard for Open Banking API’s in Nigeria
          </div>
          <section class="sidebarcta">
            <div class="sidebarcta-text tbold black">
                Don’t have an account?
            </div>
            <div class="sidebarcta-action sidebarcta-button">
              <router-link to="/register" class="btn btn-def2 btn-primary"> Sign Up</router-link>
            </div>
          </section>
      </div>
     </section>
     <section class="page-main maindefault mh100">
      <div class="maincontent maincontentvar">
        <div class="introtext">
          <div class="minijumbotext greenaccent">
            Sign in with email
          </div>
          <div class="instruction lgvar">
            Enter the email address associated with your account,
            and we’ll send a magic link to your mailbox
          </div>
        </div>
        <div class="signupform">
          <form action="" v-on:submit.prevent="login()">
            <div class="inputs">
              <div class="input">
                <div class="inputlabel whitetext">
                  Enter email address
                </div>
                <div class="inputcontrol">
                  <input class="darkvar" required type="email" v-model="model.email" placeholder="">
                </div>
              </div>
            </div>
            <div class="formcta">
              <div class="formcta-button">
                  <button class="btn btn-def3 btn-primary-inv" :disabled="loading" type="submit">Continue</button>
              </div>
            </div>
          </form>
        </div>
      </div>
     </section>
  </section>
</template>

<script>
// @ is an alias to /src
import cService from '@/views/services/login';

export default cService;
</script>
