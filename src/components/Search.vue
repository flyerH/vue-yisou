<template>
  <div class="search">
    <!--<mt-search v-model="value" :result="filterResult"></mt-search>-->
    <mt-search v-model="value">
      <mt-cell
        v-for="item in filterResult"
        :key="item.id"
        :value="item.name">

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
        result:''
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
</style>
