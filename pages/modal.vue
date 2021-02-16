<template>
  <div class="container">
    <div class="space" />
    <div class="car-red" />
    <div class="car-gray" />

    <div
      class="shade"
      @click="$router.push({ path: '/' })"
    />

    <div class="address" />
    <span class="address-text">{{ currentAddress }}</span>

    <div class="swap-box-container">
      <div class="swap-box" />
      <div class="fox" />
      <span class="swap-box-title">Swap</span>

      <div class="input-box" />
      <div class="input-left" />
      <div class="usdc-icon" />
      <span class="usdc-text">USDC</span>

      <input
        v-model="inputAmountText"
        class="input-text"
        placeholder="input amount"
        type="number"
        min="0"
        step="0.000001"
      >

      <span
        class="balance"
        @click="setMaxInput()"
      >
        Balance: {{ formatUSDC(balanceUSDC) }}
      </span>

      <div class="v3_159">
        <div class="output-box" />
        <div class="output-left" />
        <div class="stsla-icon" />
        <span class="stsla-text">sTSLA</span>

        <span class="output-text">{{ formatSTSLA(outputAmount) }}</span>
      </div>

      <div class="swap-button" />
      <span class="swap-button-text">Swap</span>
    </div>
  </div>
</template>

<script>
import { ethers } from 'ethers';

import detectEthereumProvider from '@metamask/detect-provider';

// TODO: real address
const TSLA_EXCHANGE = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const UNISWAP_ROUTER = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';
const DELEGATE_APPROVALS = '0x15fd6e554874B9e70F832Ed37f231Ac5E142362f';
const SWAPS = '0xD1602F68CC7C4c7B59D686243EA35a9C73B0c6a2';
const USDC = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
const SUSD = '0x57Ab1ec28D129707052df4dF418D58a2D46d5f51';
const STSLA = '0x918dA91Ccbc32B7a6A0cc4eCd5987bbab6E31e6D';
const EXCHANGE_RATES = '0xd69b189020EF614796578AfE4d10378c5e7e1138';

