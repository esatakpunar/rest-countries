import axios from 'axios';
export default {
  fetchCountry({ commit }) {
    let url = 'https://restcountries.com/v2/all';
    axios
      .get(url)
      .then((response) => {
        commit('setCountries', response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
