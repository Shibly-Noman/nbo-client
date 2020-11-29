<template>
  <v-toolbar color="blue lighten-5" class="bar-height rounded-b-xl">
    <v-col>
      <v-row>
        <div></div>
        <v-spacer></v-spacer>
        <span class="mt-3 mr-5">
          <h6>Mr. Accountant</h6>
        </span>
        <v-btn small color="orange lighten-1" fab dark class="mr-3">
          <v-icon large>mdi-account-circle</v-icon>
        </v-btn>
      </v-row>
    </v-col>
  </v-toolbar>
</template>

<script>
export default {
  name: "topBarPOS"
};
</script>

<style scoped>
.logo {
  max-width: 7rem;
}
.bar-height {
  max-height: 4rem;
  width: 100%;
}
</style>
