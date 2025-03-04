<template>
  <div class="card shadow-sm mb-4">
    <div class="card-body">
      <h2 class="card-title fw-bold mb-4">Masukkan Lowongan Kerja untuk Di-roast</h2>
      
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="jobDescription" class="form-label fw-bold">Teks Lowongan Kerja:</label>
          <textarea
            id="jobDescription"
            v-model="jobDescription"
            rows="10"
            class="form-control"
            placeholder="Salin dan tempel lowongan kerja di sini..."
            required
          ></textarea>
        </div>
        
        <div class="card bg-light mb-4">
          <div class="card-body">
            <h5 class="card-title h6 fw-bold">Contoh Lowongan:</h5>
            <button 
              type="button" 
              class="btn btn-primary btn-sm mb-2"
              @click="useExample"
            >
              Gunakan Contoh
            </button>
            <div class="p-2 bg-white border rounded small">
              Dicari Full Stack Developer dengan pengalaman min. 10 tahun React, Vue, Angular, Node.js, Python, Go, AWS, Azure, GCP.
              Harus bisa bekerja di bawah tekanan, overtime tanpa kompensasi, siap standby 24/7.
              Gaji: Rp 5 juta/bulan (negotiable). Fresh graduate welcome!
            </div>
          </div>
        </div>
        
        <button 
          type="submit" 
          class="btn btn-danger btn-lg"
          :disabled="isLoading || !jobDescription"
        >
          <span v-if="isLoading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          {{ isLoading ? 'Sedang Diproses...' : 'Roast Lowongan Ini!' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobForm',
  data() {
    return {
      jobDescription: '',
      exampleJob: `Dicari Full Stack Developer dengan pengalaman min. 10 tahun React, Vue, Angular, Node.js, Python, Go, AWS, Azure, GCP.
Harus bisa bekerja di bawah tekanan, overtime tanpa kompensasi, siap standby 24/7.
Gaji: Rp 5 juta/bulan (negotiable). Fresh graduate welcome!`
    }
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    submitForm() {
      if (this.jobDescription.trim()) {
        this.$emit('submit-job', this.jobDescription)
      }
    },
    useExample() {
      this.jobDescription = this.exampleJob
    }
  }
}
</script>