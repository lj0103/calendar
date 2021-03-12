<template>
  <div class="container">Day Page</div>
</template>

<script>
import getData from "@/services";
import { onMounted } from "vue";
export default {
  name: "DayPage",
  setup() {
    onMounted(() => {
      getData("day", "2020-1-2");
    });
  },
};
</script>

<style lang="scss" scoped>
</style>
