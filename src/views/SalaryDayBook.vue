<template>
  <v-app>
    <v-main>
      <layout>
        <formThree />
      </layout>
    </v-main>
  </v-app>
</template>

<script>
import layout from "../layout/FormDefault";
import formThree from "../components/Trs3Form";
export default {
  name: "SalaryDayBook",
  components: {
    layout,
    formThree
  }
};
</script>
