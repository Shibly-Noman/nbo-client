<template>
  <v-app>
    <v-main>
      <layout>
        <v-btn class="ml-5" fixed fab>POS</v-btn>
        <v-col class="mx-auto" cols="12" xs="12" sm="12" md="8">
          <v-card class="pa-6" elevation="3">
            <div class="pb-3 font-italic indigo--text darken-3">
              <small>
                <label for="">Taxpayer type</label>
              </small>
            </div>
            <b-form @submit="formSubmit">
              <b-form-group id="BasicInfoForm">
                <v-row>
                  <small>
                    <b-form-radio-group required class="d-inline-flex">
                      <div class="pl-4 pr-10">
                        <b-form-radio
                          v-model="form.taxpayerType"
                          value="smallTaxpayer"
                        >
                          <img
                            src="../assets/images/sm_taxpayer_icon.png"
                            class="taxPayerIcon"
                          />
                          <span class="pt-3">Small Taxpayer</span>
                        </b-form-radio>
                      </div>
                      <div class="pl-4 pr-10">
                        <b-form-radio
                          v-model="form.taxpayerType"
                          value="mediumTaxpayer"
                          disabled
                        >
                          <img
                            src="../assets/images/md_taxpayer_icon.png"
                            class="taxPayerIcon"
                          />
                          <span class="pt-3 text--disabled"
                            >Medium taxpayer</span
                          >
                        </b-form-radio>
                      </div>
                      <div class="pl-4 pr-10">
                        <b-form-radio
                          v-model="form.taxpayerType"
                          value="largeTaxpayer"
                          disabled
                        >
                          <img
                            src="../assets/images/lg_taxpayer_icon.png"
                            class="taxPayerIcon"
                          />
                          <span class="pt-3 text--disabled"
                            >Large Taxpayer</span
                          >
                        </b-form-radio>
                      </div>
                    </b-form-radio-group>
                  </small>
                </v-row>

                <v-divider></v-divider>

                <v-row class="pa-0 small">
                  <v-col cols="12" md="6" class="mt-n2 px-5">
                    <label>Select your tax branch</label>
                    <b-form-select
                      size="sm"
                      v-model="form.taxBranch"
                      :options="taxBranchOptions"
                    ></b-form-select>
                  </v-col>
                  <v-col cols="12" md="6" class="mt-n2 px-5">
                    <label>Select the bank you make tax payment to:</label>
                    <b-form-radio-group>
                      <b-form-radio v-model="form.bankName" value="Acleda"
                        >Acleda</b-form-radio
                      >
                      <b-form-radio v-model="form.bankName" value="Vattanac"
                        >Vattanac</b-form-radio
                      >
                    </b-form-radio-group>
                  </v-col>
                </v-row>

                <v-row class="pa-0 small">
                  <v-col cols="12" md="6" class="mt-n2 px-5">
                    <label>Name of Enterprise</label>
                    <b-form-input
                      v-model="form.nameOfEnterprise"
                      size="sm"
                      type="text"
                      v-on:keyup="pushForm()"
                    >
                    </b-form-input>
                  </v-col>
                  <v-col cols="12" md="6" class="mt-n2 px-5">
                    <label>TIN</label>
                    <b-form-input
                      v-model="form.tin"
                      v-on:keyup="pushForm()"
                      size="sm"
                      type="text"
                      placeholder="xx-xx-xxxx"
                    >
                    </b-form-input>
                  </v-col>
                </v-row>

                <v-row class="pa-0 small">
                  <v-col cols="12" md="6" class="mt-n2 px-5">
                    <label>Name of Owner</label>
                    <b-form-input
                      v-on:keyup="pushForm()"
                      v-model="form.nameOfOwner"
                      size="sm"
                      type="text"
                    >
                    </b-form-input>
                  </v-col>
                  <v-col cols="12" md="6" class="mt-n2 px-5">
                    <label>Brand Name: </label>
                    <b-form-radio-group
                      v-model="brandBox"
                      class="d-flex space-around"
                    >
                      <span @click="brandBox = false"
                        ><b-form-radio value="false">None</b-form-radio></span
                      >
                      <b-form-radio value="true">or Enter</b-form-radio>
                      <div v-if="brandBox">
                        <b-form-input
                          class=""
                          v-model="form.brandName"
                          size="sm"
                          placeholder="Brand Name"
                        />
                      </div>
                    </b-form-radio-group>
                  </v-col>
                </v-row>

                <v-row class="pa-0 small">
                  <v-col cols="12" md="6" class="mt-n2 px-5">
                    <label>Business Activities</label>
                    <v-autocomplete
                      v-model="form.businessActivities"
                      :items="businessActOptions"
                      outlined
                      dense
                      v-on:keyup="pushForm()"
                      class="vuetify-box mt-n2 mb-n4"
                    ></v-autocomplete>
                  </v-col>

                  <v-col cols="12" md="6" class="mt-n2 px-5">
                    <label>Sub Business Activities</label>
                    <v-autocomplete
                      v-model="form.subBusinessActivities"
                      :items="subBusinessActOptions"
                      outlined
                      dense
                      class="vuetify-box mt-n2 mb-n4"
                    ></v-autocomplete>
                  </v-col>
                </v-row>

                <v-row class="pa-0 small">
                  <v-col cols="12" md="3" class="mt-n2 px-5">
                    <label>Address: No.</label>
                    <b-form-input
                      v-model="form.address.addressNo"
                      size="sm"
                      type="text"
                    >
                    </b-form-input>
                  </v-col>
                  <v-col cols="12" md="3" class="mt-n2 px-5">
                    <label>Street</label>
                    <b-form-input
                      v-model="form.address.street"
                      size="sm"
                      type="text"
                    >
                    </b-form-input>
                  </v-col>

                  <v-col cols="12" md="3" class="mt-n2 px-5">
                    <label>Village</label>
                    <b-form-input
                      v-model="form.address.village"
                      size="sm"
                      type="text"
                    >
                    </b-form-input>
                  </v-col>
                  <v-col cols="12" md="3" class="mt-n2 px-5">
                    <label>Commune</label>
                    <b-form-input
                      v-model="form.address.commune"
                      size="sm"
                      type="text"
                    >
                    </b-form-input>
                  </v-col>
                </v-row>

                <v-row class="pa-0 small">
                  <v-col cols="12" md="3" class="mt-n2 px-5">
                    <label>District</label>
                    <b-form-input
                      v-model="form.address.district"
                      size="sm"
                      type="text"
                    >
                    </b-form-input>
                  </v-col>
                  <v-col cols="12" md="3" class="mt-n2 px-5">
                    <label>Provine/City</label>
                    <b-form-input
                      v-model="form.address.provinceOrCity"
                      size="sm"
                      type="text"
                    >
                    </b-form-input>
                  </v-col>
                </v-row>
                <v-row class="pa-0 small">
                  <v-col cols="12" md="6" class="mt-n2 px-5">
                    <label>Email</label>
                    <b-form-input
                      v-model="form.email"
                      size="sm"
                      type="text"
                      placeholder="Ex: email@mail.com"
                    >
                    </b-form-input>
                  </v-col>
                  <v-col cols="12" md="6" class="mt-n2 px-5">
                    <label>Mobile Phone or Office Telephone</label>
                    <b-form-input
                      v-model="form.mobileOrOfficeTelephone"
                      size="sm"
                      type="text"
                    >
                    </b-form-input>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="pa-0 small">
                  <v-col cols="12" md="3" class="mt-n2 px-5">
                    <label>Tax Month:</label>
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :return-value.sync="form.taxMonth"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="form.taxMonth"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          class="mb-n4 mt-n2 vuetify-box"
                          outlined
                          dense
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="form.taxMonth"
                        type="month"
                        no-title
                        scrollable
                      >
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu = false">
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.menu.save(form.taxMonth)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>
                <b-btn @click="test" class="primary text-white">Test It</b-btn>
              </b-form-group>
            </b-form>
          </v-card>
        </v-col>
      </layout>
    </v-main>
  </v-app>
