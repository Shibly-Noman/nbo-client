<template>
  <v-app>
    <v-main>
      <layout>
        <final />
      </layout>
    </v-main>
  </v-app>
</template>

<script>
import layout from "../layout/FormDefault";
import final from "../components/Summary";

export default {
  name: "Summary",
  components: {
    layout,
    final
  }
};
</script>
