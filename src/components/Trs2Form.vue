<template>
  <v-col class="mx-auto" cols="12" xs="12" sm="12" md="9">
    <v-card class="pa-4">
      <div class="pb-3 font-italic indigo--text darken-3">
        <small>
          <b-icon icon="question-circle-fill" />
          Instruction text/tips that would help user in completing this section
        </small>
      </div>
      <v-divider></v-divider>

      <div>
        <small>
          <b-tabs background-color="transparent" color="basil" grow>
            <b-tab title="RESIDENT EMPLOYEES">
              <b-card border-variant="primary">
                <b-form>
                  <v-row class="mt-n3">
                    <v-col cols="2">Employees</v-col>
                    <v-col cols="2">Nationality</v-col>
                    <v-col cols="2">Position</v-col>
                    <v-col cols="2">Total Salary (USD$)</v-col>
                    <v-col cols="1">No. of Spouse</v-col>
                    <v-col cols="1">No. of Children</v-col>
                    <v-col cols="1">Exempt-</v-col>
                    <v-col><div></div></v-col>
                  </v-row>

                  <b-form-group>
                    <v-row class="repeat-row mt-n4 mb-n7">
                      <v-col cols="2">
                        <b-form-input
                          size="sm"
                          type="text"
                          v-model="resEmployees"
                        />
                      </v-col>
                      <v-col cols="2">
                        <b-form-input
                          size="sm"
                          type="text"
                          v-model="resNationality"
                        />
                      </v-col>
                      <v-col cols="2">
                        <b-form-input
                          size="sm"
                          type="text"
                          v-model="resPosition"
                        />
                      </v-col>
                      <v-col cols="2">
                        <b-form-input
                          size="sm"
                          type="text"
                          v-model="resTotalSalary"
                        />
                      </v-col>
                      <v-col cols="1">
                        <b-form-input
                          size="sm"
                          type="text"
                          v-model="resNoOfSpouce"
                        />
                      </v-col>
                      <v-col cols="1">
                        <b-form-input
                          size="sm"
                          class="mb-2"
                          type="text"
                          v-model="resNoOfChildren"
                        />
                      </v-col>

                      <v-col cols="1">
                        <b-form-checkbox
                          v-model="resExempt"
                          value="true"
                          unchecked-value="false"
                          class="mt-1 ml-2"
                        >
                        </b-form-checkbox>
                      </v-col>

                      <v-col cols="1">
                        <v-btn fab class="mt-n2" small @click="addToResForm">
                          <b-icon icon="check" scale="2.5" variant="info" />
                        </v-btn>
                      </v-col>
                    </v-row>
                  </b-form-group>
                </b-form>
              </b-card>

              <template>
                <v-data-table
                  fixed-header
                  height="400px"
                  :headers="resHeaders"
                  :items="resForm"
                  :sort-by="['Id']"
                  :sort-desc="[true]"
                  :footer-props="{
                    itemsPerPageOptions: [10, 20]
                  }"
                  class="elevation-1"
                >
                  <template v-slot:item="row">
                    <tr>
                      <td>{{ row.item.Employees }}</td>
                      <td>{{ row.item.Nationality }}</td>
                      <td>{{ row.item.Position }}</td>
                      <td>{{ row.item.TotalSalary }}</td>
                      <td>{{ row.item.NoOfSpouse }}</td>
                      <td>{{ row.item.NoOfChildren }}</td>
                      <td v-if="row.item.Exempt">
                        <b-icon icon="check" scale="1.8" variant="success" />
                      </td>
                      <td v-else>
                        <b-icon
                          icon="dash"
                          scale="1.8"
                          style="color: #9f9f9f"
                        />
                      </td>
                      <td>
                        <button
                          @click="removeResForm(resForm.indexOf(row.item))"
                        >
                          <b-icon icon="trash" scale="1.5" style="color: red" />
                        </button>
                      </td>
                    </tr>
                  </template>
                </v-data-table>
              </template>
            </b-tab>

            <b-tab title="NON-RESIDENT EMPLOYEES">
              <b-card border-variant="primary">
                <b-form>
                  <v-row class="mt-n3">
                    <v-col cols="2">Employees</v-col>
                    <v-col cols="2">Nationality</v-col>
                    <v-col cols="2">Position</v-col>
                    <v-col cols="2">Total Salary (USD$)</v-col>
                    <v-col cols="1">No. of Spouse</v-col>
                    <v-col cols="1">No. of Children</v-col>
                    <v-col cols="1">Exempt-</v-col>
                    <v-col><div></div></v-col>
                  </v-row>

                  <b-form-group>
                    <v-row class="repeat-row mt-n4 mb-n7">
                      <v-col cols="2">
                        <b-form-input
                          size="sm"
                          type="text"
                          v-model="nonResEmployees"
                        />
                      </v-col>
                      <v-col cols="2">
                        <b-form-input
                          size="sm"
                          type="text"
                          v-model="nonResNationality"
                        />
                      </v-col>
                      <v-col cols="2">
                        <b-form-input
                          size="sm"
                          type="text"
                          v-model="nonResPosition"
                        />
                      </v-col>
                      <v-col cols="2">
                        <b-form-input
                          size="sm"
                          type="text"
                          v-model="nonResTotalSalary"
                        />
                      </v-col>
                      <v-col cols="1">
                        <b-form-input
                          size="sm"
                          type="text"
                          v-model="nonResNoOfSpouce"
                        />
                      </v-col>
                      <v-col cols="1">
                        <b-form-input
                          size="sm"
                          class="mb-2"
                          type="text"
                          v-model="nonResNoOfChildren"
                        />
                      </v-col>

                      <v-col cols="1">
                        <b-form-checkbox
                          v-model="nonResExempt"
                          value="true"
                          unchecked-value="false"
                          class="mt-1 ml-2"
                        >
                        </b-form-checkbox>
                      </v-col>

                      <v-col cols="1">
                        <v-btn fab class="mt-n2" small @click="addToNonResForm">
                          <b-icon icon="check" scale="2.5" variant="info" />
                        </v-btn>
                      </v-col>
                    </v-row>
                  </b-form-group>
                </b-form>
              </b-card>

              <template>
                <v-data-table
                  fixed-header
                  height="400px"
                  :headers="nonResHeaders"
                  :items="nonResForm"
                  :sort-by="['Id']"
                  :sort-desc="[true]"
                  :footer-props="{
                    itemsPerPageOptions: [10, 20]
                  }"
                  class="elevation-1"
                >
                  <template v-slot:item="row">
                    <tr>
                      <td>{{ row.item.Employees }}</td>
                      <td>{{ row.item.Nationality }}</td>
                      <td>{{ row.item.Position }}</td>
                      <td>{{ row.item.TotalSalary }}</td>
                      <td>{{ row.item.NoOfSpouse }}</td>
                      <td>{{ row.item.NoOfChildren }}</td>
                      <td v-if="row.item.Exempt">
                        <b-icon icon="check" scale="1.8" variant="success" />
                      </td>
                      <td v-else>
                        <b-icon
                          icon="dash"
                          scale="1.8"
                          style="color: #9f9f9f"
                        />
                      </td>
                      <td>
                        <button
                          @click="
                            removeNonResForm(nonResForm.indexOf(row.item))
                          "
                        >
                          <b-icon icon="trash" scale="1.5" style="color: red" />
                        </button>
                      </td>
                    </tr>
                  </template>
                </v-data-table>
              </template>
            </b-tab>

            <b-tab title="FRINGE BENIFIT">
              <b-card border-variant="primary">
                <b-form>
                  <v-row class="mt-n3">
                    <v-col cols="2">Employees</v-col>
                    <v-col cols="2">Nationality</v-col>
                    <v-col cols="2">Position</v-col>
                    <v-col cols="2">Total Salary (USD$)</v-col>
                    <v-col cols="1">No. of Spouse</v-col>
                    <v-col cols="1">No. of Children</v-col>
                    <v-col cols="1">Exempt-</v-col>
                    <v-col><div></div></v-col>
                  </v-row>

                  <b-form-group>
                    <v-row class="repeat-row mt-n4 mb-n7">
                      <v-col cols="2">
                        <b-form-input
                          size="sm"
                          type="text"
                          v-model="frEmployees"
                        />
                      </v-col>
                      <v-col cols="2">
                        <b-form-input
                          size="sm"
                          type="text"
                          v-model="frNationality"
                        />
                      </v-col>
                      <v-col cols="2">
                        <b-form-input
                          size="sm"
                          type="text"
                          v-model="frPosition"
                        />
                      </v-col>
                      <v-col cols="2">
                        <b-form-input
                          size="sm"
                          type="text"
                          v-model="frTotalSalary"
                        />
                      </v-col>
                      <v-col cols="1">
                        <b-form-input
                          size="sm"
                          type="text"
                          v-model="frNoOfSpouce"
                        />
                      </v-col>
                      <v-col cols="1">
                        <b-form-input
                          size="sm"
                          class="mb-2"
                          type="text"
                          v-model="frNoOfChildren"
                        />
                      </v-col>

                      <v-col cols="1">
                        <b-form-checkbox
                          v-model="frExempt"
                          value="true"
                          unchecked-value="false"
                          class="mt-1 ml-2"
                        >
                        </b-form-checkbox>
                      </v-col>

                      <v-col cols="1">
                        <v-btn fab class="mt-n2" small @click="addToFrForm">
                          <b-icon icon="check" scale="2.5" variant="info" />
                        </v-btn>
                      </v-col>
                    </v-row>
                  </b-form-group>
                </b-form>
              </b-card>

              <template>
                <v-data-table
                  fixed-header
                  height="400px"
                  :headers="frHeaders"
                  :items="frForm"
                  :sort-by="['Id']"
                  :sort-desc="[true]"
                  :footer-props="{
                    itemsPerPageOptions: [10, 20]
                  }"
                  class="elevation-1"
                >
                  <template v-slot:item="row">
                    <tr>
                      <td>{{ row.item.Employees }}</td>
                      <td>{{ row.item.Nationality }}</td>
                      <td>{{ row.item.Position }}</td>
                      <td>{{ row.item.TotalSalary }}</td>
                      <td>{{ row.item.NoOfSpouse }}</td>
                      <td>{{ row.item.NoOfChildren }}</td>
                      <td v-if="row.item.Exempt">
                        <b-icon icon="check" scale="1.8" variant="success" />
                      </td>
                      <td v-else>
                        <b-icon
                          icon="dash"
                          scale="1.8"
                          style="color: #9f9f9f"
                        />
                      </td>
                      <td>
                        <button @click="removeFrForm(frForm.indexOf(row.item))">
                          <b-icon icon="trash" scale="1.5" style="color: red" />
                        </button>
                      </td>
                    </tr>
                  </template>
                </v-data-table>
              </template>
            </b-tab>
          </b-tabs>
        </small>
      </div>
      <b-btn class="mx-6">Push</b-btn>
      <b-btn>test</b-btn>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "Trs2Form",
  data: () => ({
    resId: 1,
    resEmployees: "",
    resNationality: "",
    resPosition: "",
    resTotalSalary: "",
    resNoOfSpouce: "",
    resNoOfChildren: "",
    resExempt: false,

    nonResId: 1,
    nonResEmployees: "",
    nonResNationality: "",
    nonResPosition: "",
    nonResTotalSalary: "",
    nonResNoOfSpouce: "",
    nonResNoOfChildren: "",
    nonResExempt: false,

    frId: 1,
    frEmployees: "",
    frNationality: "",
    frPosition: "",
    frTotalSalary: "",
    frNoOfSpouce: "",
    frNoOfChildren: "",
    frExempt: false,

    resHeaders: [
      { text: "Employees", value: "employees", sortable: false },
      { text: "Nationality", value: "nationality", sortable: false },
      { text: "Position", value: "position", sortable: false },
      { text: "Total Salary (USD$)", value: "totalSalary", sortable: false },
      { text: "No. of Spouse", value: "noOfSpouse", sortable: false },
      { text: "No. of Children", value: "noOfChildren", sortable: false },
      { text: "Exempt", value: "exempt", sortable: false },
      { text: "Actions", sortable: false }
    ],
    nonResHeaders: [
      { text: "Employees", value: "employees", sortable: false },
      { text: "Nationality", value: "nationality", sortable: false },
      { text: "Position", value: "position", sortable: false },
      { text: "Total Salary (USD$)", value: "totalSalary", sortable: false },
      { text: "No. of Spouse", value: "noOfSpouse", sortable: false },
      { text: "No. of Children", value: "noOfChildren", sortable: false },
      { text: "Exempt", value: "exempt", sortable: false },
      { text: "Actions", sortable: false }
    ],
    frHeaders: [
      { text: "Employees", value: "employees", sortable: false },
      { text: "Nationality", value: "nationality", sortable: false },
      { text: "Position", value: "position", sortable: false },
      { text: "Total Salary (USD$)", value: "totalSalary", sortable: false },
      { text: "No. of Spouse", value: "noOfSpouse", sortable: false },
      { text: "No. of Children", value: "noOfChildren", sortable: false },
      { text: "Exempt", value: "exempt", sortable: false },
      { text: "Actions", sortable: false }
    ],
    resForm: [],
    nonResForm: [],
    frForm: []
  }),
  methods: {
    addToResForm() {
      this.resForm.push({
        Id: this.resId,
        Employees: this.resEmployees,
        Nationality: this.resNationality,
        Position: this.resPosition,
        TotalSalary: this.resTotalSalary,
        NoOfSpouse: this.resNoOfSpouce,
        NoOfChildren: this.resNoOfChildren,
        Exempt: this.resExempt
      });
      this.resId++;
      this.resEmployees = "";
      this.resNationality = "";
      this.resPosition = "";
      this.resTotalSalary = "";
      this.resNoOfSpouce = "";
      this.resNoOfChildren = "";
      this.resExempt = false;
    },
    addToNonResForm() {
      this.nonResForm.push({
        Id: this.nonResId,
        Employees: this.nonResEmployees,
        Nationality: this.nonResNationality,
        Position: this.nonResPosition,
        TotalSalary: this.nonResTotalSalary,
        NoOfSpouse: this.nonResNoOfSpouce,
        NoOfChildren: this.nonResNoOfChildren,
        Exempt: this.nonResExempt
      });
      this.nonResId++;
      this.nonResEmployees = "";
      this.nonResNationality = "";
      this.nonResPosition = "";
      this.nonResTotalSalary = "";
      this.nonResNoOfSpouce = "";
      this.nonResNoOfChildren = "";
      this.nonResExempt = false;
    },
    addToFrForm() {
      this.frForm.push({
        Id: this.frId,
        Employees: this.frEmployees,
        Nationality: this.frNationality,
        Position: this.frPosition,
        TotalSalary: this.frTotalSalary,
        NoOfSpouse: this.frNoOfSpouce,
        NoOfChildren: this.frNoOfChildren,
        Exempt: this.frExempt
      });
      this.frId++;
      this.frEmployees = "";
      this.frNationality = "";
      this.frPosition = "";
      this.frTotalSalary = "";
      this.frNoOfSpouce = "";
      this.frNoOfChildren = "";
      this.frExempt = false;
    },

    removeResForm(index) {
      this.resForm.splice(index, 1);
    },
    removeNonResForm(index) {
      this.resForm.splice(index, 1);
    },
    removeFrForm(index) {
      this.frForm.splice(index, 1);
    }
  }
};
</script>

<style scoped></style>
