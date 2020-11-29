<template>
  <v-row align="center" justify="center" class="pt-10">
    <v-col class="mx-auto" cols="12" xs="12" sm="12" md="7">
      <v-card class="elevation-5">
        <div class="pa-8 text-center">
          <b-icon
            icon="check-circle-fill"
            scale="3"
            variant="success"
            class="mb-5"
          />
          <h1 class="pb-10">Hurray, that was it!</h1>
          <v-btn color="primary" role="button">
            Download
            <b-icon icon="cloud-download" scale="1.3" class="ml-3" />
          </v-btn>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Summary",
  data: () => ({}),
  methods: {}
};
</script>

<style scoped></style>
