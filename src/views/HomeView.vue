<template>
  <div class="home">
    <div class="text-center mb-5">
      <h1 class="display-4 text-danger fw-bold">🔥 JobRoaster 🔥</h1>
      <p class="lead text-muted">Aplikasi untuk me-roast lowongan kerja yang tidak masuk akal</p>
      <span class="badge bg-danger rounded-pill px-3 py-2 mb-4">Bagian dari RoasterHub</span>
    </div>
    
    <JobForm 
      @submit-job="handleJobSubmit"
      :isLoading="isLoading"
    />
    
    <LoadingSpinner v-if="isLoading" />
    
    <RoastResult 
      v-if="roastResult && !isLoading" 
      :roastText="roastResult"
      @reset="resetForm"
    />
    
    <div class="alert alert-danger alert-dismissible fade show d-flex justify-content-between align-items-center" role="alert" v-if="errorMessage">
      <div>{{ errorMessage }}</div>
      <button type="button" class="btn-close" @click="errorMessage = ''" aria-label="Close"></button>
    </div>
  </div>
</template>

<script>
import JobForm from '../components/JobForm.vue'
import RoastResult from '../components/RoastResult.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import { roastJobDescription } from '../services/aiService'

export default {
  name: 'HomeView',
  components: {
    JobForm,
    RoastResult,
    LoadingSpinner
  },
  data() {
    return {
      jobDescription: '',
      roastResult: '',
      isLoading: false,
      errorMessage: ''
    }
  },
  methods: {
    async handleJobSubmit(jobText) {
      this.jobDescription = jobText
      this.isLoading = true
      this.errorMessage = ''
      this.roastResult = ''
      
      try {
        const result = await roastJobDescription(jobText)
        this.roastResult = result
      } catch (error) {
        this.errorMessage = error.message || 'Terjadi kesalahan saat me-roast lowongan kerja'
        console.error(error)
      } finally {
        this.isLoading = false
      }
    },
    resetForm() {
      this.jobDescription = ''
      this.roastResult = ''
    }
  }
}
</script>

<style scoped>
.home {
  max-width: 900px;
  margin: 0 auto;
}
</style>