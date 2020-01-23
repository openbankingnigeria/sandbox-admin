<template>
<div class="dashboardcontent">
        <div class="profilemast clearfix">
          <div class="mastcard mc100">
            <div class="card clearfix">
                <a href="#" class="btn btn-sm btn-pln-succ integratorstatus">Active</a>
              <div class="card-img fleft">
                <img src="/fassets/profileimg.svg" alt="">
              </div>
              <div class="card-content fleft">
                <div class="inteinforow">
                    <section class="mc100cc">
                        <div class="integinfocol">
                            <div class="card-content-title">
                                <span class="cctc">Full Name</span>
                              </div>
                              <div class="card-content-subtitle">
                                <span class="ccsc">{{integrator.fullName}}</span>
                              </div>
                        </div>
                        <div class="integinfocol">
                            <div class="card-content-title">
                                <span class="cctc">Company Name</span>
                              </div>
                              <div class="card-content-subtitle">
                                <span class="ccsc">{{integrator.company}}</span>
                              </div>
                        </div>
                      </section>
                      <section class="mc100cc">
                          <div class="integinfocol">
                              <div class="card-content-title">
                                  <span class="cctc">Email Address</span>
                                </div>
                                <div class="card-content-subtitle">
                                  <span class="ccsc">{{integrator.email}}</span>
                                </div>
                          </div>
                          <div class="integinfocol">
                              <div class="card-content-title">
                                  <span class="cctc">phone number</span>
                                </div>
                                <div class="card-content-subtitle">
                                  <span class="ccsc">{{integrator.phonenumber ? integrator.phonenumber : 'N/A'}}</span>
                                </div>
                          </div>
                        </section>
                        <section class="mc100cc">
                            <div class="integinfocol">
                                <div class="card-content-title">
                                    <span class="cctc">Last Login</span>
                                  </div>
                                  <div class="card-content-subtitle">
                                    <span class="ccsc">{{fdt(integrator.lastLogin)}}</span>
                                  </div>
                            </div>
                            <div class="integinfocol">
                                <div class="card-content-title">
                                    <span class="cctc">Last Api call</span>
                                  </div>
                                  <div class="card-content-subtitle">
                                    <span class="ccsc">{{ftt(integrator.lastcall)}}</span>
                                  </div>
                            </div>
                          </section>
                </div>
                <!-- <div class="inteinforow">
                    <section class="mc100cc">
                        <div class="card-content-title">
                          <span class="cctc">Company Name</span>
                        </div>
                        <div class="card-content-subtitle">
                          <span class="ccsc">Florence ltd</span>
                        </div>
                      </section>
                      <section class="mc100cc">
                          <div class="card-content-title">
                            <span class="cctc">Phone Number</span>
                          </div>
                          <div class="card-content-subtitle">
                            <span class="ccsc">+234</span>
                          </div>
                        </section>
                        <section class="mc100cc">
                            <div class="card-content-title">
                              <span class="cctc">Last API Call</span>
                            </div>
                            <div class="card-content-subtitle">
                              <span class="ccsc"> 5:45 AM </span>
                            </div>
                          </section>
                </div> -->
              </div>
            </div>
          </div> 
        </div>
        <section class="contentcards clearfix" >
            <div class="contentcard mc50 mcpr10 fleft">
                <div class="contentcard-title">
                  Request
                </div>
                <div class="contentcard-body reqres clearfix">
                    <pre id="reqpre"></pre>
                </div>
            </div>
            <div class="contentcard mc50 mcpl10 fleft">
                <div class="contentcard-title">
                  Response
                </div>
                <div class="contentcard-body reqres clearfix">
                    <pre id="respre"></pre>
                </div>
            </div>
        </section>
      </div>
</template>

<script>
// @ is an alias to /src
import HomeServices from '@/views/services/dashboardrequestdetails';

export default HomeServices;
</script>
