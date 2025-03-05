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
    
    <LoadingSpinner v-if="isLoading && !isStreaming" />
    
    <!-- Tampilkan hasil streaming saat sedang berlangsung -->
    <div class="card shadow mb-4" v-if="isStreaming && streamingText">
      <div class="card-header bg-danger text-white d-flex justify-content-between align-items-center">
        <h4 class="mb-0">AI sedang me-roast...</h4>
        <button 
          @click="stopStreaming" 
          class="btn btn-light btn-sm"
          title="Hentikan streaming"
        >
          <i class="bi bi-stop-fill"></i> Stop
        </button>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <p v-for="(paragraph, index) in formattedStreamingText" :key="index" v-html="paragraph"></p>
        </div>
        <div class="typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    
    <RoastResult 
      v-if="roastResult && !isLoading && !isStreaming" 
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
import { roastJobDescription, cancelRoastStreaming } from '../services/aiService'

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
      streamingText: '',
      isLoading: false,
      isStreaming: false,
      errorMessage: ''
    }
  },
  computed: {
    formattedStreamingText() {
      if (!this.streamingText) return []
      return this.streamingText.split('\n')
        .filter(line => line.trim() !== '')
        .map(line => {
          // Ganti pola **teks** dengan <strong>teks</strong>
          return line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        })
    }
  },
  methods: {
    async handleJobSubmit(jobText) {
      this.jobDescription = jobText
      this.isLoading = true
      this.isStreaming = true
      this.errorMessage = ''
      this.roastResult = ''
      this.streamingText = ''
      
      try {
        // Gunakan callback streaming untuk memperbarui UI saat chunk baru tiba
        await roastJobDescription(jobText, (chunk, fullText) => {
          this.streamingText = fullText
        })
        
        // Setelah streaming selesai, atur isStreaming ke false dan simpan hasil
        this.roastResult = this.streamingText
        this.isStreaming = false
      } catch (error) {
        // Jika error karena pengguna membatalkan, tampilkan hasil parsial sebagai hasil akhir
        if (error.message === 'Streaming dibatalkan oleh pengguna') {
          if (this.streamingText.trim()) {
            this.roastResult = this.streamingText + "\n\n[Roasting dihentikan oleh pengguna]"
          } else {
            this.errorMessage = 'Proses roasting telah dibatalkan.'
          }
        } else {
          this.errorMessage = error.message || 'Terjadi kesalahan saat me-roast lowongan kerja'
          console.error(error)
        }
        this.isStreaming = false
      } finally {
        this.isLoading = false
      }
    },
    stopStreaming() {
      // Panggil fungsi untuk membatalkan streaming
      cancelRoastStreaming()
    },
    resetForm() {
      this.jobDescription = ''
      this.roastResult = ''
      this.streamingText = ''
    }
  }
}
</script>

<style scoped>
.home {
  max-width: 900px;
  margin: 0 auto;
}

/* Typing indicator animation */
.typing-indicator {
  display: flex;
  padding: 10px 0;
}

.typing-indicator span {
  height: 8px;
  width: 8px;
  margin: 0 2px;
  background-color: #dc3545;
  border-radius: 50%;
  display: inline-block;
  opacity: 0.4;
}

.typing-indicator span:nth-child(1) {
  animation: pulse 1s infinite ease-in-out;
}

.typing-indicator span:nth-child(2) {
  animation: pulse 1s infinite ease-in-out 0.2s;
}

.typing-indicator span:nth-child(3) {
  animation: pulse 1s infinite ease-in-out 0.4s;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(0.8);
    opacity: 0.4;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
}
</style>