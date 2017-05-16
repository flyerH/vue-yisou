<template>
  <div id="app">
    <mt-header fixed title="一搜"></mt-header>
    <search :listData="listData"></search>
    <list :listData="listData"></list>
  </div>
</template>

<script>
  import search from './components/Search.vue';
  import list from './components/List.vue';

  export default {
    name: 'app',
    components: {
      search,
      list
    },
    data(){
      return {
        listData: []
      }
    },
    methods: {
      getList: function () {
        this.$http.get('/getdata')
          .then((response) => {
            this.listData = response.data;
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    created() {
      this.getList();
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  body {
    margin: 0;
    padding: 0;
  }

</style>
