<template>
    <div>
      <mt-button type="primary" @click="handlerouter()">临时路由</mt-button>
    </div>
</template>
<script>
import { Button } from "mint-ui";
export default {
  name: "List",
  data() {},
  components: {
    [Button.name]: Button
  },
  methods: {
    handlerouter() {
      this.$router.push({
        path: "/search"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  background: #fff;
}
</style>


