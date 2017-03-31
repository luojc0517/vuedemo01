<template>
  <div class="mod-nav">
    <ul>
      <li :class="[commonClass,item.active?activeClass:'']" v-for="(item,index) in items"
          v-on:click="navClickEvent(items,index)">
        <a style="word-spacing:0;">{{item.sName}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    data: function () {
      return {
        commonClass: 'liWrap',
        activeClass: 'active',
        items: [
          {
            sId: 282,
            sName: '综艺',
            active: true
          },
          {
            sId: 410,
            sName: '动漫',
            active: false
          },
          {
            sId: 473,
            sName: 'NBA',
            active: false
          },
          {
            sId: 654,
            sName: '娱乐',
            active: false
          },
          {
            sId: 164,
            sName: '游戏',
            active: false
          },
          {
            sId: 524,
            sName: '电视剧',
            active: false
          }
        ],
        activeId: 282
      }
    },
    methods: {
      navClickEvent: function (items, index) {
        items.forEach(function (item) {
          item.active = false;
        });
        items[index].active = true;
        this.activiId = items[index].sId;
        this.$emit('navClickEvent', items, index);
      }
    }
  }
</script>

<style scoped>

  .mod-nav {
    width: 100%;
    position: relative;
    overflow: hidden;
    z-index: 1010;
    box-sizing: border-box;
    height: 44px;
    background-color: #fff;
  }

  .mod-nav li {
    padding: 14px 16px;
  }

  .mod-nav .liWrap {
    float: left;
    color: #666;
  }

  .mod-nav .liWrap.active {
    color: #376be6;
  }

</style>
