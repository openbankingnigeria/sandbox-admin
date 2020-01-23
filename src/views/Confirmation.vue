<template>
  <section class="mailconfirmation">
      <div class="confirmationillustration">
        <img src="https://openbanking.ng/wp-content/uploads/2019/10/il1.svg" alt="">
      </div>
      <div class="cta-caption">
          Check your inbox
      </div>
      <div class="cta-subtitle">
          We just sent a confirmation link to <span class="subtitlemail">{{email}}</span>. Click the link, and you’ll be signed in.
      </div>
      <div class="cta-action">
          <a href="/" class="btn btn-def btn-primary">Ok, got it!</a>
      </div>
     </section>
</template>

<script>
// @ is an alias to /src
import HomeServices from '@/views/services/confirmation';

export default HomeServices;
</script>
