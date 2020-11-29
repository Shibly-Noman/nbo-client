<template>
  <v-col cols="12" sm="12" md="5" class="mx-auto">
    <div class="d-flex jsutify-center">
      <span @click="setPageOne()">
        <router-link to="/trs-1">
          <img
            v-if="basicInfo"
            src="../assets/svgs/step1-active.svg"
            class="tile ml-8"
          />
          <img v-else src="../assets/svgs/step1.svg" class="tile ml-8" />
        </router-link>
      </span>
      <span @click="setPageTwo()">
        <router-link to="/trs-2">
          <img
            v-if="sTax"
            src="../assets/svgs/step2-active.svg"
            class="tile ml-n2"
          />
          <img v-else src="../assets/svgs/step2.svg" class="tile ml-n2" />
        </router-link>
      </span>
      <span @click="setPageThree()">
        <router-link to="/trs-3">
          <img
            v-if="sDayBook"
            src="../assets/svgs/step3-active.svg"
            class="tile ml-n2"
          />
          <img v-else src="../assets/svgs/step3.svg" class="tile ml-n2" />
        </router-link>
      </span>
      <span @click="setPageFour()">
        <router-link to="/trs-4">
          <img
            v-if="pDayBook"
            src="../assets/svgs/step4-active.svg"
            class="tile ml-n2"
          />
          <img v-else src="../assets/svgs/step4.svg" class="tile ml-n2" />
        </router-link>
      </span>
      <span @click="setPageFive()">
        <router-link to="/trs-5">
          <img
            v-if="summary"
            src="../assets/svgs/step5-active.svg"
            class="tile ml-n2"
          />
          <img v-else src="../assets/svgs/step5.svg" class="tile ml-n2" />
        </router-link>
      </span>
    </div>
  </v-col>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "stepper",
  data: () => ({
    basicInfo: false,
    sTax: false,
    sDayBook: false,
    pDayBook: false,
    summary: false
  }),
  async mounted() {
    if (this.$route.path == "/trs-1") {
      this.setPageOne();
    } else if (this.$route.path == "/trs-2") {
      this.setPageTwo();
    } else if (this.$route.path == "/trs-3") {
      this.setPageThree();
    } else if (this.$route.path == "/trs-4") {
      this.setPageFour();
    } else if (this.$route.path == "/trs-5") {
      this.setPageFive();
    }
  },
  computed: {
    ...mapState([
      "stepPosition",
      "pageOne",
      "pageTwo",
      "pageThree",
      "pageFour",
      "pageFive"
    ])
  },
  methods: {
    ...mapActions(["setOne", "setTwo", "setThree", "setFour", "setFive"]),

    setPageOne() {
      this.setOne(1);
      this.basicInfo = this.pageOne;
    },
    setPageTwo() {
      this.setTwo(2);
      this.sTax = this.pageTwo;
    },
    setPageThree() {
      this.setThree(3);
      this.sDayBook = this.pageThree;
    },
    setPageFour() {
      this.setFour(4);
      this.pDayBook = this.pageFour;
    },
    setPageFive() {
      this.setFive(5);
      this.summary = this.pageFive;
    }
  }
};
</script>

<style scoped>
.tile {
  max-height: 3rem;
  transition: transform 0.2s;
  opacity: 1;
}
.tile:hover {
  transform: scale(1.2);
}
</style>
