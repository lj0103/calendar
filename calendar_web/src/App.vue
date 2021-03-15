<template>
  <div id="app">
    <my-header>{{ headerTitle }}</my-header>
    <search-input :placeholder="placeholder" :maxlength="maxlength" />
    <router-view></router-view>
    <tab />
  </div>
</template>
<script>
import MyHeader from "@/components/header";
import Tab from "@/components/tab";
import SearchInput from "@/components/searchInput";

import { computed, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "App",
  components: {
    MyHeader,
    SearchInput,
    Tab,
  },
  setup() {
    const store = useStore(),
      state = store.state,
      router = useRouter();

    router.push("/");
    store.commit("setPlaceholder", "day");
    watch(
      () => {
        return router.currentRoute.value.name;
      },
      (value) => {
        store.commit("setHeaderTitle", value);
        store.commit("setPlaceholder", value);
        store.commit("setMaxLength", value);
      }
    );

    return computed(() => state).value;
  },
};
</script>
