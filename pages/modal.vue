<template>
  <!-- <!DOCTYPE html><html><head><link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" /><link href="./css/main.css" rel="stylesheet" /><title>Document</title></head> -->
  <div class="container">
    <div class="space" />
    <div class="car-red" />
    <div class="car-gray" />

    <div class="shade" />
    <div class="address" />
    <span class="address-text">0xdeaDDeADDEaDdeadd</span>

    <div class="swap-box-container">
      <div class="swap-box" />
      <div class="fox" />
      <span class="swap-box-title">Swap</span>

      <div class="input-box" />
      <div class="input-left" />
      <div class="usdc-icon" />
      <span class="usdc-text">USDC</span>

      <span class="input-text">1234</span>
      <span class="balance">Balance: 1234.5678</span>

      <div class="v3_159">
        <div class="output-box" />
        <div class="output-left" />
        <div class="stsla-icon" />
        <span class="stsla-text">sTSLA</span>

        <span class="output-text">0.134567</span>
      </div>

      <div class="swap-button" />
      <span class="swap-button-text">Swap</span>
    </div>
  </div>
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
  left: 157px;
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
  left: 273px;
  transform: rotate(-32deg);
  overflow: hidden;
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
  left: 1104px;
  overflow: hidden;
}
.shade {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5099999904632568);
  opacity: 1;
  position: relative;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.address {
  width: 310px;
  height: 42px;
  background: linear-gradient(rgba(130,68,176,1), rgba(255,0,119,1));
  opacity: 1;
  position: absolute;
  top: 134px;
  left: 50px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
}
.address-text {
  width: 259px;
  color: rgba(255,255,255,1);
  position: absolute;
  top: 143px;
  left: 65px;
  font-family: Montserrat;
  font-weight: Regular;
  font-size: 20px;
  opacity: 1;
  text-align: left;
}
.swap-box-container {
  width: 550px;
  height: 641px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 253px;
  left: 70px;
  overflow: hidden;
}
.swap-box {
  width: 550px;
  height: 583px;
  background: linear-gradient(rgba(130,68,176,1), rgba(255,0,119,1));
  opacity: 1;
  position: absolute;
  top: 58px;
  left: 0px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  overflow: hidden;
}
.fox {
  width: 84px;
  height: 92px;
  background: url("../public/fox.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 238px;
  overflow: hidden;
}
.input-box {
  width: 446px;
  height: 70px;
  background: rgba(33,34,43,1);
  opacity: 1;
  position: absolute;
  top: 171px;
  left: 52px;
  border: 1px solid rgba(59,59,59,1);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  overflow: hidden;
}
.input-left {
  width: 207px;
  height: 70px;
  background: rgba(33,34,43,1);
  opacity: 1;
  position: absolute;
  top: 171px;
  left: 52px;
  border: 1px solid rgba(59,59,59,1);
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}
.swap-button {
  width: 446px;
  height: 52px;
  background: rgba(73,43,244,1);
  opacity: 1;
  position: absolute;
  top: 447px;
  left: 52px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  overflow: hidden;
}
.balance {
  width: 130px;
  color: rgba(255,255,255,1);
  position: absolute;
  top: 214px;
  left: 280px;
  font-family: Montserrat;
  font-weight: Regular;
  font-size: 14px;
  opacity: 1;
  text-align: left;
}
.swap-box-title {
  width: 68px;
  color: rgba(255,255,255,1);
  position: absolute;
  top: 104px;
  left: 52px;
  font-family: Montserrat;
  font-weight: SemiBold;
  font-size: 24px;
  opacity: 1;
  text-align: left;
}
.swap-button-text {
  width: 62px;
  color: rgba(255,255,255,1);
  position: absolute;
  top: 460px;
  left: 244px;
  font-family: Montserrat;
  font-weight: SemiBold;
  font-size: 22px;
  opacity: 1;
  text-align: left;
}
.usdc-text {
  width: 66px;
  color: rgba(255,255,255,1);
  position: absolute;
  top: 193px;
  left: 125px;
  font-family: Montserrat;
  font-weight: SemiBold;
  font-size: 22px;
  opacity: 1;
  text-align: left;
}
.input-text {
  width: 49px;
  color: rgba(255,255,255,1);
  position: absolute;
  top: 187px;
  left: 280px;
  font-family: Montserrat;
  font-weight: SemiBold;
  font-size: 22px;
  opacity: 1;
  text-align: left;
}
.v3_159 {
  width: 446px;
  height: 70px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 280px;
  left: 52px;
  overflow: hidden;
}
.output-box {
  width: 446px;
  height: 70px;
  background: rgba(33,34,43,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  border: 1px solid rgba(59,59,59,1);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  overflow: hidden;
}
.output-left {
  width: 207px;
  height: 70px;
  background: rgba(33,34,43,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  border: 1px solid rgba(59,59,59,1);
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}
.stsla-text {
  width: 68px;
  color: rgba(255,255,255,1);
  position: absolute;
  top: 22px;
  left: 73px;
  font-family: Montserrat;
  font-weight: SemiBold;
  font-size: 22px;
  opacity: 1;
  text-align: left;
}
.output-text {
  width: 96px;
  color: rgba(255,255,255,1);
  position: absolute;
  top: 16px;
  left: 228px;
  font-family: Montserrat;
  font-weight: SemiBold;
  font-size: 22px;
  opacity: 1;
  text-align: left;
}
.stsla-icon {
  width: 38px;
  height: 38px;
  background: url("../public/stsla-icon.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 16px;
  left: 16px;
  overflow: hidden;
}
.usdc-icon {
  width: 38px;
  height: 38px;
  background: url("../public/usdc-icon.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 187px;
  left: 68px;
  overflow: hidden;
}
</style>
