<template>
  <li class="item">
    <a>
      <img v-bind:src="imgSrc"/>
      <div class="video_info">
        <p class="video_title">{{videoTitle}}</p>
        <p class="video_subtitle">{{videoSubTitle}}</p>
        <div class="i_num">
          <span><i class="b-icon b-icon-v-play"></i>{{playCount}}</span>
          <span><i class="b-icon b-icon-v-time"></i>{{playDuration}}</span>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
  export default{
    props: {
      item: {
        ID: 2520,
        Code: "211003910637",
        Name: "用鹰的视角看世界",
        SubName: "《最美中国》VR版猎鹰视角",
        Description: "Insta360全景相机协力大疆传媒拍摄《最美中国》VR版，其中猎鹰视角360全景使用Insta360 Nano拍摄。VR视频是最新的一种虚拟现实视频体验，要达到最好的体验效果，需要佩戴VR眼镜进行观看。",
        Thumbnail: "http://img.utovr.com/2/20170321/kdhpmmocciibbsw1_312_200.jpg",
        Time: "00:00:34",
        Size1K: 0,
        Boot1K: "",
        Path1K: "",
        HlsPath1K: "http://cache.utovr.com/s1gh5pfb3qbjew4a0y/L2_ghda7hb6292tvpkt.m3u8",
        Size2K: 0,
        Boot2K: "",
        Path2K: "",
        HlsPath2K: "http://cache.utovr.com/s1gh5pfb3qbjew4a0y/L2_ghda7hb6292tvpkt.m3u8",
        Size4K: 0,
        Boot4K: "",
        Path4K: "",
        HlsPath4K: "http://cache.utovr.com/s1gh5pfb3qbjew4a0y/L3_8fkbvjojgpmrdnr1.m3u8",
        SharedLink: "http://www.utovr.com/commonshare?id=2520&code=070dbb6024b5ef93784428afc71f2146&type=1",
        CreateTime: "2017-03-23 10:10:32",
        LastModifyTime: "2017-03-23 14:13:26",
        ViewCount: 1986,
        ThumbCount: 5,
        CommentCount: 0
      }
    },
    data(){
      return {
//        imgSrc: 'http://img.utovr.com/2/20170330/zocnouexeefiuz7p_351_198.jpg',
//        playCount: 35,
//        playDuration: '03:29',
//        videoTitle: '这种冷血动物，我喜欢！',
//        videoSubTitle: '走进佛罗里达大沼泽,与鳄鱼有个约会'
        imgSrc: this.item.Thumbnail,
        playCount: this.item.ViewCount,
        playDuration: this.item.Time,
        videoTitle: this.item.Name,
        videoSubTitle: this.item.Description
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

  audio, canvas, video {
    display: inline-block;
    *display: inline;
    *zoom: 1
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal
  }

  .btn a {
    width: 100%;
    height: 100%;
    color: white;
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

  .about_left ul {
    display: -webkit-box;
  }

  .xzon a {
    color: #1caffc;
  }

  .about_left li {
    -webkit-box-flex: 1;
    box-sizing: border-box;
    text-align: center;
    border-bottom: 2px solid #ddd;
    padding-bottom: 3px;
    line-height: 2.20rem;
  }

  .contact_item h3 {
    color: #323232;
    font-weight: bold;
    font-size: 14px;
  }

  .job_cont p {
    text-indent: 0;
  }

  .userPhoto img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
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

  .video_info {
    height: 54px;
  }

  /*下载*/
  .download_LO img {
    WIDTH: 38px;
    float: left;
  }

  .account_protocol_content .title {
    color: #323232;
    margin-top: 10px;
  }
</style>
