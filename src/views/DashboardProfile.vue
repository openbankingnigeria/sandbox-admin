<template>
<div class="dashboardcontent">
        <div class="contentcard">
          <div class="contentcard-title">
            Account Details
          </div>
          <div class="contentcard-body clearfix">
            <div class="profile-info fleft">
              <div class="user-image">
                <img src="/fassets/apicon.svg" alt="">
              </div>
              <!-- <div class="change-user-image">
                <a href="#"> Change Profile Picture </a>
              </div> -->
              <div class="ckcapt amam">
                CLIENT KEY
              </div>
              <div class="ckval">
                  {{apiuser.apiKey}}
              </div>
            </div>
            <div class="profile-info-entry fright">
                <div class="profileinputform">
                    <form action="" v-on:submit.prevent="update()">
                      <div class="inputs">
                        <div class="input inputnomarg">
                          <div class="inputlabel">
                            Enter Full name
                          </div>
                          <div class="inputcontrol">
                            <input type="text" required v-model="apiuser.fullName" placeholder="">
                          </div>
                        </div>
                        <div class="input">
                          <div class="inputlabel">
                            Enter email address
                          </div>
                          <div class="inputcontrol">
                            <input type="email" required v-model="apiuser.email" placeholder="">
                          </div>
                        </div>
                        <div class="input">
                          <div class="inputlabel">
                            Enter company name
                          </div>
                          <div class="inputcontrol">
                            <input type="text" required v-model="apiuser.company" placeholder="">
                          </div>
                        </div>
                        <div class="input">
                            <div class="inputlabel">
                              Enter phone number
                            </div>
                            <div class="inputcontrol">
                              <input type="text" v-model="apiuser.phoneNumber" placeholder="">
                            </div>
                          </div>
                      </div>
                      <div class="profileformcta"> 
                        <div class="formcta-button">
                            <button class="btn btn-def3 btn-primary" :disabled="loading" type="submit">Update Account</button>
                        </div>
                      </div>
                    </form>
                  </div>
              </div>
          </div>
        </div>
      </div>
</template>

<script>
// @ is an alias to /src
import HomeServices from '@/views/services/dashboardprofile';

export default HomeServices;
</script>
