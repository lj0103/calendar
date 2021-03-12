<template>
  <div id="app">
    <my-header>{{ headerTitle }}</my-header>
    <router-view />
  </div>
</template>
<script>
import MyHeader from "@/components/header";

import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "App",
  components: {
    MyHeader,
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
