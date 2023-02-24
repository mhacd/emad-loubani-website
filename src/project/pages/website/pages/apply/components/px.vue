<template>
  <div :class="`px-${forceX ? forceX : x}`">
  <slot></slot></div>
</template>

<script>
export default {
  props: {
    forceX: {
      type: Number,
    },
  },
  computed: {
    x() {
      return 3;
    },
  },
};
</script>

<style></style>
