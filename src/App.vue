<template>
  <div class="app">
    <nav class="navbar">
      <div class="nav-brand">🔥 RoasterHub</div>
      <div class="nav-categories">
        <div class="dropdown">
          <button class="dropbtn">Kategori Roaster ▼</button>
          <div class="dropdown-content">
            <router-link to="/">JobRoaster</router-link>
          </div>
        </div>
      </div>
      <div class="nav-links">
        <router-link to="/">Beranda</router-link>
        <router-link to="/about">Tentang</router-link>
      </div>
    </nav>
    
    <main class="main-content">
      <router-view />
    </main>
    
    <footer class="footer">
      <p>&copy; {{ new Date().getFullYear() }} JobRoaster. Project ini terintegrasi dengan DeepSeek AI.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f4f4f4;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.navbar {
  background-color: #e74c3c;
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-categories {
  margin-right: 20px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  background-color: #c0392b;
  color: white;
  padding: 10px 16px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dropdown-content {
  display: none;
  position: absolute;
  min-width: 180px;
  background-color: #f9f9f9;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 4px;
}

.dropdown-content a {
  color: #333;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: background-color 0.3s;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #a5281b;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  background-color: rgba(255, 255, 255, 0.2);
}

.main-content {
  flex: 1;
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.footer {
  background-color: #34495e;
  color: white;
  text-align: center;
  padding: 15px;
  margin-top: 40px;
}
</style>