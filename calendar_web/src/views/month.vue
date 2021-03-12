<template>
  <div class="container">Month Page</div>
</template>

<script>
import getData from "@/services";
import { onMounted } from "vue";
export default {
  name: "MonthPage",
  setup() {
    onMounted(() => {
      getData("month", "2020-7");
    });
  },
};
</script>

<style lang="scss" scoped>
</style>
