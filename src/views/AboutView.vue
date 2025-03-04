<template>
  <div class="about">
    <div class="card shadow-sm mb-4">
      <div class="card-body">
        <h1 class="card-title text-danger fw-bold border-bottom border-danger pb-2 mb-4">Tentang RoasterHub</h1>
        
        <div class="card-text">
          <p class="lead">
            <i class="bi bi-fire text-danger me-2"></i>
            RoasterHub adalah platform yang menggunakan kecerdasan buatan (AI) untuk memberikan kritik yang sarkastik dan jenaka terhadap berbagai konten.
          </p>
          
          <p>
            <i class="bi bi-layers-fill text-danger me-2"></i>
            Platform ini menyediakan berbagai fitur "roasting" untuk berbagai kategori konten, dengan JobRoaster sebagai salah satu fitur unggulan kami.
          </p>
          
          <div class="card bg-light mt-4 mb-4">
            <div class="card-header bg-danger text-white">
              <h5 class="mb-0"><i class="bi bi-briefcase-fill me-2"></i>JobRoaster</h5>
            </div>
            <div class="card-body">
              <p>
                JobRoaster merupakan fitur utama RoasterHub yang berfokus pada "me-roast" lowongan kerja yang tidak masuk akal.
                Dengan menggunakan teknologi AI DeepSeek, JobRoaster memberikan kritik yang kasar dan sarkastik terhadap lowongan kerja yang memiliki:
              </p>
              <ul class="list-group list-group-flush mt-2 mb-3">
                <li class="list-group-item bg-light"><i class="bi bi-exclamation-triangle-fill text-danger me-2"></i>Persyaratan yang tidak realistis atau berlebihan</li>
                <li class="list-group-item bg-light"><i class="bi bi-cash-stack text-danger me-2"></i>Gaji yang tidak sebanding dengan kualifikasi</li>
                <li class="list-group-item bg-light"><i class="bi bi-flag-fill text-danger me-2"></i>Ekspektasi yang tidak masuk akal</li>
              </ul>
            </div>
          </div>
          
          <div class="alert alert-warning mt-4">
            <i class="bi bi-info-circle-fill me-2"></i>
            <strong>Catatan:</strong> Platform ini dibuat untuk tujuan hiburan semata. Kritik yang diberikan oleh AI bersifat sarkastik
            dan tidak boleh diambil secara personal. Gunakan dengan bijak dan nikmati sisi humornya!
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
.bi-whatsapp:hover, .bi-linkedin:hover {
  color: #e74c3c !important;
  transform: scale(1.2);
  transition: all 0.3s ease;
}

.card-header {
  border-radius: 4px 4px 0 0 !important;
}
</style>