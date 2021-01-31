<template>
<v-container class="fill-height">
    <v-row align="center" justify="center" class="fill-height">
        <v-col cols="10">
            <v-btn text small elevation="0" @click="goback">
                <v-icon small>
                    mdi-undo-variant
                </v-icon>
                <span>Back</span>
                </v-btn>
        </v-col>
    
        <v-col cols="10">
        
            <!-- logo -->
            <v-row>
                    <v-col cols="12" class="text-center">  
                        <div class="meri primary--text heading font-weight-bold headingtext">Artisana</div>
                        </v-col>   
            </v-row>
            <!-- log end -->

            <!--  login card -->
          
            <v-window v-model="step">
                <v-window-item :value="1">
                    <v-card  dark class="mt-5" color="primary">

                        <v-toolbar height="50"  color="secondary" elevation="2">
                            <v-row>
                                <v-col cols="12" class="text-center">  
                                <div class="meri white--text heading font-weight-bold ">Login</div>
                                
                                    </v-col>   
                            </v-row>
                        </v-toolbar>

                        <v-card-text> 

                            <!-- <span class="white--text heading">Username</span> -->
                            <v-text-field  clear-icon="mdi-close" clearable hint="Enter your username" prepend-icon="mdi-email" v-model="user.email" dark
                            label="Email" 
                            :rules="[rules.required,rules.email]">
                            </v-text-field>

                            <!-- <span class="white--text heading">Password</span> -->
                            <v-text-field 
                                label="Password"
                                :type="showEntries ? 'text' : 'password'" 
                                :append-icon="showEntries ? 'mdi-eye' : 'mdi-eye-off'" 
                                hint="Enter your password" 
                                prepend-icon="mdi-lock" 
                                v-model="user.password" 
                                dark 
                                @click:append="showEntries = !showEntries"
                                :rules="[rules.required,rules.counter]" >
                            </v-text-field>

                            </v-card-text>

                            <v-row justify="center">
                                <v-col class="text-center" cols="10">
                                    <v-btn class="white secondary--text" large block @click="loginUserCall">
                                        <v-icon left>mdi-account-check</v-icon>
                                        login
                                    </v-btn>

                                </v-col>
                                <v-col class="text-center" cols="12">
                                    <div class="heading"><a class="white--text" @click.prevent="step=3">Forgot Password ?</a></div>
                                </v-col>
                                <v-col class="text-center" cols="12">
                                    <div class="heading">
                                        <a class="white--text" @click.prevent="step=2">
                                        New user ? Create an account
                                            </a>
                                            </div>
                                </v-col>
                                
                            </v-row>
                        
                            
                
                        </v-card>
                    </v-window-item>


                    <v-window-item :value="2">
                    <v-card  dark class="mt-5" color="primary">

                    <v-toolbar height="50" color="secondary" elevation="2">
                    <v-row>
                        <v-col cols="12" class="text-center">  
                            <div class="meri white--text heading font-weight-bold ">Create your account</div>
                            </v-col>   
                    </v-row>
                    </v-toolbar>

                        <v-card-text>
                            <!-- <span class="white--text heading">Email address</span> -->
                            <v-text-field  clear-icon="mdi-close" clearable prepend-icon="mdi-account" v-model="user.name" dark
                            label="Name"
                            :rules="[rules.required]"
                            >
                            </v-text-field>

                            <!-- <span class="white--text heading">Email address</span> -->
                            <v-text-field  clear-icon="mdi-close" clearable prepend-icon="mdi-email" v-model="user.email" dark
                            label="Email"
                            :rules="[rules.required,rules.email]"
                            >
                            </v-text-field>

                            <!-- <span class="white--text heading">Telephone Number</span> -->
                            <v-text-field  clear-icon="mdi-close" clearable prepend-icon="mdi-phone-forward" v-model="user.telephone" dark
                            label="Telephone Number" placeholder="080xxxxxxxx"
                            :rules="[rules.required,rules.telephone]">
                            
                            </v-text-field>

                            <!-- <span class="white--text heading">Password</span> -->
                                <v-text-field 
                                label="Password"
                                :type="showEntries ? 'text' : 'password'" 
                                :append-icon="showEntries ? 'mdi-eye' : 'mdi-eye-off'" 
                                hint="Enter your password" 
                                prepend-icon="mdi-lock" 
                                v-model="user.password" 
                                dark 
                                @click:append="showEntries = !showEntries"
                                :rules="[rules.required,rules.counter]" >
                            </v-text-field>

                            <v-checkbox
                            label="I agree with the terms and conditions"
                            v-model="user.terms">
                            </v-checkbox>
                
                            </v-card-text>

                            <v-row justify="center">
                                <v-col class="text-center" cols="10">
                                    <v-btn class="white secondary--text" large block
                                    :disabled="!user.terms" @click="registerUserCall">
                                        <v-icon left>mdi-account-check</v-icon>
                                        Create my account
                                    </v-btn>
                                </v-col>
                                <v-col class="text-center" cols="12">
                                    <div class="heading "> <a  @click.prevent="step=1" class="white--text">Already have an account ? Login</a></div>
                                    
                                </v-col>
                            
                                
                            </v-row>
                        
                            
                
                </v-card>
                    </v-window-item>


                    <v-window-item :value="3">
                        <v-card  dark class="mt-5" color="primary">

                    <v-toolbar height="50" color="secondary" elevation="2">
                    <v-row>
                        <v-col cols="12" class="text-center">  
                            <div class="meri white--text heading font-weight-bold ">Reset your password</div>
                            </v-col>   
                    </v-row>
                    </v-toolbar>

                        <v-card-text>

                            <!-- <span class="white--text heading">Username</span> -->
                            <v-text-field  clear-icon="mdi-close" clearable hint="Enter your email address" prepend-icon="mdi-email" v-model="user.email" dark
                            label="Email"
                            :rules="[rules.required,rules.email]">
                            </v-text-field>

                            

                            </v-card-text>

                            <v-row justify="center">
                                <v-col class="text-center" cols="10">
                                    <v-btn class="white secondary--text" large block @click.prevent="resetPasswordCall()">
                                        <v-icon left>mdi-account-check</v-icon>
                                    Reset my password
                                    </v-btn>
                                </v-col>
                            <v-col class="text-center" cols="12">
                                    <div class="heading"><a class="white--text" @click.prevent="step=1">Click here to login</a></div>
                                </v-col>
                                <v-col class="text-center" cols="12">
                                    <div class="heading"><a class="white--text" @click.prevent="step=2">New user? Create an account</a></div>
                                </v-col>
                                
                            </v-row>
                        
                            
                
                </v-card>
                    </v-window-item>

                </v-window>
           
            <!-- Login card ends -->

            <!-- Social login links -->
             <div class="text-center mt-5">
                    <span class="primary--text mt-2 font-weight-bold">or login with</span>
                  </div>
             <div class="text-center mt-5" >
                <v-btn class="mx-2" color="#3b5998" 
                  fab dark>
                    <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn class="mx-2" color="#F4B400" 
                  fab dark>
                    <v-icon>mdi-google</v-icon>
                  
                </v-btn>
              <v-btn class="mx-2" color="#00acee" 
                  fab dark>
                    <v-icon>mdi-twitter</v-icon>
                  
                </v-btn>
            </div>
            <!-- Social login links end -->
            
            </v-col>
        </v-row>
        
    </v-container>
