<template>
  <div class="about">
    <div class="card shadow-sm mb-4">
      <div class="card-body">
        <h1 class="card-title text-danger fw-bold border-bottom border-danger pb-2 mb-4">Tentang JobRoaster</h1>
        
        <div class="card-text">
          <p class="lead">
            JobRoaster adalah aplikasi web yang menggunakan AI untuk "me-roast" lowongan kerja yang tidak masuk akal.
          </p>
          
          <p>
            Aplikasi ini memanfaatkan teknologi AI DeepSeek untuk menganalisis dan memberikan kritik yang kasar dan sarkastik
            terhadap lowongan kerja yang memiliki persyaratan yang tidak realistis, kompensasi yang tidak sesuai, atau ekspektasi yang berlebihan.
          </p>
          
          <div class="mt-4">
            <h5 class="fw-bold">Kapan waktu yang tepat untuk menggunakan JobRoaster:</h5>
            <ul class="list-group list-group-flush mt-2 mb-4">
              <li class="list-group-item bg-light"><i class="bi bi-check-circle-fill text-danger me-2"></i>Saat Anda menemukan lowongan kerja dengan persyaratan yang tidak masuk akal</li>
              <li class="list-group-item bg-light"><i class="bi bi-check-circle-fill text-danger me-2"></i>Saat gaji yang ditawarkan jauh tidak sebanding dengan kualifikasi yang diminta</li>
              <li class="list-group-item bg-light"><i class="bi bi-check-circle-fill text-danger me-2"></i>Saat job description penuh dengan red flags</li>
              <li class="list-group-item bg-light"><i class="bi bi-check-circle-fill text-danger me-2"></i>Untuk hiburan dan kesenangan sesama pencari kerja</li>
            </ul>
          </div>
          
          <div class="alert alert-warning mt-4">
            <strong>Catatan:</strong> Aplikasi ini dibuat untuk tujuan hiburan. Kritik yang diberikan oleh AI bersifat sarkastik
            dan mungkin tidak sepenuhnya akurat. Gunakan dengan bijak!
          </div>
        </div>
        
        <div class="text-center mt-4">
          <router-link to="/" class="btn btn-danger">
            <i class="bi bi-arrow-left me-2"></i>Kembali ke Beranda
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
}

/* Add Bootstrap Icons */
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");
</style>