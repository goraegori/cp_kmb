import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
		dark:true,
    themes: {
      dark: {
        primary: '#56443e',
        secondary: '#212121',
        success: '#dda93c',
        error: '#a43833',
        background_dark:'#171717',
        background_grey:'#212121'
      },
    },
  },
});
