<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app :permanent="drawer" width="300" color="nav_bg">
      
    </v-navigation-drawer>
      <v-app-bar
      app
      flat
      color="success"
      style="positon:absolute;width:100%;"
      >
      <v-btn outlined class="ml-1 pa-0" @click="drawer = !drawer">메뉴</v-btn>
      <v-img :src="require('@/assets/img_common_mnsa_logo.png')" contain max-height="45" style="top:-6px"> </v-img>
      </v-app-bar>
    <div style="position:absolute;width:100%;top:56px;background-color:#212121" class="v-toolbar" :style="drawer?'left:300px;':'left:0px;'">
      <div class="text-center install">
        <div>
          설치일시 : {{ installDate | moment('YY.MM.DD HH:mm') }}
        </div>
        <div>
          차단일시 : {{ blockDate | moment('YY.MM.DD HH:mm') }}
        </div>
      </div>
      <v-img :src="require('@/assets/bg_footer.png')" ></v-img>
      <v-img :src="require('@/assets/camera_block.png')" contain class="camera_block"></v-img>
      <v-img :src="require('@/assets/circle_image.png')" contain class="progress_circle"></v-img>
      <div class="elapsed_time">
        <div>{{ elapsed.days() }}일</div>
        <div>{{ elapsed_no_day.format('HH:mm:ss') }}</div>
      </div>
      
      <div class="camera_button">
        <v-btn block rounded>카메라 허용</v-btn>
      </div>
      <v-footer color="background_dark"><v-col class="footer"><span>Version 2.0.01</span></v-col></v-footer>
    </div>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        installDate:new Date('2021/02/20 15:57:45'),
        blockDate:new Date('2021/02/20 15:59:45'),
        drawer:false,
        elapsed:null,
        elapsed_utc:null,
      }
    },
    mounted() {
    this.interval = setInterval(() => {
      this.elapsed_time();
    },1000);
    
    this.elapsed_time();
  },
  destroyed() {
    clearInterval(this.interval);    
  },
    methods:{
      elapsed_time(){
        let bl = this.$moment(this.blockDate);
        let now = this.$moment();
        this.elapsed = this.$moment.duration(now.diff(bl));
        this.elapsed_no_day = this.$moment.duration(now.subtract(this.elapsed.days(),'days').diff(bl));
      }
    }
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
    background-color: #dda93c;
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
    top:425px;
    width:100%;
    text-align: center;
  }

  .camera_button{
    position:absolute !important;
    width:100%;
    padding:0 15px;
    bottom:75px;
  }
  .camera_button>button{
    padding:24px 0 !important;
    font-size: 18px !important;
    letter-spacing: 0.0333333333em !important;
    background-color: #464646 !important;
  }

  .camera_button>button:active{
    background-color: #383838 !important;
  }

  .footer{
    text-align: center !important;
    color:#a2a2a2;
    font-size:14.5px !important;
    padding-top:5px !important;
  }

  .v-main{
    background-color: #212121 !important;
  }
</style>