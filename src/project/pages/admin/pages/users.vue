<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="rounded-xl">
          <v-data-table :headers="headers" :items="desserts">
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Registered Customers </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                  <v-card>
                    <v-card-title>
                      <span>Customer</span>
                    </v-card-title>
                    <v-card-subtitle>
                      <span
                        >{{ targetUser.firstName }}
                        {{ targetUser.lastName }}</span
                      >
                    </v-card-subtitle>

                    <v-card-text>
                      <v-row align="center">
                        <v-col cols="6">
                          <v-text-field
                            label="Amount"
                            v-model="amount"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="1"> $ </v-col>
                      </v-row>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <span class="mx-3"> {{ msg }}</span>
                      <v-btn
                        :disabled="amountLoading"
                        color="blue darken-1"
                        text
                        @click="closeDialog"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        :loading="amountLoading"
                        color="blue darken-1"
                        text
                        @click="updateAmount"
                      >
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <span v-if="item.amount">{{ item.amount }} $</span>
              <v-btn small v-else color="secondary" @click="addBill(item)"
                >add bill
              </v-btn>
            </template>
            <template v-slot:no-data>
              <div class="py-5">
                <v-btn
                  :loading="fetchLoading"
                  outlined
                  color="primary"
                  @click="fetch()"
                >
                  Reset
                </v-btn>
              </div>
              or
              <div>
                <v-btn class="my-2" to="/register" color="secondary" text>
                  Register Customer</v-btn
                >
              </div>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    targetUser: {
      name: "",
    },
    amount: "",
    msg: "",
    dialog: false,
    fetchLoading: false,
    amountLoading: false,
    headers: [
      {
        text: "First Name",
        sortable: true,
        value: "firstName",
      },
      {
        text: "Last Name",
        sortable: true,
        value: "lastName",
      },
      { text: "", align: "center", sortable: false },

      {
        text: "Amount",
        align: "center",
        width: "120px",
        value: "actions",
        sortable: false,
      },
    ],
    desserts: [],
  }),
  computed: {},

  created() {
    this.fetch();
  },

  methods: {
    addBill(customer) {
      this.dialog = true;
      this.targetUser = customer;
    },
    closeDialog() {
      this.dialog = false;
      this.targetUser = {};
      this.amount = undefined;
      this.msg = "";
    },
    async updateAmount() {
      try {
        this.amountLoading = true;
        let amount = this.amount;
        let number = this.targetUser["number"];
        let res = await axios.post(
          "https://mtn-backend.mhacd.com/update-customer-bill.php",
          { amount, number }
        );
        if (res.status == 200) {
          this.msg = "Success";
        }
        this.fetch();
        this.amountLoading = false;
        setTimeout(() => {
          this.closeDialog();
        }, 200);
      } catch (err) {
        this.msg = "Error, bad connection";
        this.amountLoading = false;
        console.log(err);
      }
    },
    async fetch() {
      try {
        this.fetchLoading = true;
        let res = await axios.post(
          "https://mtn-backend.mhacd.com/get-all-customers.php"
        );
        console.log(res);
        this.fetchLoading = false;
        if (res.status == 200) {
          this.desserts = res.data.data;
        }
      } catch (err) {
        this.fetchLoading = false;
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
