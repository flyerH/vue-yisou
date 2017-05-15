<template>
  <div class="list">
    <mt-index-list>
      <mt-index-section v-for="item in alphabet" :index="item.initial">
        <mt-cell v-for="cell in item.cells" :title="cell.name" :key="cell.id" :value="cell.id" :phonetic="cell.id">
          <span class="phonetic">test</span>
          <mt-button type="default" size="small">∨</mt-button>
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
</style>