export default {
  data: function () {
    return {
      provider: null,

      currentAddress: null,

      balanceUSDC: ethers.constants.Zero,
      balanceSTSLA: ethers.constants.Zero,

      inputAmountText: '',

      outputAmount: ethers.constants.Zero,

      approvedUSDC: ethers.constants.Zero,
      approvedSynthetix: false,
    };
  },

  computed: {
    inputAmount: function () {
      try {
        return this.parseUSDC(this.inputAmountText || '0');
      } catch (e) {
        return ethers.constants.Zero;
      }
    },
  },

  watch: {
    currentAddress: async function () {
      const provider = new ethers.providers.Web3Provider(global.ethereum);
      const signer = await provider.getSigner();

      const usdc = new ethers.Contract(
        USDC,
        [
          'function balanceOf (address) public view returns (uint256)',
          'function allowance (address, address) public view returns (uint256)',
        ],
        signer
      );

      const delegateApprovals = new ethers.Contract(
        DELEGATE_APPROVALS,
        [
          'function canExchangeFor (address, address) public view returns (bool)',
        ],
        signer
      );

      this.balanceUSDC = await usdc.callStatic.balanceOf(
        this.currentAddress
      );

      this.approvedUSDC = await usdc.callStatic.allowance(
        this.currentAddress,
        TSLA_EXCHANGE
      );

      this.approvedSynthetix = await delegateApprovals.callStatic.canExchangeFor(
        this.currentAddress,
        TSLA_EXCHANGE
      );
    },

    inputAmount: async function () {
      const provider = new ethers.providers.Web3Provider(global.ethereum);

      const swaps = new ethers.Contract(
        SWAPS,
        [
          'function get_best_rate (address, address, uint256) returns (address, uint256)',
        ],
        provider
      );

      const exchanger = new ethers.Contract(
        EXCHANGE_RATES,
        [
          'function rateForCurrency (bytes32) view returns (uint256)',
          'function getAmountsForExchange (uint256, bytes32, bytes32) view returns (uint256, uint256, uint256)',
        ],
        provider
      );

      const [, susd] = await swaps.callStatic.get_best_rate(
        USDC,
        SUSD,
        this.inputAmount
      );

      const stslaRate = await exchanger.rateForCurrency(
        ethers.utils.formatBytes32String('sTSLA')
      );

      this.outputAmount = susd.mul(ethers.utils.parseEther('1')).div(stslaRate);
    },
  },

  mounted: async function () {
    const provider = await detectEthereumProvider();

    if (provider) {
      provider.enable();

      provider.on('accountsChanged', function (accounts) {
        this.currentAddress = ethers.utils.getAddress(accounts[0]);
      }.bind(this));

      const accounts = await provider.request({ method: 'eth_accounts' });

      this.currentAddress = ethers.utils.getAddress(accounts[0]);
    } else {
      alert('Metamask is required to use this site.');
    }
  },

  methods: {
    parseUSDC: function (str) {
      return ethers.utils.parseUnits(str, 6);
    },

    formatUSDC: function (bn) {
      return ethers.utils.formatUnits(bn, 6);
    },

    formatSTSLA: function (bn) {
      return ethers.utils.formatUnits(bn, 18);
    },

    setMaxInput: function () {
      this.inputAmountText = this.formatUSDC(this.balanceUSDC);
    },
  },
};
</script>

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
  background: url("../static/space.png");
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
  background: url("../static/car-red.png");
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
  background: url("../static/car-gray.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 740px;
  left: 354px;
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
  font-family: Roboto;
  font-weight: Regular;
  font-size: 20px;
  opacity: 1;
  text-align: left;
  pointer-events: none;
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
  background: url("../static/fox.png");
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
  width: 175px;
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
  cursor: pointer;
}
.balance {
  width: 235px;
  color: rgba(255,255,255,1);
  position: absolute;
  top: 214px;
  left: 245px;
  font-family: Roboto;
  font-weight: Regular;
  font-size: 14px;
  opacity: 1;
  text-align: left;
  cursor: pointer;
}
.swap-box-title {
  width: 68px;
  color: rgba(255,255,255,1);
  position: absolute;
  top: 104px;
  left: 52px;
  font-family: Roboto;
  font-weight: Bold;
  font-size: 24px;
  opacity: 1;
  text-align: left;
  pointer-events: none;
}
.swap-button-text {
  width: 62px;
  color: rgba(255,255,255,1);
  position: absolute;
  top: 460px;
  left: 244px;
  font-family: Roboto;
  font-weight: Bold;
  font-size: 22px;
  opacity: 1;
  text-align: left;
  pointer-events: none;
}
.usdc-text {
  width: 72px;
  color: rgba(255,255,255,1);
  position: absolute;
  top: 193px;
  left: 125px;
  font-family: Roboto;
  font-weight: Bold;
  font-size: 22px;
  opacity: 1;
  text-align: left;
  pointer-events: none;
}
.input-text {
  width: 235px;
  color: rgba(255,255,255,1);
  border: none;
  background: none;
  position: absolute;
  top: 187px;
  left: 245px;
  font-family: Roboto;
  font-weight: Bold;
  font-size: 22px;
  opacity: 1;
  text-align: left;
  -webkit-appearance: none;
  margin: 0;
  -moz-appearance: textfield;
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
  width: 175px;
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
  width: 72px;
  color: rgba(255,255,255,1);
  position: absolute;
  top: 22px;
  left: 73px;
  font-family: Roboto;
  font-weight: Bold;
  font-size: 22px;
  opacity: 1;
  text-align: left;
  pointer-events: none;
}
.output-text {
  width: 96px;
  color: rgba(255,255,255,1);
  position: absolute;
  top: 16px;
  left: 195px;
  font-family: Roboto;
  font-weight: Bold;
  font-size: 22px;
  opacity: 1;
  text-align: left;
  pointer-events: none;
}
.stsla-icon {
  width: 38px;
  height: 38px;
  background: url("../static/stsla-icon.png");
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
  background: url("../static/usdc-icon.png");
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
