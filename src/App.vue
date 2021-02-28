<template>
  <v-app>
    <v-main>
      <v-app-bar
      flat
      color="success"
      >
      <v-btn outlined class="ml-1 pa-0">메뉴</v-btn>
      
      <v-img :src="require('@/assets/img_common_mnsa_logo.png')" contain max-height="45" style="top:-6px"> </v-img>
      </v-app-bar>
      <v-card color="success" flat tile>
        <div class="text-center install">
          <div>
            설치일시 : 21.02.20 15:57
          </div>
          <div>
            차단일시 : 21.02.20 15:59
          </div>
        </div>
      </v-card>
      <v-img :src="require('@/assets/bg_footer.png')" ></v-img>
      <v-img :src="require('@/assets/camera_block.png')" contain class="camera_block"></v-img>
      <v-img :src="require('@/assets/circle_image.png')" contain class="progress_circle"></v-img>
      <div class="elapsed_time">
        <div>1일</div>
        <div>00:19:15</div>
      </div>
      
      <div class="camera_button">
        <v-btn block rounded>카메라 허용</v-btn>
      </div>
      <v-footer color="background_dark"><v-col class="footer pt-1">Version 2.0.01</v-col></v-footer>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
  }
</script>

<style lang="scss">
  body{
    background-color: #dda93c;
    position: fixed;
    right:0;
    left:0;
  }
  .v-app-bar .v-btn{
    min-width: 0 !important;
    height:34px !important;
    width: 50px !important;
    position:absolute;
    top:4px;
    border-width: 1.3px !important;
    letter-spacing: 0 !important;
    line-height: initial !important;
    font-size:16px !important;
    z-index:1;
  }

  .install{
    padding: 32px 0 !important;
    font-size:23px !important;
    font-weight:700 !important;
  }

  .camera_block{
    max-height: 200px;
    position: relative !important;
    top:110px;
  }

  .progress_circle{
    max-height: 275px;
    position: relative !important;
    top:-127.5px;

    animation:spin 5s linear infinite;
  }
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }

  .elapsed_time{
    position:absolute;
    top:480px;
    width:100%;
    text-align: center;
  }

  .camera_button{
    position:absolute !important;
    bottom:75px;
    padding:25px 0px !important;
  }

  .footer{
    text-align: center !important;
    color:#a2a2a2;
    font-size:14.5px !important;
  }

  .v-main{
    background-color: #212121 !important;
  }
</style>