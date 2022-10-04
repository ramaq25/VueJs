
<template>
    <div>{{ $route.params.id }}</div>
    <div>{{ userId }}</div>
  </template>
  
  <script>
  export default {

    computed: {
      userId() {
        return "qwe" + " " + this.items[this.$route.params.id]
      }
    },
    methods: {

    },
  
  data() {
      return {
          items: [] 
      }
  },

  created() {
  console.log("Created")
  this.items = [
    "Zero Text", "First Text", "Second Text"
  ]
},
  }
  </script>
  
  <style scoped>
  </style>