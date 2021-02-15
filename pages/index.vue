<template>
  <body>
    <div class="container">
      <div class="space" />
      <div class="car-red" />

      <span class="title">Get to the Moon
        with your sTSLA
      </span>

      <div class="button" />

      <span class="button-text">Get sTSLA</span>

      <span class="paragraph">Synthetix is the backbone for derivatives
        trading in DeFi, allowing anyone, anywhere
        to gain on-chain exposure to a vast range
        of assets.
      </span>

      <div class="car-gray" />
      <div class="github-icon" />
      <div class="twitter-icon" />
      <div class="network-icon" />
    </div>
  </body>
</template>

<style>
* {
  overflow-x: hidden;
  padding: 0px !important;
  margin: 0px !important;
}
.container {
  width: 100%;
  height: 1024px;
  background: linear-gradient(rgba(0,2,75,1), rgba(39,30,110,1));
  opacity: 1;
  position: relative;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.space {
  width: 100%;
  height: 100%;
  background: url("../public/space.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 162px;
  overflow: hidden;
}
.car-red {
  width: 318px;
  height: 155px;
  background: url("../public/car-red.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 580px;
  left: 278px;
  transform: rotate(-32deg);
  overflow: hidden;
}
.title {
  width: 470px;
  color: rgba(255,255,255,1);
  position: absolute;
  top: 134px;
  left: 70px;
  font-family: Roboto Condensed;
  font-weight: Bold;
  font-size: 64px;
  opacity: 1;
  text-align: left;
}
.button {
  width: 186px;
  height: 48px;
  background: linear-gradient(rgba(130,68,176,1), rgba(255,0,119,1));
  opacity: 1;
  position: absolute;
  top: 571px;
  left: 70px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  overflow: hidden;
}
.button-text {
  width: 125px;
  color: rgba(255,255,255,1);
  position: absolute;
  top: 581px;
  left: 101px;
  font-family: Montserrat;
  font-weight: SemiBold;
  font-size: 20px;
  opacity: 1;
  text-align: left;
}
.paragraph {
  width: 519px;
  color: rgba(147,159,189,1);
  position: absolute;
  top: 360px;
  left: 70px;
  font-family: Montserrat;
  font-weight: Regular;
  font-size: 24px;
  opacity: 1;
  text-align: left;
}
.car-gray {
  width: 523px;
  height: 297px;
  background: url("../public/car-gray.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 740px;
  left: 331px;
  overflow: hidden;
}
.github-icon {
  width: 38px;
  height: 37px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 809px;
  left: 70px;
}
.twitter-icon {
  width: 41px;
  height: 34px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 873px;
  left: 70px;
}
.network-icon {
  width: 23px;
  height: 36px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 934px;
  left: 77px;
}
</style>
