<template>
  <v-app>
    <v-main>
      <layout>
        <formTwo />
      </layout>
    </v-main>
  </v-app>
</template>

<script>
import layout from "../layout/FormDefault";
import formTwo from "../components/Trs2Form";
export default {
  name: "SalaryTax",
  components: {
    layout,
    formTwo
  }
};
</script>
