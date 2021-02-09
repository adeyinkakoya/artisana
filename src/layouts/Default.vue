<template>
  <v-container fluid class="fill-height pa-0">

        <v-row class="fill-height">
          <v-col class="pa-0" >
              <v-card height="100%" >
           
                  <slot/>
              
              </v-card>
            </v-col>
        </v-row>
  
  </v-container>
</template>

<script>

export default {
    name:"Default",
    
    

}
</script>

<style scoped>
.v-card-hold {
    background-image:
    linear-gradient(to bottom, rgba(245, 246, 252, 0.7), rgba(0, 255, 255, 0.9)),
    url('/images/bg1.jpg');
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
    background-attachment: scroll;
    

   
    
}
</style>
