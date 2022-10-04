<template>
    <div>
    
    <div>PAGE 2</div>

    <router-link to="/">   
    <button :href="href" @click="navigate" class='whatever-you-want'>
      Home
    </button>
    </router-link>

    <router-link to="/first">   
    <button :href="href" @click="navigate" class='whatever-you-want'>
      First
    </button>
    </router-link>
    </div>
    
    <router-view></router-view>
</template>
  
<script>
    export default {
        name: "HelloWorld",
    }
</script>

<style>
    button {
        display: flex;
        margin: 15px;
    }
</style>