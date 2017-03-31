<template>
  <div class="view-container" id="view-container">
    <ul class="contentUL" id="contentUL">
      <li class="item" v-for="video in videoList">
        <a>
          <img v-bind:src="video.sPicUrl"/>
          <div class="video_info">
            <p class="video_title">{{video.sVideoName}}</p>
            <p class="video_subtitle">{{video.sOneDes}}</p>
            <div class="i_num">
              <span><i class="b-icon b-icon-v-play"></i>{{video.iTotalPlayCnt}}</span>
              <span><i class="b-icon b-icon-v-time"></i>{{video.fScore}}</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import video from '../api/video'

  export default{
    props: {
      sId: {
        type: Number,
        default: 282
      }
    },
    data(){
      return {
        videoList: []
      }
    },
    created(){
      this.get();
    },
    methods: {
      get(){
        video.getList(this.sId, (err, list) => {
          if (err) {
            console.log(err);
          } else {
//            console.log(list.data);
            this.videoList = this.videoList.concat(list.data);
          }
        });
      }
    }
  }
</script>
<style scoped>

  /*  父容器布局方式*/
  .view-container {
    position: relative;
    -webkit-box-flex: 1;
    -webkit-transform: translate3d(0, 0, 0);
    -webkit-backface-visibility: hidden;
    overflow-x: hidden;
    overflow-y: auto;
  }

  /*// 子页面布局方式*/

  .item {
    margin-top: 10px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    display: inline-block;
  }

  .video_title {
    margin-top: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 13px;
    color: #333;
    pointer-events: none;
  }

  p.video_subtitle {
    color: #999;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 18px;
    font-size: 12px;
  }

  .contentUL {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding-left: 12px;
    padding-right: 12px;
  }

  .contentUL li {
    width: 50%;
    float: left;
    box-sizing: border-box;
    position: relative;
    padding-left: 4px;
    padding-right: 4px;
  }

  .contentUL a {
    display: block;
  }

  .contentUL img {
    display: block;
    width: 100%;
    /*height: 93px;*/
    background-position: center center;
    background-size: cover;
  }

  .b-icon {
    display: inline-block;
    vertical-align: middle;
    width: 19px;
    height: 15px;
    background: url("../assets/m_bofang.png") no-repeat;
    background-size: 16px auto;
  }

  .b-icon.b-icon-v-play {
    background-position: 0px -1px;
  }

  .b-icon.b-icon-v-time {
    background-position: 0px -27px;
  }

  .i_num span {
    width: 50%;
    float: left;
    box-sizing: border-box;
    position: relative;
    font-size: 12px;
    color: #999;
    margin-top: 3px;
  }

</style>
