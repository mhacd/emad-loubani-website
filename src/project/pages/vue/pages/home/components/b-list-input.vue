<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-sheet max-width="700" class="mx-auto">
          <v-card>
            <v-card-text>
              <v-list ref="list">
                <v-list-item
                  v-for="(text, index) in list"
                  :key="index"
                  class="align-start"
                >
                  <v-list-item-icon class="mt-0 mx-2">
                    <v-icon @click="remove(index)">mdi-delete</v-icon>
                  </v-list-item-icon>
                  <v-list-item-icon class="mt-0 mx-2">
                    <v-icon>mdi-circle-medium</v-icon>
                  </v-list-item-icon>

                  <v-list-item-text
                    v-if="index === editIndex"
                    @dblclick="edit(index)"
                  >
                    <v-text-field
                      :style="{ transform: 'translateY(-8px)' }"
                      v-model="list[index]"
                      dense
                      id="edit-line"
                      hide-details
                      @click:append="editDone(index)"
                      @keyup.13="editDone(index)"
                      @keyup.esc="escEdit(index)"
                      append-icon="mdi-arrow-up-bold-circle"
                    ></v-text-field>
                  </v-list-item-text>
                  <v-list-item-text v-else @dblclick="edit(index)">{{
                    text
                  }}</v-list-item-text>
                </v-list-item>
              </v-list>
              <div>
                <v-text-field
                  v-model="field"
                  @click:append="send"
                  @keyup.13="send"
                  append-icon="mdi-send"
                ></v-text-field>
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
  data() {
    return {
      field: "",
      list: [],
      editIndex: undefined,
      clip: "",
    };
  },
  methods: {
    send() {
      this.list.push(this.field);
      this.field = "";
    },
      remove(index) {
        this.editIndex = undefined;

      this.list.splice(index, 1);
    },
    edit(index) {
      this.editIndex = index;
      this.clip = this.list[index];
      const list = this.$refs.list.$el;
      setTimeout(() => {
        list.querySelector("#edit-line").focus();
      }, 0);
    },
    editDone() {
      this.editIndex = undefined;
    },
    escEdit(index) {
      this.list[index] = this.clip;
      this.clip = "";
      this.editIndex = undefined;
    },
  },
};
</script>

<style></style>
