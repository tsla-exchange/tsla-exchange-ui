import { ethers } from "ethers";
// import axios from "axios";
import store from "@/store";
import provider from "@/helpers/provider";

const ethereum = window["ethereum"];
if (ethereum) {
  ethereum.on("accountsChanged", () => store.dispatch("init"));
  ethereum.on("networkChanged", network => {
    store.commit("set", {
      network: ethers.providers.getNetwork(parseInt(network))
    });
  });
}

const state = {
  loading: false,
  address: null,
  network: {}
  // costBasis: "",
  // tokenPrice: ""
};

const mutations = {
  set(_state, payload) {
    Object.keys(payload).forEach(key => {
      _state[key] = payload[key];
    });
  }
};

const actions = {
  init: async ({ commit, dispatch }) => {
    commit("set", { loading: true });
    // dispatch("getTokenPrice");
    if (provider) {
      try {
        const signer = provider.getSigner();
        const address = await signer.getAddress();

        if (address) {
          await dispatch("login");
        }
      } catch (e) {
        console.log(e);
      }
    }
    commit("set", { loading: false });
  },
  login: async ({ commit, dispatch }) => {
    if (provider) {
      try {
        await ethereum.enable();
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const network = await provider.getNetwork();
        commit("set", {
          network,
          address
        });
        // await dispatch("loadBasis");
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("This website require MetaMask");
    }
  },
  loading: ({ commit }, payload) => {
    commit("set", { loading: payload });
  }
  // async loadBasis({ commit }) {
  //   const stonksToken = new ethers.Contract(
  //     state.contractAddress,
  //     stonksAbi,
  //     provider
  //   );
  //   const costBasis = await stonksToken.basisOf(state.address);
  //   console.log(costBasis);
  //   commit("set", { costBasis: ethers.utils.formatEther(costBasis) });
  // },
  // async getTokenPrice({ commit }) {
  //   const result = await axios.post(
  //     "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",
  //     {
  //       query: `
  //         {
  //           tokenDayDatas(first: 1, orderBy: date, orderDirection: desc,
  //             where: {
  //               token: "${state.contractAddress}"
  //             }
  //           ) {
  //           priceUSD
  //           }
  //         }
  //       `
  //     }
  //   );
  //   const price = parseFloat(
  //     result.data.data.tokenDayDatas[0].priceUSD
  //   ).toFixed(2);
  //   commit("set", {
  //     tokenPrice
  //   });
  // }
};

export default {
  state,
  mutations,
  actions
};
