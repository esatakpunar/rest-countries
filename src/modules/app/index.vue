<script>
import HomeView from './components/HomeView.vue';
import NavigationToolbar from './components/NavigationToolbar.vue';
import CountryDetail from './components/CountryDetail.vue';
export default {
  name: 'App',
  components: { NavigationToolbar, HomeView, CountryDetail },
  data() {
    return {
      selectedCountry: {},
      showDetail: false,
    };
  },
  methods: {
    alertmethod() {
      this.showDetail = true;
    },
    showCountry(country) {
      this.selectedCountry = country;
    },
  },
};
</script>
<template>
  <v-app>
    <navigation-toolbar></navigation-toolbar>

    <v-main>
      <home-view
        v-if="showDetail === false"
        @open="showDetail = true"
        @sendCountry="showCountry"
      ></home-view>
      <country-detail
        v-if="showDetail === true"
        @return="showDetail = false"
        :sendCountryDetail="selectedCountry"
      ></country-detail>
    </v-main>
  </v-app>
</template>

<style>
* {
  font-family: 'Nunito Sans', sans-serif;
}
</style>
