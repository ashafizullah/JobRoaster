<template>
    <div class="job-form">
      <h2>Masukkan Lowongan Kerja untuk Di-roast</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="jobDescription">Teks Lowongan Kerja:</label>
          <textarea
            id="jobDescription"
            v-model="jobDescription"
            rows="10"
            placeholder="Salin dan tempel lowongan kerja di sini..."
            required
          ></textarea>
        </div>
        
        <div class="example-section">
          <h3>Contoh Lowongan:</h3>
          <button 
            type="button" 
            class="example-button"
            @click="useExample"
          >
            Gunakan Contoh
          </button>
          <div class="example-text">
            <small>
              Dicari Full Stack Developer dengan pengalaman min. 10 tahun React, Vue, Angular, Node.js, Python, Go, AWS, Azure, GCP.
              Harus bisa bekerja di bawah tekanan, overtime tanpa kompensasi, siap standby 24/7.
              Gaji: Rp 5 juta/bulan (negotiable). Fresh graduate welcome!
            </small>
          </div>
        </div>
        
        <button 
          type="submit" 
          class="submit-button" 
          :disabled="isLoading || !jobDescription"
        >
          {{ isLoading ? 'Sedang Diproses...' : 'Roast Lowongan Ini!' }}
        </button>
      </form>
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
  
  <style scoped>
  .job-form {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    color: #333;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
  }
  
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: inherit;
    font-size: 16px;
    resize: vertical;
  }
  
  .submit-button {
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 10px;
  }
  
  .submit-button:hover:not(:disabled) {
    background-color: #c0392b;
  }
  
  .submit-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  .example-section {
    margin: 15px 0;
    padding: 10px;
    background-color: #f1f1f1;
    border-radius: 4px;
  }
  
  .example-button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    margin-bottom: 10px;
  }
  
  .example-button:hover {
    background-color: #2980b9;
  }
  
  .example-text {
    padding: 10px;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
  </style>