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
                        <v-col class="py-0" cols="12" >
                          <v-text-field
                            filled
                            :rules="[(v) => !!v || 'required']"
                            label="Position"
                            v-model="form.position"
                          >
                          </v-text-field>
                        </v-col>
                       

                        <v-col class="py-0" cols="6" lg="3">
                          <v-autocomplete
                            filled
                            :rules="[(v) => !!v || 'required']"
                            label="Job Type"
                            :items="['Full Time', 'Part Time']"
                            v-model="form.jobType"
                          >
                          </v-autocomplete>
                        </v-col>
                        <v-col class="py-0" cols="6" lg="3">
                          <v-autocomplete
                            filled
                            :rules="[(v) => !!v || 'required']"
                            label="Office/Remote"
                            :items="['office', 'remote']"
                            v-model="form.jobSite"
                          >
                          </v-autocomplete>
                        </v-col>
                    <v-col class="py-0" cols="8" lg="8">
                          <v-text-field
                            filled
                            :rules="[(v) => !!v || 'required']"
                            label="Company"
                            v-model="form.company"
                          >
                          </v-text-field>
                        </v-col>
                    <v-col class="py-0" cols="4" lg="4">
                          <v-file-input

                            filled
                            :rules="[(v) => !!v || 'required']"
                            label="Logo"
                             append-icon="mdi-camera"
                             prepend-icon=""
                            v-model="form.companyLogo"
                          >
                          </v-file-input>
                        </v-col>
                    <v-col class="py-0" cols="12" >
                          <v-text-field
                            filled
                            :rules="[(v) => !!v || 'required']"
                            label="Location"
                            
                            v-model="form.location"
                          >
                          </v-text-field>
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
