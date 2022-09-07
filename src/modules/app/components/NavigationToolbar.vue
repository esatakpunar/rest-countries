<script>
export default {
  name: 'NavigationToolbar',
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<template>
  <v-app-bar app>
    <div class="d-flex align-center">
      <v-app-bar-title>Where in the world?</v-app-bar-title>
    </div>

    <v-spacer></v-spacer>

    <div>
      <v-tooltip v-if="!$vuetify.theme.dark" bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" small fab @click="darkMode">
            <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
          </v-btn>
        </template>
        <span>Dark Mode On</span>
      </v-tooltip>

      <v-tooltip v-else bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" small fab @click="darkMode">
            <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
          </v-btn>
        </template>
        <span>Dark Mode Off</span>
      </v-tooltip>
    </div>
  </v-app-bar>
</template>

<style>
.v-app-bar-title__content {
  width: 200px !important;
}
</style>
