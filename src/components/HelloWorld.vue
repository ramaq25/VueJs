<template>
    
    <div>PAGE 1</div>

    <router-link to="/">   
    <button :href="href" @click="navigate" class='whatever-you-want'>
      Home
    </button>
    </router-link>

    <router-link to="/second">   
    <button :href="href" @click="navigate" class='whatever-you-want'>
      Second
    </button>
    </router-link>

    <router-view></router-view>


</template>
  
<script>

    export default {
        name: "HelloWorld",
    }


</script>