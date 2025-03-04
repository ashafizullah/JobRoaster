<template>
  <div class="app d-flex flex-column min-vh-100">
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
      <div class="container">
        <a class="navbar-brand fw-bold" href="/">🔥 RoasterHub</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Kategori Roaster
              </a>
              <ul class="dropdown-menu">
                <li><router-link class="dropdown-item" to="/">JobRoaster</router-link></li>
              </ul>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Beranda</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">Tentang</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <main class="container py-4 flex-grow-1">
      <router-view />
    </main>
    
    <footer class="bg-dark text-white py-3">
      <div class="container text-center">
        <p class="mb-0">&copy; {{ new Date().getFullYear() }} RoasterHub.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { initBootstrapComponents } from '../bootstrap-init';

export default {
  name: 'App',
  mounted() {
    // Initialize all Bootstrap components
    initBootstrapComponents();
  }
}
</script>

<style>
/* Import Bootstrap CSS */
@import 'bootstrap/dist/css/bootstrap.min.css';

/* Custom styles to maintain some of the original design aesthetic */
.navbar-brand {
  font-size: 1.5rem;
}

.router-link-active {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

.dropdown-item.router-link-active {
  background-color: rgba(220, 53, 69, 0.1);
  color: #dc3545;
}
</style>