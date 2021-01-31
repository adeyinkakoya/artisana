<template>
  <v-container fluid class="fill-height pa-0 ">
      
      <v-row class="pa-0 cardborder">
          <v-col cols="12" class="fill-height pa-0">
              <v-card elevation="1">
                  <v-img
                    height="400"
                    width="100%"
                    src="/images/bg10.jpg">
                  </v-img>                
                  </v-card>
              </v-col>
          </v-row>
           <v-row align="center" justify="center" class="mt-4"> 
                      <v-col cols="10" class="text-center pa-1">
                          <div class="meri primary--text heading font-weight-bold headingtext">Artisana</div>
                          <div class="reem copytext">If you've ever been dissapointed by an artisan. Then Artisana is for you. Artisana lets you add, rate and review artisans.</div>
                      </v-col>
                     
            </v-row>
            <v-row align="center" justify="center" class="mt-8 "> 
                      <v-col cols="10" class="text-center ">
                         <div ><v-btn block color="primary" elevation="5" large rounded to="/register">
                              <v-icon left dark >mdi-door-open</v-icon>
                              Get Started
                              </v-btn>
                        </div>
                         
                        <div class="mt-10">
                            <v-btn block color="secondary" elevation="5" large rounded :to="{name:'login'}">
                                 <v-icon left dark >mdi-account-arrow-right</v-icon>
                                Login
                            </v-btn>
                        </div>
                      </v-col>
                     
            </v-row>
      </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.cardborder {
  
  border-top: 2px solid orange;
  border-bottom: 2px solid #ffa500;

}

</style>
