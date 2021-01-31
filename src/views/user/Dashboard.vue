<template>
  <v-container class="pa-0">
    <v-row align="center" justify="center" class="primary">
    <v-col cols="10" class="text-center mb-6">
      <div >
        <v-avatar class="addborder" size="60">
          <img src="/images/yinka.jpg">
          </v-avatar>
      </div>
      <div class="mt-5 poppins name">Welcome Adeyinka Ogunkoya</div>
       <div class="mt-8">
         <v-btn color="secondary pt-4 pb-4" dark elevation="2" small>
           <v-icon left dark >
             mdi-plus
             </v-icon>
             Add Artisan
           </v-btn>
       </div>
      </v-col>
    </v-row>
    <v-row >
      <v-col cols="12" class="pa-0">
        <v-card tile flat color="white">
          <v-tabs
           centered
           grow
           v-model="tabs"
           background-color="transparent"
           color="primary"
           light
                >
                  <v-tabs-slider color="secondary darken-1"></v-tabs-slider>

                  <v-tab >My Artisans</v-tab>
                  <v-tab >My Reviews</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tabs">
                      <v-tab-item>
                        <v-row >
                          <v-col cols="12" >
                            <v-card width="88%" class="ma-auto pb-2" elevation="1" rounded="1" light>
                              <v-row >
                                <v-col cols="4" >
                                  <div class="ml-2 text-center">
                                 
                                  <v-avatar height="70" width="70">
                                  <v-img src="/images/jide.jpg" ></v-img>
                                  </v-avatar>
                                  <p class="caption mt-1">
                                    <v-icon small color="primary">mdi-wrench</v-icon>
                                     Mechanic
                                  </p>
                                 
                                 
                                </div>
                                </v-col>
                                <v-col cols="8" class="pa-0">
                                  <div>
                                      <v-card-text >
                                              <div class="cardName primary--text">Sanmi Oladele</div>
                                              <div class="subtitle">
                                                <v-icon small color="secondary">mdi-phone</v-icon> <span class="ml-2">08097622334</span>
                                              </div>
                                          <div class="subtitle">
                                                <v-icon small color="secondary">mdi-map-marker-plus</v-icon> <span class="ml-2">Lagos</span>
                                          </div>
                                          
                                          <v-divider class="my-3 mr-2"></v-divider>
                                          <div class="float-right">
                            
                                              <v-icon  color="primary" >mdi-thumb-up</v-icon> <span class="mr-5" >0</span>
                                              <v-icon  color="error">mdi-thumb-down</v-icon> <span class="mr-5">50</span>
                                            
                                          </div>
                                      </v-card-text>
                                   
                                  </div>
                                </v-col>
                              </v-row>
                            </v-card >

                          </v-col>
                          <v-col cols="12" >
                            <v-card width="88%" class="ma-auto pb-2" elevation="1" rounded="1" light>
                              <v-row >
                                <v-col cols="4" >
                                  <div class="ml-2 text-center">
                                 
                                  <v-avatar height="70" width="70">
                                  <v-img src="/images/shoe.jpg" ></v-img>
                                  </v-avatar>
                                  <p class="caption mt-1">
                                    <v-icon small color="primary">mdi-shoe-print</v-icon>
                                     Shoe Maker
                                  </p>
                                 
                                 
                                </div>
                                </v-col>
                                <v-col cols="8" class="pa-0">
                                  <div>
                                      <v-card-text >
                                              <div class="cardName primary--text">Clement Salisu</div>
                                              <div class="subtitle">
                                                <v-icon small color="secondary">mdi-phone</v-icon> <span class="ml-2">08097622334</span>
                                              </div>
                                          <div class="subtitle">
                                                <v-icon small color="secondary">mdi-map-marker-plus</v-icon> <span class="ml-2">Abuja</span>
                                          </div>
                                          
                                          <v-divider class="my-3 mr-2"></v-divider>
                                          <div class="float-right">
                            
                                              <v-icon  color="primary" >mdi-thumb-up</v-icon> <span class="mr-5" >0</span>
                                              <v-icon  color="error">mdi-thumb-down</v-icon> <span class="mr-5">10</span>
                                            
                                          </div>
                                      </v-card-text>
                                   
                                  </div>
                                </v-col>
                              </v-row>
                            </v-card >

                          </v-col>
                          <v-col cols="12" >
                            <v-card width="88%" class="ma-auto pb-2" elevation="1" rounded="1" light>
                              <v-row >
                                <v-col cols="4" >
                                  <div class="ml-2 text-center">
                                 
                                  <v-avatar height="70" width="70">
                                  <v-img src="/images/ola.jpg" ></v-img>
                                  </v-avatar>
                                  <p class="caption mt-1">
                                    <v-icon small color="primary">mdi-printer</v-icon>
                                     Printer
                                  </p>
                                 
                                 
                                </div>
                                </v-col>
                                <v-col cols="8" class="pa-0">
                                  <div>
                                      <v-card-text >
                                              <div class="cardName primary--text">Ola Kadiri</div>
                                              <div class="subtitle">
                                                <v-icon small color="secondary">mdi-phone</v-icon> <span class="ml-2">08097622334</span>
                                              </div>
                                          <div class="subtitle">
                                                <v-icon small color="secondary">mdi-map-marker-plus</v-icon> <span class="ml-2">Ibadan</span>
                                          </div>
                                          
                                          <v-divider class="my-3 mr-2"></v-divider>
                                          <div class="float-right">
                            
                                              <v-icon  color="primary" >mdi-thumb-up</v-icon> <span class="mr-5" >0</span>
                                              <v-icon  color="error">mdi-thumb-down</v-icon> <span class="mr-5">100</span>
                                            
                                          </div>
                                      </v-card-text>
                                   
                                  </div>
                                </v-col>
                              </v-row>
                            </v-card >

                          </v-col>
                        </v-row>
                      </v-tab-item>
                      <v-tab-item>
                        <v-card flat class="px-5">
                          <v-card-text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repudiandae placeat eligendi. Soluta perspiciatis odio similique ut tempora nostrum, cupiditate labore dolor modi suscipit ipsam doloribus harum aperiam itaque ullam.
                         
                          </v-card-text>
                        </v-card>
                      </v-tab-item>
          </v-tabs-items>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      tabs:null
      
    }
  },

  computed: {
    ...mapGetters('user',['currentUser'])
    
  },

  methods: {
   
    ...mapActions('user',['logoutUser'])
    
  },

}
</script>

<style scoped>


</style>
