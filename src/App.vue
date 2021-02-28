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
        <v-card-text class="text-center install">
          설치 일시: 2020
        </v-card-text>
      </v-card>
      <v-img :src="require('@/assets/img_bg_user_soldier_sub.png')" ></v-img>
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
  }

  .install{
    font-size:32px !important;
  }
</style>