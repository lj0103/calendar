<template>
  <div id="app">
    <my-header>{{ headerTitle }}</my-header>
    <router-view />
    <tab />
  </div>
</template>
<script>
import MyHeader from "@/components/header";
import Tab from "@/components/tab";

import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "App",
  components: {
    MyHeader,
    Tab,
  },
  setup() {
    const store = useStore(),
      state = store.state,
      route = useRouter();

    route.push("/");

    return computed(() => state).value;
  },
};
</script>
