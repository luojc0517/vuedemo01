<template>
  <div>
    <div class="mod-header" style="width:100%;overflow:hidden;">
      <i class="logo"></i>
      <span class="header-name">VR专区</span>
      <div class="icon-search-wrap">
        <i class="G-ico G-ico-search"></i>
      </div>
    </div>
    <nav-tab v-on:navClickEvent="onNavClick"></nav-tab>
    <video-list v-for="item in list" :sId="item.id" v-bind:key="item.id" v-show="item.active"></video-list>
  </div>

</template>

<script>
  import VideoList from '../components/VideoList.vue'
  import NavTab from  '../components/NavTab.vue'
  export default{
    data: function () {
      return {
        idList: [
          282
        ],
        list: [
          {
            id: 282,
            active: true
          }
        ]
      }
    },
    components: {
      'video-list': VideoList,
      'nav-tab': NavTab
    },
    methods: {
      onNavClick: function (items, index) {
        console.log(items[index].sId + " " + items[index].sName);
        var activeId = items[index].sId;
        // 新增元素
        if (this.idList.indexOf(items[index].sId) == -1) {
          this.idList.push(items[index].sId);
          this.list.push({id: items[index].sId, active: true});
        }
        // 先全部置为false
        this.list.forEach(function (item) {
          if (item.id == activeId) {
            item.active = true;
          } else {
            item.active = false;
          }

        });

      }
    }
  }
</script>

<style>
  .mod-header {
    z-index: 900;
    overflow: hidden;
    position: relative;
    line-height: 44px;
    font-size: 18px;
    background-color: #376be6;
    color: #fff;
  }

  .mod-header .header-name {
    padding-left: 45px;
  }

  .mod-header i.logo {
    background-image: url(../assets/qblogo.png);
    background-repeat: no-repeat;
    background-size: cover;
    height: 21px;
    width: 18px;
    left: 14px;
    margin-top: -10px;
    position: absolute;
    top: 50%;
    font-size: 220%;
  }

</style>
