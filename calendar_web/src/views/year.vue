<template>
  <div class="container">
    <error-tip />
    <div v-if="!errorCode">
      <card-list :data="yearData" />
    </div>
  </div>
</template>

<script>
import getData from "@/services";
import { onMounted, watch, computed } from "vue";
import { useStore } from "vuex";

import { getNowDate } from "@/libs/utils";

import CardList from "@/components/yearPage/list";
import ErrorTip from "@/components/errorTip";
export default {
  name: "YearPage",
  components: {
    CardList,
    ErrorTip,
  },
  setup() {
    const store = useStore(),
      state = store.state;
    onMounted(() => {
      getData(store, "year", getNowDate("year"));
    });
    watch(
      () => {
        return state.yearData;
      },
      () => {
        store.commit("setErrorCode", 0);
      }
    );

    return {
      yearData: computed(() => state.yearData),
      errorCode: computed(() => state.errorCode),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
