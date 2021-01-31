<template>
    <v-app>
        <component :is="layout">
                <v-main>
                       
                          <v-fade-transition mode="out-in">
                                  <keep-alive>
                                      <router-view :deviceModel="deviceModel" />
                                  </keep-alive>
                            </v-fade-transition>
                       
                </v-main>
          </component>
            <FooterNav v-if="currentUserId"/>
      </v-app>
</template>
<script>
import { Plugins } from '@capacitor/core'
import FooterNav from "./components/FooterNav.vue";
import {mapGetters} from 'vuex'
export default {
  name:"app",
  components:{
    FooterNav
  },
  data() {
    return {
      deviceModel :''
    }
  },
  computed: {
    layout(){
      return this.$route.meta.layout  || 'default'
    },
   ...mapGetters('user',['isLoggedIn','currentUserId'])
   
  },
  mounted() {
    this.getDeviceInfo()
  
},
methods: {
    async getDeviceInfo(){
       const { Device } = Plugins
        this.deviceModel =  await Device.getInfo()
        this.deviceModel = this.deviceModel.model
        
    }
   
},
 
  
}
</script>
