<template>
<nav>
  <!-- App Bar Starts -->
  <v-app-bar flat app elevation="0" color="primary" dark>

    <!-- App Bar Icon Starts -->
    <v-app-bar-nav-icon @click="drawer=!drawer" class="white--text">
      </v-app-bar-nav-icon>
      <!-- App Bar Icon Ends -->

  
      <!-- V toolbar title Starts -->
      <v-toolbar-title>
      <div class="poppins navtitle font-weight-bold ">{{$route.meta.desc}}</div>
      </v-toolbar-title>
     <!-- V toolbar title Ends -->

      <v-spacer></v-spacer>

      <v-badge content="1" overlap color="error">
            <v-icon color="secondary">mdi-bell</v-icon>
      </v-badge>
      <v-btn icon class="ml-2">
            <v-icon>mdi-magnify</v-icon>
      </v-btn>
          
          <v-menu
            bottom
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list class="poppins font-weight-medium">
              <v-list-item to="/profile">
                <v-list-item-title> Profile </v-list-item-title>
              </v-list-item>   
            </v-list>
            <v-btn small tile block dark color="secondary" @click="logoutUser"> Logout</v-btn>
          </v-menu>

     
  </v-app-bar>
  <!-- App Bar Ends -->

<!-- Drawer Starts -->
  <v-navigation-drawer v-model="drawer" app dark width="250">

    <!-- Drawer Avatar starts -->
      <v-row >
      <v-col class="text-center">
          <v-avatar size="50" class="addborder">
            <v-img src="@/assets/yinka.jpg" ></v-img>
          </v-avatar>
        </v-col>
      </v-row>
 <!-- Drawer Avatar Ends -->
      <v-divider ></v-divider>
    
  <v-row>
    <v-col cols="12">
       <v-list  class="heading" flat>

          <v-list-item>
              <v-list-item-icon>
                  <v-icon dense>mdi-home-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                  <v-list-item-title class="group_text" >Dashboard</v-list-item-title>
              </v-list-item-content>
            </v-list-item> 


      <v-list-group
        prepend-icon="mdi-wrench"
        no-action
         
      >
          <template v-slot:activator>
            <v-list-item-content>
            <v-list-item-title class="group_text">Artisans</v-list-item-title>
            </v-list-item-content>
          </template>
                <v-list-item >
                  
                        <v-list-item-content>
                        <v-list-item-title class="group_text ml-5" >My Artisans</v-list-item-title>
                        </v-list-item-content>
                     
                  </v-list-item> 
                  <v-list-item >
                  
                        <v-list-item-content>
                        <v-list-item-title class="group_text ml-5">Add Artisans</v-list-item-title>
                        </v-list-item-content>
                    
                  </v-list-item> 
        
      </v-list-group>

      <v-list-item  class="mb-2">
              <v-list-item-icon>
                  <v-icon dense>mdi-star-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                  <v-list-item-title class="group_text">My Reviews</v-list-item-title>
              </v-list-item-content>
            </v-list-item> 
     

       <v-list-item  class="mb-2">
              <v-list-item-icon>
                  <v-icon dense>mdi-heart-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                  <v-list-item-title class="group_text">Favorites</v-list-item-title>
              </v-list-item-content>
        </v-list-item> 
     

       <v-list-item  >
              <v-list-item-icon>
                  <v-icon dense>mdi-magnify</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                  <v-list-item-title class="group_text">Search</v-list-item-title>
              </v-list-item-content>
            </v-list-item> 
      </v-list>
       
       
       <v-list >
          <v-list-item>
              <v-list-item-content>
                  <v-btn small text @click="logoutUser" >
                    <v-icon left dense>
                        mdi-logout
                     </v-icon>
                    logout
                  </v-btn>
              </v-list-item-content>
            </v-list-item> 
            
      </v-list>
      </v-col>
  </v-row>
    </v-navigation-drawer>

    <!-- Drawer Ends -->
</nav>
</template>

<script>
import {mapActions} from 'vuex'
  export default {
    name: 'NavBar',

    data: () => ({
      drawer: false,
      date:null,
      items:[
        {name:"Profile" , link:"/profile"},
        {name:"Profile" , link:"/profile"},
      ]
    }),
    computed: {
      formattedDate:function(){
        return this.date !=null ? new Date(this.date).toDateString() : null
      }
    },
    methods: {
      ...mapActions('user',['logoutUser'])
    },
  }

</script>
