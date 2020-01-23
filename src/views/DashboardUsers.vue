<template>
  <div class="dashboardcontent">
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
          </section>
          NAME	EMAIL	API CALLS	LAST LOGIN	LAST API CALL	STATUS
           -->

          <table class="apptable" cellpadding="0">
            <thead class="apptablehead">
              <tr>
                <th class="rowpadder"></th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PHONENUMBER</th>
                <th>LAST LOGIN</th>
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
              <tr class="apptablerow" v-for="(req, i) in integrators" :key="i" :class="i%2===0?'odd':'notodd'">
                <td class="rowpadder"></td>
                <td class="apptablecell fs">{{req.fullName}}</td>
                <td class="apptablecell">{{req.email}}</td>
                <td class="apptablecell">{{req.phonenumber}}</td>
                <td class="apptablecell">{{req.lastLogin ? ftt(req.lastLogin) : 'N/A'}}</td>
                <td class="apptablecell"><a href="#" class="btn btn-sm btn-pln-succ">{{req.status? req.status : 'ACTIVE'}}</a></td>
                <td class="apptablecell lt">
                  <a href="#" class="btn btn-sm btn-pln-warning btnmr5">
                          <i class="fa fa-edit"></i>
                        </a>
                        <a href="#" class="btn btn-sm btn-pln-danger btnmr5">
                            <i class="fa fa-ban"></i>
                          </a>
                      <a href="#" class="btn btn-sm btn-pln-danger btnmr5">
                        <i class="fa fa-trash"></i>
                      </a>
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
import HomeServices from '@/views/services/dashboardusers';

export default HomeServices;
</script>
