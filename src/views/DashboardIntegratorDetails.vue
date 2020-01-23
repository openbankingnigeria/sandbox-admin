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
                                    <span class="ccsc">{{integrator.lastcall ? ftt(integrator.lastcall) : 'N/A'}}</span>
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
          <!-- <section class="atablecontainer">
            <header class="atableheader">
                <div class="atablecell">REQUEST TYPE</div>
                <div class="atablecell">DATE</div>
                <div class="atablecell">TIME</div>
                <div class="atablecell">IP ADDRESS</div>
                <div class="atablecell">STATUS</div>
                <div class="atablecell"> </div>
            </header>
            <div class="atablebody">
              <div class="atablerow">
                <div class="atablecell">POST</div>
                <div class="atablecell">08/09/19</div>
                <div class="atablecell">09:47 PM</div>
                <div class="atablecell">155.76.61.555</div>
                <div class="atablecell">Active</div>
                <div class="atablecell"><a href="#" class="btn btn-def btn-primary"><a href="#" class="btn btn-def">Click to view</a></a></div>
              </div>
            </div>
          </section> -->

          <table class="apptable" cellpadding="0">
            <thead class="apptablehead">
              <tr>
                <th class="rowpadder"></th>
                <th>REQUEST TYPE</th>
                <th>DATE</th>
                <th>TIME</th>
                <th>IP ADDRESS</th>
                <th>STATUS</th>
                <th> </th>
                <th class="rowpadder"></th>
              </tr>
              <tr class="headerpadder">
                <th colspan="8"></th>
              </tr>
            </thead>
            <tbody class="apptablebody">
              <tr class="tablepadder">
                <td colspan="8"></td>
              </tr>
              <tr class="apptablerow" v-for="(req, i) in requests" :key="i" :class="i%2===0?'odd':'notodd'">
                <td class="rowpadder"></td>
                <td class="apptablecell fs">{{req.method}}</td>
                <td class="apptablecell">{{fdtr(req.createdAt)}}</td>
                <td class="apptablecell">{{ftt(req.createdAt)}}</td>
                <td class="apptablecell">{{req.ip}}</td>
                <td class="apptablecell"><a href="#" class="btn btn-sm btn-pln-succ">Active</a></td>
                <td class="apptablecell lt">
                  <router-link :to="{name:'requestdetails', params:{integratorid: integrator.id, id: req.requestId}}" class="btn btn-sm btn-pln">Click to view</router-link>
                </td>
                <td class="rowpadder"></td>
              </tr>
              <tr class="tablepadder">
                <td colspan="8"></td>
              </tr>
            </tbody>
          </table>
        </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeServices from '@/views/services/dashboardintegratordetails';

export default HomeServices;
</script>
