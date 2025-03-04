<template>
  <div class="card shadow-sm mb-4" v-if="roastText">
    <div class="card-header bg-white">
      <h2 class="h4 text-danger fw-bold mb-0">Hasil Roasting:</h2>
    </div>
    <div class="card-body">
      <div class="mb-4 p-3 border-start border-4 border-danger bg-light">
        <div class="fs-5">
          <p v-for="(paragraph, index) in formattedRoast" :key="index" v-html="paragraph" class="mb-3"></p>
        </div>
      </div>
      <div class="d-flex gap-2">
        <button @click="copyToClipboard" class="btn btn-primary">
          <i class="bi bi-clipboard me-1"></i>
          {{ copySuccess ? 'Tersalin!' : 'Salin Hasil' }}
        </button>
        <button @click="$emit('reset')" class="btn btn-secondary">
          <i class="bi bi-arrow-repeat me-1"></i>
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