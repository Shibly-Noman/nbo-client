<template>
  <v-app class="amber lighten-5">
    <div class="sidenav teal lighten-5 elevation-8 rounded-tr-xl">
      <img src="../assets/images/logo-desktop.png" class="logo px-2 mt-6" />
      <v-divider dark="true"></v-divider>
      <div class="d-flex flex-column justify-center">
        <div class="mt-14"></div>
        <div class="mt-14"></div>
        <div class="amber lighten-5">
          <v-img
            src="../assets/svgs/web-analytics.svg"
            class="ml-8 my-5 tile"
            max-height="70"
            max-width="70"
          />
        </div>
        <v-img
          src="../assets/svgs/inventory.svg"
          class="ml-8 my-5 tile"
          max-height="70"
          max-width="70"
        />
        <v-img
          src="../assets/svgs/settings.svg"
          class="ml-8 my-5 tile"
          max-height="70"
          max-width="70"
        />
      </div>
    </div>
    <v-col cols="12" md="4" class="mr-14 teal bottom-nav rounded-t-xl">
      <div class="d-flex justify-space-around mt-2">
        <v-btn class="tile rounded-xl">
          <img src="../assets/svgs/vegetarian.svg" class="icons mb-3" />
          Category 1
        </v-btn>

        <v-btn class="tile rounded-xl">
          <img src="../assets/svgs/headphones.svg" class="icons pa-2 my-2" />
          Category 2
        </v-btn>

        <v-btn class="tile rounded-xl">
          <img src="../assets/svgs/pants.svg" class="icons my-2" />
          Category 3
        </v-btn>
      </div>
    </v-col>
    <topBarPOS />
    <v-main>
      <v-col cols="12" md="10" class="mx-auto">
        <v-row class="d-flex">
          <v-col cols="8" class="mx-auto">
            <v-card class="pa-5 rounded-xl grey lighten-5">
              <div class="d-flex justify-space-between">
                <h4>Products</h4>
                <h6 class="mt-1">Categoy - 1</h6>
              </div>
              <v-divider></v-divider>
              <div class="d-flex flex-wrap">
                <v-card
                  class="pa-2 ma-2 rounded-xl elevation-6 tile"
                  max-width="140"
                >
                  <v-img height="120" src="../assets/svgs/bananas.svg"></v-img>
                  <div class="mx-auto align-center text-center">
                    <v-chip
                      class="yellow lighten-4 ma-1 align-center text-center"
                      >Banana</v-chip
                    >
                  </div>
                </v-card>
                <v-card
                  class="pa-2 ma-2 rounded-xl elevation-6 tile"
                  max-width="140"
                >
                  <v-img height="120" src="../assets/svgs/orange.svg"></v-img>
                  <div class="mx-auto align-center text-center">
                    <v-chip
                      class="orange lighten-4 ma-1 align-center text-center"
                      >Orange</v-chip
                    >
                  </div>
                </v-card>
                <v-card
                  class="pa-2 ma-2 rounded-xl elevation-6 tile"
                  max-width="130"
                >
                  <v-img height="120" src="../assets/svgs/tomato.svg"></v-img>
                  <div class="mx-auto align-center text-center">
                    <v-chip class="red lighten-4 ma-1 align-center text-center"
                      >Tomato</v-chip
                    >
                  </div>
                </v-card>
                <v-card
                  class="pa-2 ma-2 rounded-xl elevation-6 tile"
                  max-width="130"
                >
                  <v-img height="120" src="../assets/svgs/eggplant.svg"></v-img>
                  <div class="mx-auto align-center text-center">
                    <v-chip
                      class="purple lighten-4 ma-1 align-center text-center"
                      >Eggplant</v-chip
                    >
                  </div>
                </v-card>
                <v-card
                  class="pa-2 ma-2 rounded-xl elevation-6 tile"
                  max-width="130"
                >
                  <v-img height="120" src="../assets/svgs/cabbage.svg"></v-img>
                  <div class="mx-auto align-center text-center">
                    <v-chip
                      class="green lighten-4 ma-1 align-center text-center"
                      >Cabbage</v-chip
                    >
                  </div>
                </v-card>
                <v-card
                  class="pa-2 ma-2 rounded-xl elevation-6 tile"
                  max-width="130"
                >
                  <v-img height="120" src="../assets/svgs/broccoli.svg"></v-img>
                  <div class="mx-auto align-center text-center">
                    <v-chip class="teal lighten-4 ma-1 align-center text-center"
                      >Broccoli</v-chip
                    >
                  </div>
                </v-card>
                <v-card
                  class="pa-2 ma-2 rounded-xl elevation-6 tile"
                  max-width="130"
                >
                  <v-img height="120" src="../assets/svgs/onion.svg"></v-img>
                  <div class="mx-auto align-center text-center">
                    <v-chip class="pink lighten-4 ma-1 align-center text-center"
                      >Onion</v-chip
                    >
                  </div>
                </v-card>
                <v-card
                  class="pa-2 ma-2 rounded-xl elevation-6 tile"
                  max-width="130"
                >
                  <v-img height="120" src="../assets/svgs/drink.svg"></v-img>
                  <div class="mx-auto align-center text-center">
                    <v-chip
                      class="orange lighten-4 ma-1 align-center text-center"
                      >Drink</v-chip
                    >
                  </div>
                </v-card>
                <v-card
                  class="pa-2 ma-2 rounded-xl elevation-6 tile"
                  max-width="130"
                >
                  <v-img height="120" src="../assets/svgs/lemon.svg"></v-img>
                  <div class="mx-auto align-center text-center">
                    <v-chip class="lime lighten-4 ma-1 align-center text-center"
                      >Lemon</v-chip
                    >
                  </div>
                </v-card>
              </div>
            </v-card>
          </v-col>
          <v-col cols="4" class="mr-n15">
            <v-card class="pa-5 rounded-xl">
              <div class="d-flex flex justify-space-between">
                <h4>Cart</h4>
                <b-icon
                  icon="dash-circle"
                  scale="1.5"
                  variant="danger"
                ></b-icon>
              </div>
              <v-divider dark="true"></v-divider>
              <v-card class="pa-3 my-2 tile" outlined>
                <small>Banana</small>
                <v-row class="d-flex justify-space-between">
                  <v-img
                    src="../assets/svgs/bananas.svg"
                    max-height="30"
                    max-width="30"
                    class="ml-3"
                  ></v-img>
                  <h5><strong>$5</strong></h5>
                  <div class="d-flex">
                    <h6><strong>Q: 1</strong></h6>
                    <b-icon
                      class="mx-5"
                      icon="dash-circle"
                      style="color: red"
                      scale="1.2"
                    />
                    <b-icon
                      class="mr-5"
                      icon="plus-circle"
                      style="color: green"
                      scale="1.2"
                    />
                  </div>
                </v-row>
              </v-card>
              <v-card class="pa-3 my-2 tile" outlined>
                <small>Banana</small>
                <v-row class="d-flex justify-space-between">
                  <v-img
                    src="../assets/svgs/tomato.svg"
                    max-height="30"
                    max-width="30"
                    class="ml-3"
                  ></v-img>
                  <h5><strong>$8</strong></h5>
                  <div class="d-flex">
                    <h6><strong>Q: 4</strong></h6>
                    <b-icon
                      class="mx-5"
                      icon="dash-circle"
                      style="color: red"
                      scale="1.2"
                    />
                    <b-icon
                      class="mr-5"
                      icon="plus-circle"
                      style="color: green"
                      scale="1.2"
                    />
                  </div>
                </v-row>
              </v-card>
              <v-card class="pa-3 my-2 tile" outlined>
                <small>Banana</small>
                <v-row class="d-flex justify-space-between">
                  <v-img
                    src="../assets/svgs/eggplant.svg"
                    max-height="30"
                    max-width="30"
                    class="ml-3"
                  ></v-img>
                  <h5><strong>$3</strong></h5>
                  <div class="d-flex">
                    <h6><strong>Q: 2</strong></h6>
                    <b-icon
                      class="mx-5"
                      icon="dash-circle"
                      style="color: red"
                      scale="1.2"
                    />
                    <b-icon
                      class="mr-5"
                      icon="plus-circle"
                      style="color: green"
                      scale="1.2"
                    />
                  </div>
                </v-row>
              </v-card>
              <v-card class="pa-5 my-3">
                <div class="d-flex justify-space-between">
                  <h6 class="pt-2">Sub Total</h6>
                  <h4><strong>$35</strong></h4>
                </div>
                <div class="d-flex justify-space-between">
                  <h6 class="pt-2">VAT</h6>
                  <h4>$2</h4>
                </div>
              </v-card>
              <div class="text-center my-3">
                <v-btn class="teal accent-4" large rounded block
                  >Checkout</v-btn
                >
                <v-btn class="mt-3" outlined large rounded block>Pending</v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-main>
  </v-app>
</template>

<script>
import topBarPOS from "../components/topBarPOS";
export default {
  name: "PosDash",
  components: {
    topBarPOS
  }
};
</script>

<style scoped>
.logo {
  max-width: 7rem;
}

.sidenav {
  height: 100%;
  width: 8rem;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
}
.bottom-nav {
  height: 5rem;
  position: fixed;
  z-index: 1;
  bottom: 0;
  overflow-x: hidden;
  background-color: rgb(255, 255, 255);
  align-self: center;
}
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}
.tile {
  transition: transform 0.3s;
}
.tile:hover {
  transform: scale(1.1);
}
.icons {
  max-width: 2rem;
}
</style>
