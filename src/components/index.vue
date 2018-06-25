<template>
  <div class="main">

    <b-carousel id="main-carousel" indicators :interval="4000">
      <b-carousel-slide img-blank id="main-carousel-s1">
      </b-carousel-slide>
      <b-carousel-slide img-blank id="main-carousel-s2">
      </b-carousel-slide>
      <b-carousel-slide img-blank id="main-carousel-s3">
      </b-carousel-slide>
      <b-carousel-slide img-blank id="main-carousel-s4">
      </b-carousel-slide>
      <b-carousel-slide img-blank id="main-carousel-s5">
      </b-carousel-slide>
      <b-carousel-slide img-blank id="main-carousel-s6">
      </b-carousel-slide>
      <b-carousel-slide img-blank id="main-carousel-s7">
      </b-carousel-slide>
    </b-carousel>

    <div class="bg-opacity">
    </div>

    <div id="main-typo" class="main-font">
      <h1 lang="ko">스타트업</h1>
      <h1 lang="ko">가치&문화 확산</h1>
      <h1 lang="ko">네트워크</h1>
      <h1 lang="en" class="font-color_1">VIRUS</h1>
    </div>
    <a id="main-reg" href="https://goo.gl/forms/ckhf04oYu1YOpuZH3" lang="ko" class="sub-font">지원하기</a>
    <div id="main-day" class="main-font">
      <h1 id="main-target" class="font-color_1" lang="en">2018. 07. 03</h1>
      <h1 id="main-countdown" lang="en">
        <countdown :time="time" :interval="100">
          <template slot-scope="props">{{ props.days }}:{{ props.hours }}:{{ props.minutes }}:{{ props.seconds.split('.')[0] }}</template>
        </countdown>
        <div>
          <p class="countdown-sub">day</p>
          <p class="countdown-sub">hour</p>
          <p class="countdown-sub">minute</p>
          <p class="countdown-sub">second</p>
        </div>
      </h1>
    </div>
    <div id="main-bg-assets">
      <img id="bg_assets_1" src="./../assets/bg_assets_1.png" />
      <img id="bg_assets_1_2" src="./../assets/bg_assets_1.png" />
      <img id="bg_assets_2" src="./../assets/bg_assets_2.png" />
      <img id="bg_assets_3" src="./../assets/bg_assets_3.png" />
      <img id="bg_assets_3_1" src="./../assets/bg_assets_3.png" />
      <img id="bg_assets_4" src="./../assets/bg_assets_4.png" />
      <img id="bg_assets_4_1" src="./../assets/bg_assets_4.png" />
      <img id="bg_assets_5" src="./../assets/bg_assets_5.png" />
      <img id="bg_assets_6" src="./../assets/bg_assets_6.png" />
      <img id="bg_assets_7" src="./../assets/bg_assets_7.png" />
      <img id="bg_assets_7_1" src="./../assets/bg_assets_7.png" />
    </div>
    <div id="main-logos">
      <img src="./../assets/virus-logo-white.png" />
      <br/>
      <img src="./../assets/virus-logo-border.png" />
      <br/>
      <img src="./../assets/virus-logo-white.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    var now = new Date()
    var newYear = new Date(2018, 6, 4)

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
  color: white;
}

/* for carousel fullscreen - background */
#main-carousel {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
}

#main-carousel-s1 {
  background-image: url("./../assets/bg_full_1.jpeg");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#main-carousel-s2 {
  background-image: url("./../assets/bg_full_2.jpeg");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#main-carousel-s3 {
  background-image: url("./../assets/bg_full_3.jpeg");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#main-carousel-s4 {
  background-image: url("./../assets/bg_full_4.jpeg");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#main-carousel-s5 {
  background-image: url("./../assets/bg_full_5.jpeg");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#main-carousel-s6 {
  background-image: url("./../assets/bg_full_6.jpeg");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#main-carousel-s7 {
  background-image: url("./../assets/bg_full_7.jpeg");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.bg-opacity {
  background: linear-gradient( 45deg, rgba(130, 6, 201, 0.8), rgba(50, 161, 255, 0.8) );
  /* background-color: rgba(0, 0, 0, 0.8); */
  height: 100%;
  position: absolute;
  width: 100%;
}

/* for main-typo */
.main-font {
  font-size: 60px;
  font-weight: 800;
  color: white;
  line-height: 1.3em;
}

h1 {
  font-size: 60px;
  font-weight: 800;
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
  position: absolute;
  top: 0px;
  padding-left: 50px;
  padding-top: 50px;
}

#main-typo h1:last-child {
  font-size: 68px;
}
#main-day {
  position: absolute;
  bottom: 0px;
  right: 0px;
  margin-bottom: 30px;
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
  border-top: 1.5px solid white;
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

#main-logos {
  position: absolute;
  right: 50px;
  top: 50px;
}

#main-logos img {
  width: 200px;
  margin-bottom: 10px;
}

/* bg-assets */
#main-bg-assets img {
  position: absolute;
  width: 100px;
  animation-timing-function: ease-in-out;
  animation: assets 2s infinite alternate;
  -webkit-animation: assets 2s infinite alternate;
}

#bg_assets_1 {
  /* s */
  left: 40%;
  bottom: 5%;
}

#bg_assets_1_2 {
  top: 50px;
  left: 30%;
}

#bg_assets_2 {
  /* triangle */
  top: 40%;
  right: 15%;
}

#bg_assets_3 {
  /* r */
  top: 20%;
  right: 30%;
}

#bg_assets_3_1 {
  /* r */
  bottom: 20px;
  left: 20px;
  -ms-transform: rotate(60deg); /* IE 9 */
  -webkit-transform: rotate(60deg); /* Safari 3-8 */
  transform: rotate(60deg);
}

#bg_assets_4 {
  /* i */
  top: 60%;
  right: 30%;
}

#bg_assets_4_1 {
  left: 30px;
  top: 50%;
}

#bg_assets_5 {
  /* vv */
  top: 300px;
  left: 30%;
}

#bg_assets_6 {
  /* u */
  left: 25%;
  bottom: 20%;
}

#bg_assets_7 {
  /* v */
  left: 50%;
  top: 50px;
}

#bg_assets_7_1 {
  /* v */
  top: 55%;
  right: 30px;
  -ms-transform: rotate(40deg); /* IE 9 */
  -webkit-transform: rotate(40deg); /* Safari 3-8 */
  transform: rotate(40deg);
}

@keyframes assets {
  0% { margin-top: 0px; margin-bottom: 25px;}
  100% { margin-top: 25px; margin-bottom: 0px;}
}

/* for responsive */
/* for phone */
@media screen and (max-width: 768px) {
  .main-font {
    font-size: 40px;
  }
  h1 {
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
    border-top: 1.5px solid white;
    width: 48px;
    text-align: center;
    height: 30px;
    line-height: 2.4em;
    float: left;
    margin-right: 10px;
    visibility: hidden;
    font-family: 'campton-lightdemo', sans-serif;
  }
  #main-logos {
    visibility: hidden;
  }
  #main-bg-assets {
    visibility: hidden;
  }
}

/* for iphone 5 */
@media screen and (max-height: 600px) {
  .main-font {
    font-size: 30px;
  }
  h1 {
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
