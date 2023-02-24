<template>
  <div>
    <local-page-wrapper>
      <local-page-header> </local-page-header>
      <local-px >
        <local-apply-form> </local-apply-form>
      </local-px>
    </local-page-wrapper>
  </div>
</template>
<script>
import pageWrapper from "./components/page-wrapper.vue";
import pageHeader from "./components/page-header.vue";
import applyForm from "./components/apply-form.vue";
import px from "./components/px.vue";
export default {
  components: {
    "local-page-wrapper": pageWrapper,
    "local-page-header": pageHeader,
    "local-apply-form": applyForm,
    "local-px": px,
  },
};
</script>