</template>

<script>
import {mapActions} from 'vuex'
import { api } from '../api/base'

export default {

   // Check if he route has step in the meta. Get the value of the route step and set it to the vm.step data property which   controls the window item vuetify transition.
    beforeRouteEnter (to, from, next) {
        const pageStep = to.matched.find(item => item.meta.step)

        if(pageStep){
            next(vm => {
                        vm.step = pageStep.meta.step
                    })
        }
         next()
    },
    props:['deviceModel'],
    data() {
        return {
            routeName:this.$route.meta.title,
            user:{
                name:'',
                email:'',
                password:'',
                telephone:null,
                terms:false
            },
             showEntries: false,
             step:1,
             rules: {
                required: value => !!value || 'Required.',
                telephone: (value) => {
                     //if (!value.trim()) return true;


                    if (!isNaN(parseInt(value)) && value.length==11) {
                        return true
                    } else {
                        return 'Enter a valid number'
                    }
                    
                    },
                counter: value => value.length <= 20 || 'Max 20 characters',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                }
                
        }
    }

},

methods: {
    goback(){
        window.history.back();
    },
    ...mapActions('user',['registerUser','loginUser','resetPassword']),

        // You need to do it this way to pass data to the action.
        registerUserCall(){
            this.registerUser(this.user)
        },
        loginUserCall(){
            let email = this.user.email
            let password = this.user.password
            let device = this.deviceModel
           
            this.loginUser({ email,password,device})
        },
        resetPasswordCall(){
            this.resetPassword(this.user.email)
        }
}


}
</script>

<style scoped>
.v-cardhold{
    background-color: #084d76;
    opacity: 1;
}

</style>