</template>

<script>
import layout from "../layout/FormDefault";
import { mapActions, mapMutations } from "vuex";
export default {
  name: "BasicInfo",
  components: {
    layout
  },
  data: () => ({
    menu: "",
    brandBox: false,
    form: {
      taxpayerType: "",
      taxBranch: "",
      bankName: "",
      nameOfEnterprise: "",
      tin: "",
      nameOfOwner: "",
      brandName: "",
      businessActivities: "",
      subBusinessActivities: "",
      address: {
        addressNo: "",
        street: "",
        village: "",
        commune: "",
        district: "",
        provinceOrCity: ""
      },
      email: "",
      mobileOrOfficeTelephone: "",
      taxMonth: ""
    },
    taxBranchOptions: [
      "Alabama",
      "Dhaka",
      "Dholapur",
      "Cambodia",
      "Alan",
      "Shojib",
      "Mahabub",
      "Rob",
      "Shibly"
    ],
    businessActOptions: [
      "Alabama",
      "Dhaka",
      "Dholapur",
      "Cambodia",
      "Alan",
      "Shojib",
      "Mahabub",
      "Rob",
      "Shibly"
    ],
    subBusinessActOptions: [
      "Alabama",
      "Dhaka",
      "Dholapur",
      "Cambodia",
      "Alan",
      "Shojib",
      "Mahabub",
      "Rob",
      "Shibly"
    ]
  }),
  methods: {
    ...mapActions(["getBasicInfo"]),
    ...mapMutations(["printData"]),
    pushForm() {
      this.getBasicInfo(this.form);
    },
    formSubmit() {},
    test() {
      this.printData();
    }
  }
};
</script>

<style scoped>
.taxPayerIcon {
  max-width: 40px;
  max-height: 40px;
  margin-right: 10px;
}
.vuetify-box {
  transform-origin: left;
  transform: scaleY(0.87);
}
</style>
