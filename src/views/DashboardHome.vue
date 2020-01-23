<template>
  <div class="dashboardcontent">
        <div class="profilemast clearfix">
          <div class="mastcard mc50 mcpr10 fleft">
            <div class="card clearfix">
              <div class="card-img fleft">
                <img src="/fassets/integc.svg" alt="">
              </div>
              <div class="card-content fleft">
                <div class="card-content-title">
                  <span class="cctc">Integrators Count: <span class="statscount">{{overview.integrators.total}}</span></span>
                </div> 
                <div class="card-content-action ccac">
                  <router-link to="/dashboard/integrators" class="btn btn-def btn-light-accent-shadowed"> <span class="ccact">View More</span> </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="mastcard mc50 mcpl10 fleft">
              <div class="card clearfix">
                  <div class="card-img fleft">
                    <img src="/fassets/integac.svg" alt="">
                  </div>
                  <div class="card-content fleft">
                    <div class="card-content-title">
                      <span class="cctc">Transactions Count: <span class="statscount">{{overview.transactions.total}}</span></span>
                    </div> 
                    <div class="card-content-action ccac">
                      <a href="#" class="btn btn-def btn-light-accent-shadowed"> <span class="ccact">View More</span> </a>
                    </div>
                  </div>
                </div>
          </div>
        </div>
        <div class="profilemast clearfix">
            <div class="mastcard mc50 mcpr10 fleft">
              <div class="card clearfix">
                <div class="card-img fleft">
                  <img src="/fassets/integuserc.svg" alt="">
                </div>
                <div class="card-content fleft">
                  <div class="card-content-title">
                    <span class="cctc">Users: <span class="statscount">{{overview.users.total}}</span></span>
                  </div> 
                  <div class="card-content-action ccac">
                    <router-link to="/dashboard/users" class="btn btn-def btn-light-accent-shadowed"> <span class="ccact">View More</span> </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="mastcard mc50 mcpl10 fleft">
                <div class="card clearfix">
                    <div class="card-img fleft">
                      <img src="/fassets/integtc.svg" alt="">
                    </div>
                    <div class="card-content fleft">
                      <div class="card-content-title">
                        <span class="cctc">Activities</span>
                      </div> 
                      <div class="card-content-action ccac">
                        <a href="#" class="btn btn-def btn-light-accent-shadowed"> <span class="ccact">View More</span> </a>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
      </div>
</template>

<script>
// @ is an alias to /src
import HomeServices from '@/views/services/dashboardhome';

export default HomeServices;
</script>
