<template>
  <div style="margin-top: -81px">
    <m-hero> </m-hero>
    <m-media-feed> </m-media-feed>
    <m-contact></m-contact>
    <m-apply-form></m-apply-form>
    <m-open-position-form></m-open-position-form>
    <m-b-list-input></m-b-list-input>
    <m-footer> </m-footer>
  </div>
</template>

<script>
import mHero from "./components/hero.vue";
import mMediaFeed from "./components/media-feed.vue";
import mContact from "./components/contact.vue";
import mFooter from "./components/footer.vue";
import mApplyForm from './components/apply-form.vue'
import mOpenPositionForm from './components/open-position-form.vue'
import mBListInput from './components/b-list-input.vue'
export default {
  components: {
    "m-hero": mHero,
    "m-media-feed": mMediaFeed,
    "m-contact": mContact,
    "m-apply-form": mApplyForm,
    "m-open-position-form": mOpenPositionForm,
    "m-b-list-input": mBListInput,
    "m-footer": mFooter,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
