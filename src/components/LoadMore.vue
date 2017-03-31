<template>
  <div id="app">
    <list :page="page"></list>
    <a class="button" v-on:click="next">GO NEXT</a>
  </div>
</template>

<script>
  import List from '../components/List.vue'

  export default{
    data(){
      return {
        page: 1
      }
    },
    components: {
      'list': List
    },
    methods: {
      next: function () {
        this.page++;
      }
    }
  }
</script>

<style scoped>
  .button {
    display: block;
    width: 100%;
    background: #212121;
    color: #fff;
    font-weight: bold;
    text-align: center;
    padding: 1em;
    cursor: pointer;
    text-decoration: none;
  }

  .button span {
    margin-left: 2em;
    font-size: .5rem;
    color: #d6d6d6;
  }
</style>
