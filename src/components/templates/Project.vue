<template>
  <div class="mx-sm-16" style="background-image: linear-gradient(to right, #11998E , #38EF7D);">
    <div class="container-fluid">
      <div class="row sendpal-preview">
        <div class="col">
          <div class="container px-0 px-sm-16 py-64">
            <div class="row">
              <div class="col-12 col-md-6">
                <h2 class="mb-48 text-white">Web application for sending & receiving parcels.</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-6 text-white">
                <h5>Client</h5>
                <p class="text-white mb-32">SendPal</p>
                <h5>My role</h5>
                <p class="text-white mb-32">UI designer and web developer</p>
                <h5>The challange</h5>
                <p
                  class="text-white mb-32"
                >Unify the process of sending parcels for any courier company</p>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <router-link
                to="/projects/sendpal"
                class="btn btn-dark text-uppercase btn-lg font-weight-bold mt-16"
                >View case study</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.sendpal-preview {
  background-position: calc(50% + 500px) 50%;
  background-size:1000px;
  background-repeat: no-repeat;
  background-image: url("~@/assets/img/sendpal/project_preview.png");
}
</style>
