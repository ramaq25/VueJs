<template>
    
    <router-link to="/first">   
    <button :href="href" @click="navigate" class='whatever-you-want'>
      First
    </button>
    </router-link>

    <router-link to="/second">   
    <button :href="href" @click="navigate" class='whatever-you-want'>
      Second
    </button>
    </router-link>

</template>

<style scoped>
    button {
        padding: 15px;
        margin: 15px;
    }
</style>