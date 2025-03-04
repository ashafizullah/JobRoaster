<template>
  <div class="about">
    <div class="card shadow-sm mb-4">
      <div class="card-body">
        <h1 class="card-title text-danger fw-bold border-bottom border-danger pb-2 mb-4">Tentang JobRoaster</h1>
        
        <div class="card-text">
          <p class="lead">
            <i class="bi bi-fire text-danger me-2"></i>
            JobRoaster adalah aplikasi web yang menggunakan AI untuk "me-roast" lowongan kerja yang tidak masuk akal.
          </p>
          
          <p>
            <i class="bi bi-robot text-danger me-2"></i>
            Aplikasi ini memanfaatkan teknologi AI DeepSeek untuk menganalisis dan memberikan kritik yang kasar dan sarkastik
            terhadap lowongan kerja yang memiliki persyaratan yang tidak realistis, kompensasi yang tidak sesuai, atau ekspektasi yang berlebihan.
          </p>
          
          <div class="mt-4">
            <h5 class="fw-bold">
              <i class="bi bi-clock-history text-danger me-2"></i>
              Kapan waktu yang tepat untuk menggunakan JobRoaster:
            </h5>
            <ul class="list-group list-group-flush mt-2 mb-4">
              <li class="list-group-item bg-light"><i class="bi bi-exclamation-triangle-fill text-danger me-2"></i>Saat Anda menemukan lowongan kerja dengan persyaratan yang tidak masuk akal</li>
              <li class="list-group-item bg-light"><i class="bi bi-cash-stack text-danger me-2"></i>Saat gaji yang ditawarkan jauh tidak sebanding dengan kualifikasi yang diminta</li>
              <li class="list-group-item bg-light"><i class="bi bi-flag-fill text-danger me-2"></i>Saat job description penuh dengan red flags</li>
              <li class="list-group-item bg-light"><i class="bi bi-emoji-laughing text-danger me-2"></i>Untuk hiburan dan kesenangan sesama pencari kerja</li>
            </ul>
          </div>
          
          <div class="alert alert-warning mt-4">
            <i class="bi bi-info-circle-fill me-2"></i>
            <strong>Catatan:</strong> Aplikasi ini dibuat untuk tujuan hiburan. Kritik yang diberikan oleh AI bersifat sarkastik
            dan mungkin tidak sepenuhnya akurat. Gunakan dengan bijak!
          </div>
        </div>
        
        <div class="text-center mt-4">
          <router-link to="/" class="btn btn-danger">
            <i class="bi bi-house-fill me-2"></i>Kembali ke Beranda
          </router-link>
        </div>
        
        <div class="d-flex justify-content-center mt-4">
          <div class="d-flex gap-3">
            <a href="https://wa.me/6282179392018" class="text-decoration-none" target="_blank">
              <i class="bi bi-whatsapp fs-4 text-secondary"></i>
            </a>
            <a href="https://www.linkedin.com/in/ashafizullah/" class="text-decoration-none" target="_blank">
              <i class="bi bi-linkedin fs-4 text-secondary"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
}

/* Make icons slightly larger */
.bi {
  font-size: 1.1em;
}

/* Add hover effect on social media icons */
.bi-github:hover, .bi-twitter-x:hover, .bi-linkedin:hover {
  color: #e74c3c !important;
  transform: scale(1.2);
  transition: all 0.3s ease;
}
</style>