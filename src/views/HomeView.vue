<template>
  <div class="home">
    <div class="header">
      <h1>🔥 JobRoaster 🔥</h1>
      <p class="subtitle">Aplikasi untuk me-roast lowongan kerja yang tidak masuk akal</p>
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
    
    <div class="error-message" v-if="errorMessage">
      <p>{{ errorMessage }}</p>
      <button @click="errorMessage = ''" class="close-error">Tutup</button>
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
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

h1 {
  color: #e74c3c;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 30px;
}

.error-message {
  margin: 20px auto;
  padding: 15px;
  background-color: #f8d7da;
  color: #721c24;
  border-radius: 4px;
  border: 1px solid #f5c6cb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-error {
  background-color: transparent;
  border: none;
  color: #721c24;
  cursor: pointer;
  font-weight: bold;
}
</style>