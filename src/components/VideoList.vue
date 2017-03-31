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
        video.getList((err, list) => {
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
  @-ms-viewport {
    width: device-width;
  }

  address, caption, cite, code, dfn, em, strong, th, var {
    font-style: normal;
    font-weight: normal;
  }

  img {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  html {
    height: 100%;
    font-size: 100%;
    background: #f7f7f7;
  }

  body {
    background: #fff;

    width: 100%;
    max-width: 640px;
    min-height: 100%;
    margin: 0 auto;
    -ms-touch-action: none;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    font-size: 14px;
  }

  ol, ul {
    list-style: none;
  }

  #showContent {
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    position: absolute;
    background-color: black;
  }

  body {
    font-family: "Microsoft Yahei", 微软雅黑, 宋体, Arial, sans-serif;
  }

  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    text-decoration: none;
    color: #333;
  }

  * {
    margin: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    padding: 0;
  }

  ul, ol {
    list-style: none;
  }

  #showPano {
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    position: absolute;
  }

  .backMap {
    height: 25px;
    padding: 5px;
    cursor: pointer;
    line-height: 25px;
    text-align: center;
    background-color: #000000;
    opacity: 0.5;
    right: 10px;
    position: absolute;
    top: 10px;
    color: white;
    border: 1px solid white;
    font-size: 10px;
    text-decoration: none;
  }

  audio, canvas, video {
    display: inline-block;
    *display: inline;
    *zoom: 1
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal
  }

  .allc {
    /* position: relative;*/
    width: 100%;
    height: 100%;
    text-align: center;
  }

  /*.bg {*/
  /*position: absolute;*/
  /*top: 0px;*/
  /*background-image: url("/images/download_bg.png");*/
  /*background-repeat: no-repeat;*/
  /*background-position: top;*/
  /*!*background-size: 100% 100%;*/
  /*width: 100%;*/
  /*height: 234.5px;*!*/
  /*background-size: contain;*/
  /*width: 100%;*/
  /*height: 100%;*/
  /*}*/

  .bgHelp {
    position: absolute;
    height: 45%;
    width: 100%;
    bottom: 0px;
  }

  .tipc {
    margin-top: 20px;
    text-align: center;
    color: #686868;
    font-size: 14px;
    letter-spacing: 4px;
  }

  .btndiv {
    position: relative;
    height: 38px;
    width: 100%;
    line-height: 38px;
    margin-top: 24px;
  }

  .topdiv {
    position: relative;
    width: 100%;
    height: 32px;
    margin: auto;
  }

  .btn {
    height: 100%;
    width: 110px;
    margin: auto;
    text-align: center;
    background-color: #ff8854;
    border-radius: 10px;
    font-size: 13px;
    font-weight: bold;
    color: white;
  }

  .btn a {
    width: 100%;
    height: 100%;
    color: white;
  }

  .btn2 {
    height: 100%;
    width: 110px;
    margin: auto;
    text-align: center;
    background-color: #68c5ff;
    border-radius: 10px;
    font-size: 13px;
    font-weight: bold;
    color: white;
    margin-top: 15px;
  }

  .btn2 a {
    width: 100%;
    height: 100%;
    color: white;
  }

  .downtip {
    margin-top: 20px;
    text-align: center;
    color: #686868;
    font-size: 12px;
    letter-spacing: 1px;
  }

  #header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 8888;
    width: 100%;
    height: 70px;
  }

  #header_aboutus {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 8888;
    width: 100%;
    height: 34px;
  }

  #main {
    position: relative;
    margin-top: 90px;
  }

  .top {
    position: relative;
    background: #68c5ff;
    color: #fff;
    line-height: 2.75rem;
    height: 2.75rem;
    width: 100%;
    display: -webkit-box;
    display: box;
    -webkit-box-pack: start;
    box-pack: start;
    -webkit-box-orient: horizontal;
    box-orient: horizontal;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  /*.top_logo {*/
  /*width: 79.5px;*/
  /*height: 100%;*/
  /*margin-left: 10px;*/
  /*background-image: url("/images/header_logo.png");*/
  /*background-repeat: no-repeat;*/
  /*background-position: center;*/
  /*background-size: contain;*/
  /*}*/

  .top_right {
    position: absolute;
    right: 0;
    top: 0;
  }

  .top_center {
    -webkit-box-flex: 1;
  }

  .link_text {
    margin-right: 10px;
    font-size: 14px;
    font-weight: bold;
    color: white;
  }

  .nav_inner {
    overflow: hidden;
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    -moz-overflow-scrolling: touch;
    background-color: #f7f7f7;
    border-bottom: 1px solid #d2d2d2;
    height: 34px;
  }

  .nav_list a {
    white-space: nowrap;
    display: inline-block;
    padding: 0 10px;
    color: #6a7989;
    text-decoration: none;
    font-size: 13px;
    line-height: 26px;
    height: 27px;
    margin: 5px 0px 5px 5px;
  }

  .nav_list {
    white-space: nowrap;
  }

  .nav_list .nav_on {
    border-bottom: 2px solid #1daffc;
    color: #1daffc;
  }

  .selected {
    color: #68c5ff;
  }

  .selected:after {
    position: absolute;
    bottom: 0px;
    left: 0px;
    content: "";
    width: 100%;
    height: 2px;
    margin: auto;
    /*border-radius: 2px;*/
    background-color: #68c5ff;
    background-repeat: repeat-x;
  }

  .desktop {

    width: 100%;
    height: 100%;
    overflow: hidden;

    display: -webkit-box;
    display: box;
    -webkit-box-pack: start;
    box-pack: start;
    -webkit-box-orient: vertical;
    box-orient: vertical;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .desktop:before {
    display: block;
    content: "";
    width: 100%;
    height: 70px;
  }

  .desktop_aboutus:before {
    display: block;
    content: "";
    width: 100%;
    height: 34px;
  }

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

  .page-container {
    z-index: 0;
    width: 100%;
    height: 100%; /* transform: translate(0px,10px);*/
  }

  .contentDiv {
    position: relative;
    padding: 10px 10px 0 0;
    min-height: 519px;
  }

  .item {
    margin-top: 10px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    display: inline-block;
  }

  /*.video_img {*/
  /*position: relative;*/
  /*height: 93px;*/
  /*background-image: url("/images/list_utovr.png");*/
  /*-webkit-background-size: cover;*/
  /*background-size: cover;*/
  /*}*/

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

  .video_count {
    margin-top: 4px;
    overflow: hidden;
    font-size: 10px;
    color: #9b9b9b;
    pointer-events: none;
  }

  .contentUL {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    width: 100%;

  }

  .contentUL li {
    width: 50%;
    float: left;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 5px;
  }

  .contentUL a {
    display: block;
    margin-left: 10px;
  }

  .contentUL img {
    display: block;
    width: 100%;
    /*height: 93px;*/
    background-position: center center;
    background-size: cover;
  }

  .loading {
    display: none;
    text-align: center;
    line-height: 24px;
    color: #999;
    padding: 10px 0;
  }

  /*底部样式*/
  .copyright {
    position: relative;
    border-top: 1px solid #d2d2d2;
    background-color: #f7f7f7;
    height: 50px;
    width: 100%;
    text-align: center;
    font-size: 10px;
    color: #5b5b5b;
  }

  #copyrightBom {
    height: 45px;
    width: 100%;
  }

  .crt {
    margin: 6px auto;
  }

  .downloadTip {
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 45px;
    display: none;
    max-width: 640px;
  }

  .downloadBG {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-color: black;
  }

  .downloadContent {
    position: relative;
    height: 45px;
    line-height: 45px;
    vertical-align: middle;
    width: 100%;
    /*display: -webkit-box;
        display: box;
        -webkit-box-pack: start;
        box-pack: start;
        -webkit-box-orient: horizontal;
        box-orient: horizontal;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;*/
  }

  /*.downLoadClose {*/
  /*float: left;*/
  /*width: 12px;*/
  /*height: 20px;*/
  /*margin-left: 10px;*/
  /*background-repeat: no-repeat;*/
  /*background-position: center;*/
  /*background-size: contain;*/
  /*background-image: url("/images/close_btn.png");*/
  /*position: absolute;*/
  /*right: 5px;*/
  /*top: 1px;*/
  /*}*/

  .downloadLogo {
    width: 158.5px;
    float: left;
    height: 100%;
    margin-left: 10px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-image: url("/images/download_logo.png");
  }

  .downloadBtn {
    position: absolute;
    right: 33px;
    top: 9.5px;
    width: 75px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    border-radius: 20px;
    background-color: white;
    font-size: 12px;
    color: #5b5b5b;
  }

  .openBtn {
    position: absolute;
    right: 88px;
    top: 9.5px;
    width: 70px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    border-radius: 20px;
    background-color: white;
    font-size: 12px;
    color: #5b5b5b;
  }

  #deskTopEventDom {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /*
        background-color: green;
        opacity: 0.5;*/
  }

  .footer {
    width: 100%;
    float: left;
    padding-top: 20px;
  }

  /*!*字体图标*!*/
  /*@font-face {*/
  /*font-family: "iconfont";*/
  /*src: url('iconfont.eot'); !* IE9*!*/
  /*src: url('iconfont.eot?#iefix') format('embedded-opentype'), !* IE6-IE8 *! url('iconfont.woff') format('woff'), !* chrome、firefox *! url('iconfont.ttf') format('truetype'), !* chrome、firefox、opera、Safari, Android, iOS 4.2+*! url('iconfont.svg#iconfont') format('svg'); !* iOS 4.1- *!*/
  /*}*/

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 13px;
    margin-right: 3px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    color: #a3a2a2;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-01:before {
    content: "\e600";
  }

  .icon-02:before {
    content: "\e601";
  }

  .icon-03:before {
    content: "\e602";
  }

  .icon-04:before {
    content: "\e603";
  }

  .icon-05:before {
    content: "\e604";
  }

  .icon-06:before {
    content: "\e605";
  }

  .icon-07:before {
    content: "\e606";
  }

  .icon-08:before {
    content: "\e607";
  }

  .icon-09:before {
    content: "\e608";
  }

  .icon-10:before {
    content: "\e609";
  }

  .icon-13:before {
    content: "\e60a";
  }

  .icon-14:before {
    content: "\e60b";
  }

  .icon-15:before {
    content: "\e60c";
  }

  .icon-16:before {
    content: "\e60d";
  }

  .icon-17:before {
    content: "\e60e";
  }

  .icon-18:before {
    content: "\e60f";
  }

  .icon-20:before {
    content: "\e610";
  }

  .icon-22:before {
    content: "\e611";
  }

  .icon-23:before {
    content: "\e612";
  }

  .icon-24:before {
    content: "\e613";
  }

  .icon-12:before {
    content: "\e614";
  }

  .icon-11:before {
    content: "\e615";
  }

  .icon-27:before {
    content: "\e616";
  }

  .icon-26:before {
    content: "\e617";
  }

  .icon-271:before {
    content: "\e618";
  }

  .icon-28:before {
    content: "\e619";
  }

  .icon-29:before {
    content: "\e61a";
  }

  .icon-30:before {
    content: "\e61b";
  }

  .icon-31:before {
    content: "\e61c";
  }

  .icon-32:before {
    content: "\e61d";
  }

  .icon-33:before {
    content: "\e61e";
  }

  .icon-34:before {
    content: "\e61f";
  }

  .icon-35:before {
    content: "\e620";
  }

  .icon-36:before {
    content: "\e621";
  }

  .icon-37:before {
    content: "\e622";
  }

  .icon-38:before {
    content: "\e623";
  }

  .icon-39:before {
    content: "\e624";
  }

  .icon-41:before {
    content: "\e625";
  }

  .icon-40:before {
    content: "\e626";
  }

  .icon-1:before {
    content: "\e627";
  }

  .icon-11:before {
    content: "\e628";
  }

  .icon-12:before {
    content: "\e629";
  }

  .icon-13:before {
    content: "\e62a";
  }

  .icon-14:before {
    content: "\e62b";
  }

  .icon-46:before {
    content: "\e62c";
  }

  .icon-47:before {
    content: "\e62d";
  }

  .icon-48:before {
    content: "\e62e";
  }

  .icon-49:before {
    content: "\e62f";
  }

  .icon-50:before {
    content: "\e630";
  }

  .icon-55:before {
    content: "\e631";
  }

  .icon-51:before {
    content: "\e632";
  }

  .icon-52:before {
    content: "\e633";
  }

  .icon-53:before {
    content: "\e634";
  }

  .icon-54:before {
    content: "\e635";
  }

  .icon-56:before {
    content: "\e636";
  }

  .icon-57:before {
    content: "\e637";
  }

  .icon-58:before {
    content: "\e638";
  }

  .icon-59:before {
    content: "\e639";
  }

  .icon-60:before {
    content: "\e63a";
  }

  .icon-64:before {
    content: "\e63b";
  }

  .icon-65:before {
    content: "\e63c";
  }

  .icon-61:before {
    content: "\e63d";
  }

  .icon-62:before {
    content: "\e63e";
  }

  .icon-63:before {
    content: "\e63f";
  }

  .icon-66:before {
    content: "\e640";
  }

  .icon-67:before {
    content: "\e641";
  }

  .icon-68:before {
    content: "\e642";
  }

  .icon-69:before {
    content: "\e643";
  }

  .icon-70:before {
    content: "\e644";
  }

  .icon-73:before {
    content: "\e645";
  }

  .icon-74:before {
    content: "\e646";
  }

  .icon-75:before {
    content: "\e647";
  }

  .icon-77:before {
    content: "\e648";
  }

  .icon-78:before {
    content: "\e649";
  }

  .icon-71:before {
    content: "\e64a";
  }

  .icon-72:before {
    content: "\e64b";
  }

  .icon-82:before {
    content: "\e64c";
  }

  .icon-83:before {
    content: "\e64d";
  }

  .icon-84:before {
    content: "\e64e";
  }

  .icon-85:before {
    content: "\e64f";
  }

  .icon-79:before {
    content: "\e650";
  }

  .icon-80:before {
    content: "\e651";
  }

  .icon-81:before {
    content: "\e652";
  }

  .icon-91:before {
    content: "\e653";
  }

  .icon-86:before {
    content: "\e654";
  }

  .icon-87:before {
    content: "\e655";
  }

  .icon-88:before {
    content: "\e656";
  }

  .icon-89:before {
    content: "\e657";
  }

  .icon-90:before {
    content: "\e658";
  }

  .icon-92:before {
    content: "\e659";
  }

  .icon-93:before {
    content: "\e65a";
  }

  .about_left ul {
    display: -webkit-box;
  }

  .xzon a {
    color: #1caffc;
  }

  .about_right {
    padding: 10px;
    line-height: 26px;
    font-size: 13px;
    color: #666;
    text-indent: 2rem;
  }

  h1.livetit {
    font-size: 16px;
    text-indent: 0;
    color: #323232;
  }

  .about_left li {
    -webkit-box-flex: 1;
    box-sizing: border-box;
    text-align: center;
    border-bottom: 2px solid #ddd;
    padding-bottom: 3px;
    line-height: 2.20rem;
  }

  li.xzon {
    border-bottom: 2px solid #1caffc;
  }

  .contact_item h3 {
    color: #323232;
    font-weight: bold;
    font-size: 14px;
  }

  .contact_item {
    margin-bottom: 18px;
    text-indent: 5px;
  }

  p.job_tit {
    font-weight: bold;
    color: #323232;
    margin-top: 20px;
    text-indent: 0;
  }

  h1.about_tit {
    font-size: 16px;
    text-indent: 0;
    color: #323232;
    margin-bottom: 10px;
  }

  .job_cont p {
    text-indent: 0;
  }

  /*个人主页*/
  .home_top {
    position: relative;
    background: #fff;
    color: #333;
  }

  /*.home_top .back {*/
  /*float: left;*/
  /*background: url("/images/n_icon_home.png") no-repeat 8px 11px;*/
  /*display: block;*/
  /*width: 2.8125rem;*/
  /*height: 2.8125rem;*/
  /*background-size: 18px auto;*/
  /*color: #666;*/
  /*padding-left: 27px;*/
  /*font-size: 0.75rem;*/
  /*}*/

  /*.userInfo {*/
  /*background: url("/images/my_head_bg@3x.png") repeat-x 0 0;*/
  /*height: 105px;*/
  /*width: 100%;*/
  /*padding-top: 17px;*/
  /*text-align: center;*/
  /*}*/

  .userPhoto {
    width: 50px;
    height: 50px;
    padding: 2px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: -1px 1px 5px #666;
    margin: 0 auto;
    position: relative;
  }

  .userPhoto img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .user .userCon1 {
    height: 15px;
    margin-top: 12px;
  }

  .userCon1 .name {
    display: inline-block;
    font-size: 16px;
    color: #fff;
    color: #fff;
    line-height: 40px;
  }

  .home_zp {
    background: #fff;
  }

  .indexTit {
    font-size: 14px;
    margin-bottom: 10px;
    color: #323232;
  }

  .i_num {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    width: 100%;
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

  .num_time {
    display: inline-block;
    clear: both;
    width: 100%;
  }

  .play_num {
    background: url("../assets/m_bofang.png") no-repeat 0 1px;
    background-size: 18px auto;
    padding-left: 21px;
    font-size: 12px;
    color: #999;
    margin-top: 6px;
    float: left;
    margin-right: 17px;
    border-right: 1px solid #ddd;
    padding-right: 16px;
  }

  .play_num.shijian {
    background-position: 0 -29px;
    border-right: none;
  }

  .video_info {
    height: 54px;
  }

  /*下载*/
  .download_LO img {
    WIDTH: 38px;
    float: left;
  }

  .download_LO {
    padding: 7px;
    color: #fff;
    display: inline-block;
  }

  .downTest {
    float: left;
    font-size: 0.75rem;
    line-height: 17px;
  }

  .guide_txt {
    display: none;
  }

  .account_protocol_content {
    padding: 15px;
    line-height: 24px;
    font-size: 12px;
    color: #666;
  }

  .account_protocol_content .title {
    color: #323232;
    margin-top: 10px;
  }
</style>
