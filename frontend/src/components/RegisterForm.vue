<template>
    <div>
      <div class="login-bar" @click="toggleForm">
        Connexion
      </div>
      <div v-if="showForm" class="form-popup">
        <form @submit.prevent="submitRegisterForm">
          <div>
            <label for="nom">Nom :</label>
            <input type="text" id="nom" v-model="form.nom" required />
          </div>
          <div>
            <label for="prenoms">Prénoms :</label>
            <input type="text" id="prenoms" v-model="form.prenoms" required />
          </div>
          <div>
            <label for="email">Email :</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>
          <div>
            <label for="numero">Numéro de téléphone :</label>
            <input type="text" id="numero" v-model="form.numero" required />
          </div>
          <div>
            <label for="date">Date de création :</label>
            <input type="date" id="date" v-model="form.created" required />
          </div>
          <div>
            <label for="password">Mot de passe :</label>
            <input type="password" id="password" v-model="form.password" required />
          </div>
          <div>
            <label for="userType">Type d'utilisateur :</label>
            <input type="text" id="userType" v-model="form.userType" value="user" readonly />
          </div>
          <button type="submit">S'enregistrer</button>
        </form>
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
          prenoms: '',
          email: '',
          numero: '',
          created: '',
          password: '',
          userType: 'user'
        }
      };
    },
    methods: {
      toggleForm() {
        this.showForm = !this.showForm;
      },
      async submitRegisterForm() {
        try {
          await axios.post('/api/users', this.form);
          alert("Enregistrement réussi !");
          this.resetForm();
        } catch (error) {
          console.error("Erreur lors de l'enregistrement :", error);
        }
      },
      resetForm() {
        this.form = {
          nom: '',
          prenoms: '',
          email: '',
          numero: '',
          created: '',
          password: '',
          userType: 'user'
        };
        this.showForm = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .login-bar {
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
  