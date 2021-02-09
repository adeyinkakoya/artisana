<template>


    <v-bottom-navigation
      app
      background-color="primary"
      color="secondary"
      dark
      grow
      :value="bottomNav"
    >
      <v-btn >
        <span>Dashboard</span>
        <v-icon>mdi-account-cog-outline</v-icon>
      </v-btn>

      <v-btn>
        <span>Invite a friend</span>
        <v-icon>mdi-handshake-outline</v-icon>
      </v-btn>

      <v-btn>
        <span>Contact Us</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>


</template>


<script>
  export default {
    name:"FooterNav",
    data () {
      return {
        bottomNav:0
       
      }
    },
  }
</script>
