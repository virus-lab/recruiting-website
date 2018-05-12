<template>
  <div class="hello">
    <div id="main-typo" class="main-font">
      <h1 lang="ko">우주기술</h1>
      <h1 lang="ko">대학생</h1>
      <h1 lang="ko">창업 아카데미</h1>
      <h1 lang="en" class="font-color_1">STAR-EXPLORATION</h1>
    </div>
    <a id="main-reg" href="#" lang="ko" class="sub-font">참가신청하기</a>
    <div id="main-day" class="main-font">
      <h2 id="main-target" class="font-color_1" lang="en">2018. 07. 16</h2>
      <h2 id="main-countdown" lang="en">
        <countdown :time="time" :interval="100">
          <template slot-scope="props">{{ props.days }}:{{ props.hours }}:{{ props.minutes }}:{{ props.seconds.split('.')[0] }}</template>
        </countdown>
        <div>
          <p class="countdown-sub">day</p>
          <p class="countdown-sub">hour</p>
          <p class="countdown-sub">minute</p>
          <p class="countdown-sub">second</p>
        </div>
      </h2>
    </div>
  </div>
</template>

<script>

export default {
  name: 'index',
  data () {
    var now = new Date()
    var newYear = new Date(2018, 7, 16)

    return {
      counting: false,
      time: newYear - now
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* for fonts */
@import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);

@font-face {
  font-family: 'campton-bolddemo';
  src: url('./../assets/campton-bolddemo-webfont.woff2') format('woff2'),
  url('./../assets/campton-bolddemo-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'campton-lightdemo';
  src: url('./../assets/campton-lightdemo-webfont.woff2') format('woff2'),
  url('./../assets/campton-lightdemo-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

:lang(ko) {
  font-family: 'Noto Sans KR', sans-serif;
}

:lang(en) {
  font-family: 'campton-bolddemo', sans-serif;
}

/* for font-color */
.font-color_1 {
  color: #00fcff;
}

/* for fullscreen */
.hello {
  background-image: url("./../assets/bg_space.jpg");

  height: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* for main-typo */
.main-font {
  font-size: 60px;
  font-weight: 800;
  color: white;
  line-height: 1.3em;
}

.sub-font {
  font-size: 48px;
  font-weight: 800;
  color: white;
  line-height: 1.3em;
  text-decoration: none;
}

#main-typo {
  padding-left: 50px;
  padding-top: 50px;
}

#main-day {
  position: absolute;
  bottom: 0px;
  right: 0px;
  margin-bottom: 50px;
}

#main-target {
  width: 400px;
  text-align: justify;
}

#main-countdown {
  width: 400px;
  text-align: justify;
}

#main-reg {
  position: absolute;
  left: 50%;
  width: 300px;
  margin-left: -168px;
  text-align: center;
  top: 50%;
  vertical-align: center;
  padding: 10px;
  border: 8px solid white;
}

#main-reg:hover {
  border: 8px solid #00fcff;
  color: #00fcff;
}

.countdown-sub {
  font-size: 12px;
  border-top: 1.5px solid #00fcff;
  width: 70px;
  text-align: center;
  height: 30px;
  line-height: 2.4em;
  float: left;
  margin-right: 20px;
  visibility: hidden;
  font-family: 'campton-lightdemo', sans-serif;
}

#main-countdown:hover .countdown-sub{
  visibility: visible;
}

@media screen and (max-width: 768px) {
  .main-font {
    font-size: 40px;
  }
  .sub-font {
    font-size: 24px;
  }
  #main-typo {
    position: absolute;
    padding-left: 0px;
    left: 50%;
    margin-left: -150px;
  }
  #main-day {
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 270px;
    text-align: right;
    margin-bottom: 10px;
  }
  #main-reg {
    position: absolute;
    width: 200px;
    left: 50%;
    margin-left: -120px;
  }
  .countdown-sub {
    font-size: 6px;
    border-top: 1.5px solid #00fcff;
    width: 48px;
    text-align: center;
    height: 30px;
    line-height: 2.4em;
    float: left;
    margin-right: 10px;
    visibility: hidden;
    font-family: 'campton-lightdemo', sans-serif;
  }
}

@media screen and (max-height: 600px) {
  .main-font {
    font-size: 30px;
  }
  #main-typo {
    padding-left: 0px;
    left: 50%;
    position: absolute;
    margin-left: -150px;
  }
}

</style>
