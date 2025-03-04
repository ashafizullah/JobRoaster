<template>
    <div class="roast-result" v-if="roastText">
      <h2>Hasil Roasting:</h2>
      <div class="result-container">
        <div class="result-content">
          <p v-for="(paragraph, index) in formattedRoast" :key="index" v-html="paragraph"></p>
        </div>
        <div class="actions">
          <button @click="copyToClipboard" class="copy-button">
            {{ copySuccess ? 'Tersalin!' : 'Salin Hasil' }}
          </button>
          <button @click="$emit('reset')" class="reset-button">
            Roast Lagi
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RoastResult',
    props: {
      roastText: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        copySuccess: false
      }
    },
    computed: {
      formattedRoast() {
        if (!this.roastText) return []
        return this.roastText.split('\n')
          .filter(line => line.trim() !== '')
          .map(line => {
            // Ganti pola **teks** dengan <strong>teks</strong>
            return line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          })
      }
    },
    methods: {
      copyToClipboard() {
        navigator.clipboard.writeText(this.roastText)
          .then(() => {
            this.copySuccess = true
            setTimeout(() => {
              this.copySuccess = false
            }, 2000)
          })
          .catch(err => {
            console.error('Gagal menyalin teks: ', err)
          })
      }
    }
  }
  </script>
  
  <style scoped>
  .roast-result {
    max-width: 800px;
    margin: 30px auto;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    color: #e74c3c;
    margin-bottom: 20px;
    border-bottom: 2px solid #e74c3c;
    padding-bottom: 10px;
  }
  
  .result-container {
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    border-left: 4px solid #e74c3c;
  }
  
  .result-content {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  
  .result-content p {
    margin-bottom: 15px;
  }
  
  .actions {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
  
  .copy-button, .reset-button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-weight: bold;
  }
  
  .copy-button {
    background-color: #3498db;
    color: white;
  }
  
  .copy-button:hover {
    background-color: #2980b9;
  }
  
  .reset-button {
    background-color: #7f8c8d;
    color: white;
  }
  
  .reset-button:hover {
    background-color: #2c3e50;
  }
  </style>