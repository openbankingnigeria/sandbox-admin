<template>
  <section class="clearfix">
    <section class="page-sidebar sidebardefault sbg appblue mh100">
      <div class="sidebarcontent">
          <div class="appbrand">
              <a href="https://openbanking.ng" target="_blank"><img src="https://openbanking.ng/wp-content/uploads/2019/10/log2.svg" alt=""></a>
          </div>
          <div class="sidebarcaption">
              We are building a common standard for Open Banking API’s in Nigeria
          </div>
          <section class="sidebarcta">
            <div class="sidebarcta-text">
                Already have an account?
            </div>
            <div class="sidebarcta-action sidebarcta-button">
              <router-link to="/login" class="btn btn-primary-inv btn-def2"> Sign In</router-link>
            </div>
          </section>
      </div>
     </section>
     <section class="page-main maindefault mh100">
      <div class="maincontent">
        <div class="introtext">
          <div class="opening">
            GET ACCESS TO
          </div>
          <div class="minijumbotext">
            Openbanking Nigeria Sandbox
          </div>
          <div class="instruction">
            Enter your details below:
          </div>
        </div>
        <div class="signupform">
          <form action="" v-on:submit.prevent="register()">
            <div class="inputs">
              <div class="input">
                <div class="inputlabel">
                  Enter Full name
                </div>
                <div class="inputcontrol">
                  <input type="text" required placeholder="" v-model="model.fullname" />
                </div>
              </div>
              <div class="input">
                <div class="inputlabel">
                  Enter email address
                </div>
                <div class="inputcontrol">
                  <input v-model="model.email" required type="email" placeholder="">
                </div>
              </div>
              <div class="input">
                <div class="inputlabel">
                  Enter company name
                </div>
                <div class="inputcontrol">
                  <input v-model="model.company" required type="text" placeholder="">
                </div>
              </div>
            </div>
            <div class="formcta">
              <div class="formcta-text">
                <input type="checkbox" required /> Check to agree to our
                <a href="#">Terms & Conditions</a> and
                <a href="#">Privacy Policy</a>
              </div>
              <div class="formcta-button">
                  <button :disabled="loading" class="btn btn-def3 btn-primary" type="submit">Sign Up</button>
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
import HomeServices from '@/views/services/register';

export default HomeServices;
</script>
