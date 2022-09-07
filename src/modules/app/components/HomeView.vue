<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'HomeView',
  data() {
    return {};
  },
  computed: {
    ...mapState('app', ['countries']),
  },

  created() {
    this.fetchCountry({});
  },
  methods: {
    ...mapActions('app', ['fetchCountry']),
    showCountry(country) {
      this.$emit('sendCountry', country);
      this.$emit('open');
    },
  },
};
</script>
<template>
  <v-flex>
    <v-container>
      <v-row>
        <v-col cols="12" sm="4">
          <v-text-field
            solo
            label="Search for a country.."
            prepend-inner-icon="search"
            height="60px"
          ></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" sm="3">
          <v-select filled solo label="Filter by Region"></v-select>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-flex>
        <v-row>
          <v-col
            v-for="(country, index) in countries"
            :key="index"
            cols="12"
            sm="3"
            ><v-card
              class="mx-auto my-12"
              max-width="374"
              @click="showCountry(country)"
            >
              <v-img height="250" :src="country.flags.png"></v-img>

              <v-card-title>{{ country.name }}</v-card-title>

              <v-card-text>
                <div class="my-4 text-subtitle-1">
                  <strong>Population:</strong> {{ country.population }}
                </div>
                <div class="my-4 text-subtitle-1">
                  <strong>Region:</strong> {{ country.region }}
                </div>
                <div class="my-4 text-subtitle-1">
                  <strong>Capital:</strong> {{ country.capital }}
                </div>
              </v-card-text>
            </v-card></v-col
          >
        </v-row>
      </v-flex>
    </v-container>
  </v-flex>
</template>

<style></style>
