<template>
  <div class="container">
    <error-tip />
    <div v-if="!errorCode">
      <card-list :data="monthData" />
    </div>
  </div>
</template>

<script>
import getData from "@/services";
import { onMounted, watch, computed } from "vue";
import { useStore } from "vuex";

import { getNowDate } from "@/libs/utils";

import CardList from "@/components/monthPage/list";
import ErrorTip from "@/components/errorTip";
export default {
  name: "MonthPage",
  components: {
    CardList,
    ErrorTip,
  },
  setup() {
    const store = useStore(),
      state = store.state;
    onMounted(() => {
      getData(store, "month", getNowDate("month"));
    });
    watch(
      () => {
        return state.monthData;
      },
      () => {
        store.commit("setErrorCode", 0);
      }
    );
    return {
      monthData: computed(() => state.monthData),
      errorCode: computed(() => state.errorCode),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
