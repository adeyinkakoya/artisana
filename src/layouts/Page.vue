<template>
<v-sheet height="100%" color="white" class="fill-height" dark>

  <NavBar/>
    <slot/>
  

</v-sheet>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
    name:"Page",
    components:{
      NavBar
    }

}
</script>

<style>

</style>
