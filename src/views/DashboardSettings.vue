<template>
<div class="dashboardcontent">
        <div class="profilemast clearfix">
          <div class="mastcard mc50 mcpr10 fleft">
            <div class="card cardp30 clearfix">
              <!-- <div class="card-img fleft">
                <img src="profileimg.svg" alt="">
              </div> -->
              <div class="card-content ccmarg0 fleft">
                <div class="card-content-title">
                  <span class="cctc">client Key</span>
                </div>
                <div class="card-content-subtitle">
                  <span class="ccsc">{{apiuser.apiKey}} <i class="far fa-copy" v-clipboard:copy="apiuser.apiKey"
                    v-clipboard:success="onCopy"></i></span>
                </div>
                <div class="card-content-action ccac">
                  <router-link to="/dashboard/playground" class="btn btn-def btn-light-accent-shadowed"> 
                    <span class="ccact">Test on Playground</span> 
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="mastcard mc50 mcpl10 fleft">
              <div class="card cardp30 clearfix">
                <!-- <div class="card-img fleft">
                  <img src="profileimg.svg" alt="">
                </div> -->
                <div class="card-content ccmarg0 fleft">
                  <div class="card-content-title">
                    <span class="cctc">Secret Key</span>
                  </div>
                  <div class="card-content-subtitle">
                    <span class="ccsc">{{apiuser.apiSecret}} 
                    <i class="far fa-copy"
                    v-clipboard:copy="apiuser.apiSecret"
                    v-clipboard:success="onCopy"></i></span>
                  </div>
                  <div class="card-content-action ccac">
                    <a href="#"  v-on:click="resetkey()" class="btn btn-def btn-danger"> <span class="ccact">Reset Key</span> </a>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="contentcard">
            <div class="contentcard-title">
              OAUTH SETTINGS
            </div>
            <div class="contentcard-body clearfix"> 
              <div class="profile-info-entry piw100">
                  <div class="profileinputform">
                      <form action="">
                        <div class="inputs">
                          <div class="input inputnomarg ilb iw50">
                            <div class="inputlabel">
                             Application Type:
                            </div>
                            <div class="inputcontrol">
                              <input type="text" readonly value="OB CLIENT" placeholder="">
                            </div>
                          </div>
                          <div class="input ilb iw50">
                            <div class="inputlabel">
                              Name:
                            </div>
                            <div class="inputcontrol">
                              <input type="text" readonly :value="apiuser.appname || apiuser.company" placeholder="">
                            </div>
                          </div> 
                          <div class="input">
                              <div class="inputlabel">
                                Callback URL:
                                <span class="label-subtext">
                                    Authorized JavaScript origins: For use with requests from a browser. This is the origin URl of the client application. It can’t contain a wildcard (https://*.example.com) or a path (https://exampl.com/subdir). If you’re using a nonstandard port, you must include it in the origin URL 
                                </span>
                              </div>
                              <div class="inputcontrol iw50">
                                <input type="text" v-model="apiuser.callback_url" v-on:keyup.enter="update" placeholder="https://exampl.com">
                                <span class="label-subtext lbsmt5">
                                    Type the domain and press enter
                                </span>
                              </div>
                            </div> 
                            <div class="input inputnomarg ilb iw50" v-if="apiuser.callback_url && apiuser.callback_url != ' '">
                                <div class="inputlabel">
                                 Added Domains
                                </div>
                                <div class="inputcontrol inputsuc">
                                  <input type="text" v-model="apiuser.callback_url">
                                  <i class="fas fa-trash delico" v-on:click="apiuser.callback_url = ' '; update();"></i>
                                </div>
                              </div>
                              <div class="input ilb iw50">
                                <!-- <div class="inputlabel">
                                  
                                </div>
                                <div class="inputcontrol inputsuc">
                                    <input type="text" value="https://mycompany.com/subdir">
                                    <i class="fas fa-trash delico"></i>
                                  </div> -->
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
import HomeServices from '@/views/services/dashboardsettings';

export default HomeServices;
</script>
