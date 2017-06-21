<template>
  <div class="list">
    <mt-index-list>
      <mt-index-section v-for="(item,key) in alphabet" :index="item.initial" :key="key">
        <mt-cell v-for="cell in item.cells" :title="cell.name" :key="cell.id" :phonetic="cell.phonetic"
                 :id="'cell'+cell.id"
                 :index="cell.id" sounds="sounds">
          <mt-button type="default" size="small" @click.native="showDescription('cell'+cell.id,cell.description)">∨
          </mt-button>
          <audio :id="'audio'+cell.id" v-on:ended="stopgif(cell.id)">
            <source :src="cell.audio" type="audio/mpeg">
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
              return {
                name: name['name'],
                id: name['id'],
                phonetic: name['phonetic'],
                audio: name['audio'],
                description: name['description']
              };
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
      showDescription: function (id, description) {
        let thisdescription = document.getElementById(id).getElementsByClassName("description")[0];
        if (thisdescription.style.display === '') {
          thisdescription.style.display = 'block';
          if (description)
            thisdescription.innerText = description;
        }
        else
          thisdescription.style.display = ''
      },
      stopgif: function (id) {
          document.getElementById("sounds" + id).src = "/static/sounds.png";
      }
    },
    created(){
      (function preLoadImg() {
        var img = new Image();
        img.src = '/static/sounds.gif';
      })()
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
      flex:1;
    }
  }

  .phonetic {
    margin: 0 auto;
  }

  .mint-button--default {
    background-color: white !important;
    box-shadow: none !important;
  }

  .sounds {
    height: 16px;
    margin-left: 32px;

  }

  li {
    list-style: none;
  }

  .description {
    font-size: 14px;
    padding: 10px 10px;
    background-color: rgba(237,242,247,0.5);
  }

</style>
