<template>
  <div class="list">
    <mt-index-list>
      <mt-index-section v-for="(item,key) in alphabet" :index="item.initial">
        <mt-cell v-for="cell in item.cells" :title="cell.name" :key="cell.id" :phonetic="cell.id" :id="'cell'+cell.id"
                 :index="cell.id" sounds="sounds">
          <mt-button type="default" size="small" @click.native="showDescription('cell'+cell.id)">∨</mt-button>
          <audio :id="'audio'+cell.id" v-on:ended="stopgif(cell.id)">
            <source src="/static/2.mp3" type="audio/mpeg">
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
    },
    methods: {
      showDescription: function (id) {
        let thisdescription = document.getElementById(id).getElementsByClassName("description")[0];
        if (thisdescription.style.display === '')
          thisdescription.style.display = 'block';
        else
          thisdescription.style.display = ''
      },
      stopgif: function (id) {
        document.getElementById("sounds"+id).style.backgroundImage="url(/static/sounds.svg)";
      }
    }
  };
</script>
<style lang="scss">
  .list {
    width: 100%;
    z-index: 0;
    text-align: left;

    .phonetic {
      vertical-align: middle;
      margin-left: 32px;
    }
  }

  .phonetic {
    margin: 0 auto;
  }

  .mint-button--default {
    background-color: white !important;
    box-shadow: none !important;
  }

  .mint-button::after {
    background-color: #f6f8fa !important;
  }

  .sounds {
    background: url("/static/sounds.svg");
    background-size: cover;
    width: 18px;
    height: 16px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 20px;
  }

  li {
    list-style: none;
  }

  .description{
    font-size: 14px;
    padding: 0 10px;
    background-color: #edf2f7;
  }

</style>
