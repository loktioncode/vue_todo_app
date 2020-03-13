<template>
    <div class="holder">
        <h1>Hello {{ user_name }}</h1>
        <p> This page show how routes pass in data through the url</p>
    </div>
</template>


<script>
export default {
  name: 'Todos',
  data(){ //this data can be accessed in the template using {{ }}
    return {
        user_name : this.$route.params.name
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1"; 

.holder {
    background: #fff;
    text-align: center; 
    padding: 40px;
  }


</style>