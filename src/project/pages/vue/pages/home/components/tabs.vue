<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-sheet max-width="700" class="mx-auto">
          <v-card>
            <v-card-text>
              <div
                class="local-tabs-container local-tabs-container-padding local-tabs-container-border local-tabs-container-radius"
              >
              <template v-for="(tab , index) in tabs " >
                  <v-btn  
                  v-if="true"
                  :key="index"
                  :outlined="active === tab.key ? false : true"
                  @click="active = tab.key;$emit(`click:${tab.key}`);$emit('switch', tab.key)"
                  :dark="active == tab.key"
                  class="rounded-xl"
                  >{{tab.text}}</v-btn
                  >
                  <span class="mx-1" v-if="(index + 1) !== tabs.length" :key="index + 'i'"></span>
                </template>
              </div>
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => [
        { text: "Description", key: "description" },
        { text: "Apply", key: "apply" },
      ],
    },
  },
  data() {
    return {
      active: undefined,
    };
    },
    created() {
    this.active = this.tabs[0]['key']
  }
};
</script>

<style>
.local-tabs-container {
  /* width: fit-content; */
  display: inline-flex;
}
.local-tabs-container-radius {
  border-radius: 20px;
}
.local-tabs-container-border {
  border: 2px solid var(--v-black-base);
}
.local-tabs-container-padding {
  padding: 4px;
}
.local-tabs-button-radius {
  border-radius: 22px;
}
</style>
