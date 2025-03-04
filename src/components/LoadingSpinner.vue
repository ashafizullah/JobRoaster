<template>
  <div class="text-center my-5 py-5">
    <div class="spinner-border text-danger" role="status" style="width: 3rem; height: 3rem;">
      <span class="visually-hidden">Loading...</span>
    </div>
    <p class="mt-3 text-muted">{{ message || 'Sedang memuat...' }}</p>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
  props: {
    message: {
      type: String,
      default: 'AI sedang me-roast lowongan kerja Anda...'
    }
  }
}
</script>