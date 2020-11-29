<template>
  <v-app>
    <v-main>
      <layout>
        <formFour />
      </layout>
    </v-main>
  </v-app>
</template>

<script>
import layout from "../layout/FormDefault";
import formFour from "../components/Trs4Form";
export default {
  name: "PurchaseDayBook",
  components: {
    layout,
    formFour
  }
};
</script>
