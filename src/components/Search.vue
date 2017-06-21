<template>
  <div class="search" id="search">
    <mt-search v-model="value">
      <mt-cell
        v-for="item in filterResult"
        :key="item.id"
        :index="item.id"
        :title="item.name"
        @click.native="findResult(item.id - 1)">
      </mt-cell>
    </mt-search>
  </div>
</template>

<script>
  export default {
    name: 'search',
    data () {
      return {
        value: '',
        result: ''
      }
    },
    props: ['listData'],
    watch: {
      listData: function () {
        //console.log(this.listData);
      },
    },
    computed: {
      filterResult: function () {
        let result = [];
        if (this.value) {   //value默认为空，不加判断下条语句会报错
          let firstLetter = this.value[0].toUpperCase();
          for (let i in this.listData[firstLetter]) {
            let temp = this.listData[firstLetter][i].name;
            if (new RegExp(this.value, 'i').test(temp))
            //result.push(temp);
              result.push(this.listData[firstLetter][i]);
          }
          return result;
        }
      }
    },
    methods: {
      findResult: function (index) {
        document.getElementById("cell" + index).scrollIntoView();
        document.getElementsByClassName("mint-searchbar-cancel")[0].click();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mint-search {
    margin-top: 40px;
    height: 100%;
  }

</style>
<style lang="scss">
  .mint-search-list {
    margin-top: 48px;
  }

  .mint-search-list a {
    z-index: 999;
  }

  li {
    list-style: none;
  }

  .description {
    display: none;
  }

  .mint-search-list .mint-cell-title img {
    display: none;
  }

  .mint-search-list-warp {
    box-shadow: 2px 2px 6px 0px rgba(38, 165, 255, 0.48);
    border-bottom: 1px solid #26a2ff;
    z-index: 1;       //设置z-index要在position上才生效
    position: relative;
  }
</style>
