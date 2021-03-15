<template>
  <div class="container">
    <day-card :data="dayData" />
    <day-list :data="dayData" />
  </div>
</template>

<script>
import getData from "@/services";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

import DayCard from "@/components/dataPage/card";
import DayList from "@/components/dataPage/list";

import { getNowDate } from "@/libs/utils";

export default {
  name: "DayPage",
  components: {
    DayCard,
    DayList,
  },
  setup() {
    const store = useStore(),
      state = store.state;
    onMounted(() => {
      getData(store, "day", getNowDate("day"));
    });

    return {
      dayData: computed(() => state.dayData),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
