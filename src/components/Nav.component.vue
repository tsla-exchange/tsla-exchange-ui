<template>
  <nav>
    <div class="bg-bg-500">
      <div class="container-lg">
        <div class="flex py-6 w-full justify-between">
          <div class="text-2xl font-bold pt-1">
            LOGO
          </div>
          <div class="flex space-x-2">
            <div
              @click="modalLoginOpen = true"
              class="button button-primary text-sm"
            >
              <a v-if="!address">CONNECT WALLET</a>
              <a v-else class="text-base">{{ shorten(address) }}</a>
            </div>
            <a
              href="http://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="button bg-seconday h-11 rounded-full w-auto"
              style="line-height: 2.8rem;"
            >
              ?
            </a>
          </div>
        </div>
        <!-- <div class="p-24 text-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div> -->
      </div>
    </div>
    <div class="mt-8 container-lg">
      <div class="h-12 bg-bg-400 inline-block w-full">
        <router-link
          v-for="link in links"
          :key="link"
          class="button button-secondary w-1/3"
          :to="link.route"
          >{{ link.label }}
          <div class="flex justify-center relative">
            <div
              v-if="$route.name === link.name"
              class="h-1 w-9/12 bg-primary -mt-1 mr-1 absolute"
            />
          </div>
        </router-link>
      </div>
    </div>
    <Login :open="modalLoginOpen" @close="modalLoginOpen = false" />
  </nav>
</template>

<script>
import { mapState } from "vuex";
import Login from "./Modal/Login";

export default {
  components: {
    Login
  },
  data() {
    return {
      modalLoginOpen: false,
      links: [
        { name: "Home", label: "Buy options", route: "/" },
        { name: "Provide", label: "Underwrite pools", route: "/provide" },
        { name: "Options", label: "My options", route: "/options" }
      ]
    };
  },
  computed: mapState({
    address: state => state.web3.address
  }),
  methods: {
    shorten(str) {
      if (str.length < 10) return str;
      return `${str.slice(0, 6)}...${str.slice(str.length - 4)}`;
    }
  }
};
</script>
