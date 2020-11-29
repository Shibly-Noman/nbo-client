<template>
  <v-toolbar color="blue lighten-5" class="bar-height">
    <v-col cols="12" sm="12" md="8" class="mx-auto mt-10">
      <v-row>
        <img src="../assets/images/logo-desktop.png" class="logo" />
        <v-spacer></v-spacer>
        <small>
          <a href="#" class="btn-link text-info">
            <b-icon icon="question-circle-fill" />
            Ask a Question
          </a>
        </small>
      </v-row>
      <v-row class="pt-4">
        <small>
          <a href="#">
            Tax Selector
          </a>
          <b-icon icon="chevron-right" class="mt-1 mx-1"></b-icon>
          <a href="#">
            <strong class="text-secondary">VAT</strong>
          </a>
        </small>
      </v-row>
    </v-col>
  </v-toolbar>
</template>

<script>
export default {
  name: "topBar"
};
</script>

<style scoped>
.logo {
  max-width: 7rem;
}
.bar-height {
  min-height: 7rem;
}
</style>
