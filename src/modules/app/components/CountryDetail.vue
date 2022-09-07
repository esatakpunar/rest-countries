<script>
export default {
  name: 'CountryDetail',
  props: ['sendCountryDetail'],
  methods: {
    returnMain() {
      this.$emit('return');
    },
  },
};
</script>

<template>
  <v-flex>
    <v-container pt-16>
      <v-btn @click="returnMain"> <v-icon>keyboard_return</v-icon>Back </v-btn>
    </v-container>
    <v-container pt-16>
      <v-row>
        <v-col cols="12" sm="6">
          <img
            :src="sendCountryDetail.flags.png"
            alt=""
            width="100%"
            height="100%"
          />
        </v-col>

        <v-col cols="12" sm="6" style="border: '1px solid'">
          <v-card-title>{{ sendCountryDetail.name }} </v-card-title>
          <!-- <p>{{ sendCountryDetail }}</p> -->
          <v-row>
            <v-col cols="12" sm="6">
              <v-card-text>
                <div class="my-4 text-subtitle-1">
                  <strong>Native Name:</strong>
                  {{ sendCountryDetail.nativeName }}
                </div>
                <div class="my-4 text-subtitle-1">
                  <strong>Population:</strong>
                  {{ sendCountryDetail.population }}
                </div>
                <div class="my-4 text-subtitle-1">
                  <strong>Region:</strong> {{ sendCountryDetail.region }}
                </div>
                <div class="my-4 text-subtitle-1">
                  <strong>Sub Region:</strong> {{ sendCountryDetail.subregion }}
                </div>
                <div class="my-4 text-subtitle-1">
                  <strong>Capital:</strong> {{ sendCountryDetail.capital }}
                </div>
              </v-card-text>
            </v-col>
            <v-col cols="12" sm="6">
              <v-card-text>
                <div class="my-4 text-subtitle-1">
                  <strong>Top Level Domain:</strong>
                  {{ sendCountryDetail.topLevelDomain[0] }}
                </div>
                <div class="my-4 text-subtitle-1">
                  <strong>Currencies:</strong>
                  {{ sendCountryDetail.currencies[0].name }}
                </div>
                <div class="my-4 text-subtitle-1">
                  <strong>Languages:</strong>
                  {{ sendCountryDetail.languages[0].name }}
                </div>
              </v-card-text>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-flex>
</template>

<style></style>
