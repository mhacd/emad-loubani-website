<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col>
            <v-sheet max-width="700" class="mx-auto">
                <v-form ref="form" v-model="valid">
                  <v-card>
                    <v-card-text>
                      <v-row dense>
                        <v-col class="py-0" cols="4" lg="2">
                          <v-autocomplete
                            filled
                            :rules="[(v) => !!v || 'required']"
                            label="Title"
                            :items="['Mr', 'Mrs']"
                            v-model="form.title"
                          >
                          </v-autocomplete>
                        </v-col>
                        <v-col class="py-0" cols="8" lg="5">
                          <v-text-field
                            filled
                            :rules="[(v) => !!v || 'required']"
                            label="First Name"
                            v-model="form.firstName"
                          >
                          </v-text-field>
                        </v-col>
                        <v-col class="py-0" cols="12" lg="5">
                          <v-text-field
                            filled
                            :rules="[(v) => !!v || 'required']"
                            label="Last Name"
                            v-model="form.lastName"
                          >
                          </v-text-field>
                        </v-col>
                        <v-col class="py-0" cols="12" lg="12">
                          <v-text-field
                            filled
                            :rules="[(v) => !!v || 'required']"
                            label="Email"
                            v-model="form.email"
                          >
                          </v-text-field>
                        </v-col>
                        <v-col class="py-0" cols="4" lg="2" >
                          <v-text-field
                            filled
                            :rules="[(v) => !!v  || 'required']"
                            label="code"
                            :value="codeField"
                            @input="(value)=> { codeField = value.replace('+', '') }"
                          >
                          </v-text-field>
                        </v-col>

                        
                        <v-col class="py-0" cols="8" lg="10">
                          <v-text-field
                            filled
                            :rules="[(v) => !!v || 'required']"
                            label="Phone Number"
                            v-model="form.phoneNumber"
                          >
                          </v-text-field>
                        </v-col>
                        <v-col cols="12" lg="3" class="px-0 py-0"></v-col>
                       
                   
                        <v-col class="py-0" cols="12" lg="12">
                          <v-text-field
                            filled
                            :rules="[(v) => !!v || 'required']"
                            label="City"
                            v-model="form.city"
                          >
                          </v-text-field>
                        </v-col>
                        <v-col class="py-0" cols="12" lg="12">
                          <v-text-field
                            filled
                            :rules="[(v) => !!v || 'required']"
                            label="Experience In Years"
                            v-model="form.experienceYears"
                          >
                          </v-text-field>
                        </v-col>
                        
                        <v-col class="py-0" cols="10" >
                          <v-text-field
                            filled
                            :rules="[(v) => !!v   || 'required'  ]"
                            label="Desired salary"
                            v-model="form.desiredSalary"
                            :disabled="!setDesiredSalary"
                            >
                          </v-text-field>
                        </v-col>
                        <v-col class="py-0" cols="2" >
                          <v-switch
                            inset
                            v-model="setDesiredSalary"
                          >
                        </v-switch>
                        </v-col>
                        <v-col class="py-0" cols="12" lg="12">
                          <v-text-field
                            filled
                            :rules="[(v) => !!v   || 'required'  ]"
                            label="LinkedIn"
                            v-model="form.linkedIn"
                            >
                          </v-text-field>
                        </v-col>
                        <v-col class="py-0" cols="12" lg="12">
                          <v-textarea
                            filled
                            label="Additional Information"
                            v-model="form.additionalInformation"
                            >
                          </v-textarea>
                        </v-col>
                        <v-col class="py-0" cols="12" lg="12">
                          <v-btn height="100" block class="py-6" :ripple="false" outlined color="blue">
                            <v-icon large style="transform: rotate(91deg);"
                                >mdi-attachment</v-icon> Upload CV
                          </v-btn>
                        </v-col>

                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-spacer></v-spacer>
                          <v-btn
                            :disabled="!valid"
                            :loading="loading"
                            @click="submit"
                            color="secondary"
                            >submit</v-btn
                          >
                          <span
                            class="mx-3"
                            :class="[
                              msg == 'Success' ? 'blue--text' : '',
                              msg == 'Error, Bad Connection' ? 'red--text' : '',
                            ]"
                            >{{ msg }}</span
                          >
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-form>
            </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      valid: false,
        msg: '',
        setDesiredSalary : false,
        form: {},
        loading: false,
        codeState: '+', 

    };
    },
    watch: {
        setDesiredSalary(value) {
            if (value == false) {
                this.from.desiredSalary = '' 
            }
        }
  },
    computed: {
        codeField: {
            get() {
                return this.codeState
            },
            set(value) {
                console.log(value)
                this.codeState =  '+'  + value
            }
        }
        
  },
  methods: {
    async submit() {
      if (!this.valid || this.loading) return;
      try {
        this.msg = "";
        this.loading = true;
        console.log(this.form);
        let res = await axios.post(
          "https://mtn-backend.mhacd.com/add-customer.php",
          this.form
        );
        if (res.status === 201) {
          this.$refs.form.reset();
          this.form = {};
          this.msg = "Success";
        }
        this.loading = false;
      } catch (err) {
        this.msg = "Error, Bad Connection";
        this.loading = false;
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
