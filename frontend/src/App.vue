<template>
  <div class="landing-page">
    <header>
      <div class="logo">International Platfrom of agricultors gestion</div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
        <input type="text" v-model="searchQuery" placeholder="Search..." @input="performSearch"/>
        <div class="search-icon">🔍</div>
      </nav>
    </header>
    <main>
      <div class="subscribe-section">
        <h1>Subscribe Now to Our Newsletter</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        <form @submit.prevent="submitForm">
          <input type="text" v-model="name" placeholder="Name" required />
          <input type="email" v-model="email" placeholder="Email" required />
          <button type="submit">Send</button>
        </form>
      </div>
      <div class="image-section">
        <img src="../image/freepik1.jpeg" alt="Woman in a garden working on tablet" />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: ''
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.name, this.email);
    }
  }
};
</script>

<style scoped>
.landing-page {
  font-family: Arial, sans-serif;
  color: #fff;
  /*background-color: #1a1a2e;*/
  padding: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5em;
  font-weight: bold;
}

nav input {
  gap: 20px;
  float: right;
  margin-top: -40px 

}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin-right: 210px;
}

nav a {
  color: #fff;
  text-decoration: none;
}

.search-icon {
  font-size: 1.2em;
  float: right;
  margin-top: -40px 
}

.subscribe-section {
  margin-top: 50px;
}

.subscribe-section h1 {
  font-size: 2em;
  color: #f9a826;
}

.subscribe-section p {
  margin: 20px 0;
  width: 400px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
}

input {
  padding: 10px;
  border: none;
  border-radius: 5px;
}

button {
  padding: 10px;
  background-color: #f9a826;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.image-section {
  margin-top: 50px;
}

.image-section img {
  max-width: 500px;
  border-radius: 10px;
  float: right;
  margin-top:-300px
}
</style>
