<template>
  <div>
    <div class="search-bar" @click="toggleForm">
      Recherche
    </div>
    <div v-if="showForm" class="form-popup">
      <form @submit.prevent="submitSearchForm">
        <div>
          <label for="nom">Nom :</label>
          <input type="text" id="nom" v-model="form.nom" />
        </div>
        <div>
          <label for="departement">Département :</label>
          <input type="text" id="departement" v-model="form.departement" />
        </div>
        <div>
          <label for="culture">Culture :</label>
          <input type="text" id="culture" v-model="form.culture" />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
    <div v-if="results">
      <h3>Résultats de la recherche</h3>
      <ul>
        <li v-for="result in results" :key="result.id_users">{{ result.nom }} - {{ result.prenoms }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      showForm: false,
      form: {
        nom: '',
        departement: '',
        culture: ''
      },
      results: null
    };
  },
  methods: {
    toggleForm() {
      this.showForm = !this.showForm;
    },
    async submitSearchForm() {
      try {
        const response = await axios.get('/api/users/search', { params: this.form });
        this.results = response.data;
      } catch (error) {
        console.error("Erreur lors de la recherche :", error);
      }
    }
  }
};
</script>

<style scoped>
.search-bar {
  cursor: pointer;
  background-color: #f1f1f1;
  padding: 10px;
  width: 200px;
  text-align: left;
  margin-top: 10px;
}

.form-popup {
  position: absolute;
  top: 50px;
  left: 10px;
  background-color: white;
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
</style>
