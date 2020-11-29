<template>
  <div>
    <v-col class="mx-auto" cols="12" xs="12" sm="12" md="9">
      <v-card class="pa-4">
        <div class="font-italic indigo--text darken-3 d-flex space-between">
          <b-icon icon="question-circle-fill" />
          <small class="ml=1">Instructions Here</small>

          <v-spacer></v-spacer>
          <div>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search in Form"
              single-line
              hide-details
              class="pl-15 mt-n4"
            ></v-text-field>
          </div>
        </div>
        <v-divider></v-divider>

        <b-card border-variant="primary">
          <b-form>
            <v-row class="mt-n7">
              <v-col><small>Date</small></v-col>
              <v-col><small>Invoice #</small></v-col>
              <v-col><small>Purchaser</small></v-col>
              <v-col cols="2"><small>VAT TIN</small></v-col>
              <v-col><small>Quantity</small></v-col>
              <v-col><small>Unit</small></v-col>
              <v-col><small>Category</small></v-col>
              <v-col><small>Total</small></v-col>
              <v-col><small>Description</small></v-col>
              <v-col><small>Note</small></v-col>
              <v-col><div></div></v-col>
            </v-row>
            <b-form-group>
              <v-row class="repeat-row mt-n4 mb-n7">
                <v-col cols="1">
                  <b-form-input size="sm" type="text" v-model="date" />
                </v-col>
                <v-col cols="1">
                  <b-form-input size="sm" type="text" v-model="invoice" />
                </v-col>
                <v-col cols="1">
                  <b-form-input size="sm" type="text" v-model="purchaser" />
                </v-col>
                <v-col cols="2">
                  <b-form-input size="sm" type="text" v-model="vatTin" />
                </v-col>
                <v-col cols="1">
                  <b-form-input size="sm" type="text" v-model="quantity" />
                </v-col>
                <v-col cols="1">
                  <b-form-input size="sm" type="text" v-model="unit" />
                </v-col>
                <v-col cols="1">
                  <b-form-input size="sm" type="text" v-model="category" />
                </v-col>
                <v-col cols="1">
                  <b-form-input size="sm" type="text" v-model="total" />
                </v-col>

                <v-col cols="1">
                  <b-button
                    pill
                    size="sm"
                    v-b-modal.descrp
                    variant="outline-secondary"
                  >
                    <v-icon>mdi-format-list-bulleted-square</v-icon>
                  </b-button>
                  <b-modal id="descrp" title="Description">
                    <b-form-textarea v-model="description" />
                  </b-modal>
                </v-col>

                <v-col cols="1" class="pb-4">
                  <b-button
                    pill
                    size="sm"
                    v-b-modal.notes
                    variant="outline-secondary"
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </b-button>
                  <b-modal id="notes" title="Note">
                    <b-form-textarea v-model="note" />
                  </b-modal>
                </v-col>

                <v-col cols="1">
                  <v-btn fab small @click="addToForm">
                    <b-icon icon="check" scale="2.5" variant="info" />
                  </v-btn>
                </v-col>
              </v-row>
            </b-form-group>
          </b-form>
        </b-card>

        <small>
          <template>
            <v-data-table
              fixed-header
              height="400px"
              :headers="headers"
              :items="form"
              :sort-by="['id']"
              :sort-desc="[true]"
              :search="search"
              :footer-props="{
                itemsPerPageOptions: [10, 20]
              }"
              class="elevation-1"
            >
              <template v-slot:item="row">
                <tr>
                  <td>{{ row.item.Date }}</td>
                  <td>{{ row.item.Invoice }}</td>
                  <td>{{ row.item.Purchaser }}</td>
                  <td>{{ row.item.VatTin }}</td>
                  <td>{{ row.item.Quantity }}</td>
                  <td>{{ row.item.Unit }}</td>
                  <td>{{ row.item.Category }}</td>
                  <td>{{ row.item.Total }}</td>
                  <td v-if="row.item.Description">
                    <b-icon icon="check" scale="1.8" variant="success" />
                  </td>
                  <td v-else>
                    <b-icon icon="dash" scale="1.8" style="color: #9f9f9f" />
                  </td>
                  <td v-if="row.item.Note">
                    <b-icon icon="check" scale="1.8" variant="success" />
                  </td>
                  <td v-else>
                    <b-icon icon="dash" scale="1.8" style="color: #9f9f9f" />
                  </td>
                  <td>
                    <button @click="removeData(form.indexOf(row.item))">
                      <b-icon icon="trash" scale="1.5" style="color: red" />
                    </button>
                  </td>
                </tr>
              </template>
            </v-data-table>
          </template>
        </small>

        <v-row class="px-3">
          <v-col
            cols="12"
            md="12"
            class="rounded text-right grey lighten-3 px-4"
          >
            <p class="pt-1">
              Total Tax <span class="text-muted"></span>: ៛3121231230
            </p>
          </v-col>
        </v-row>
      </v-card>
      <div class="text-center mt-10"></div>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "Trs4Form",
  data: () => ({
    search: "",
    id: 1,
    date: "",
    invoice: "",
    purchaser: "",
    vatTin: "",
    quantity: "",
    unit: "",
    category: "",
    total: "",
    description: "",
    note: "",

    headers: [
      { text: "Date", value: "date", sortable: false },
      { text: "Invoice #", value: "invoice", sortable: false },
      { text: "Purchaser", value: "purchaser", sortable: false },
      { text: "VAT TIN", value: "vatTin", sortable: false },
      { text: "Quantity", value: "quantity", sortable: false },
      { text: "Unit", value: "unit", sortable: false },
      { text: "Category", value: "category", sortable: false },
      { text: "Total", value: "total", sortable: false },
      { text: "Description", value: "description", sortable: false },
      { text: "Note", value: "note", sortable: false },
      { text: "Actions", sortable: false }
    ],

    form: []
  }),
  methods: {
    addToForm() {
      this.form.push({
        id: this.id,
        Date: this.date,
        Invoice: this.invoice,
        Purchaser: this.purchaser,
        VatTin: this.vatTin,
        Quantity: this.quantity,
        Unit: this.unit,
        Category: this.category,
        Total: this.total,
        Description: this.description,
        Note: this.note
      });
      this.id++;
      this.date = "";
      this.invoice = "";
      this.purchaser = "";
      (this.vatTin = ""), (this.quantity = "");
      this.unit = "";
      this.category = "";
      this.total = "";
      this.description = "";
      this.note = "";
    },
    removeData(id) {
      this.form.splice(id, 1);
    }
  }
};
</script>

<style scoped></style>
