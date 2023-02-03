<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-form v-model="valid">
            <v-card>
              <v-card-title> Bill </v-card-title>
              <v-card-subtitle>Enter Your Phone Number </v-card-subtitle>
              <v-card-text>
                <v-text-field solo v-model="phoneNumber"> </v-text-field>
              </v-card-text>

              <v-card-actions>
                <v-btn color="secondary">Search</v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      status: {
        loading: false,
        phonNumberNotFound: false,
        getBill: false,
      },
      phoneNumber: "",
    };
  },
  methods : {
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
  }
};
</script>

<style></style>
