<template>
  <div class="list">
    <mt-index-list>
      <mt-index-section v-for="(item,key) in alphabet" :index="item.initial">
        <mt-cell v-for="cell in item.cells" :title="cell.name" :key="cell.id" :phonetic="cell.id" :index="cell.id">
          <mt-button type="default" size="small">∨</mt-button>
          <audio :id="'audio'+key">
            <source src="../assets/2.mp3" type="audio/mpeg">
          </audio>
        </mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<script>

  export default {
    name: 'list',
    data() {
      return {
        alphabet: []
      };
    },
    props: ['listData'],
    watch: {
      listData: function () {
        let id = 1;
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {
          if (this.listData[initial]) {
            let cells = this.listData[initial].map(name => {
              //if ((name['name'][0] === initial)) {
              name['id'] = id;
              id++;
              //console.log(name)
              return {name: name['name'], id: name['id']};
              //}
            });
            this.alphabet.push({
              initial,
              cells
            });
          }
        })
      }
    }
  };
</script>
<style lang="scss">
  .list {
    width: 100%;
    z-index: 0;
    text-align: left;
  }
  .phonetic{
    margin: 0 auto;
  }
  .mint-button--default{
    background-color: white !important;
    box-shadow: none !important;
  }
  .mint-button::after{
    background-color: #f6f8fa !important;
  }
  .sounds{
    background: url("../assets/sounds.svg") ;
    background-size: cover;
    width: 18px;
    height: 16px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 20px;
  }
</style>
