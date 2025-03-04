<template>
    <div class="about">
      <h1>Tentang JobRoaster</h1>
      <div class="about-content">
        <p>
          JobRoaster adalah aplikasi web yang menggunakan AI untuk "me-roast" lowongan kerja yang tidak masuk akal.
        </p>
        <p>
          Aplikasi ini memanfaatkan teknologi AI DeepSeek untuk menganalisis dan memberikan kritik yang kasar dan sarkastik
          terhadap lowongan kerja yang memiliki persyaratan yang tidak realistis, kompensasi yang tidak sesuai, atau ekspektasi yang berlebihan.
        </p>
        <p>
          Kapan waktu yang tepat untuk menggunakan JobRoaster:
        </p>
        <ul>
          <li>Saat Anda menemukan lowongan kerja dengan persyaratan yang tidak masuk akal</li>
          <li>Saat gaji yang ditawarkan jauh tidak sebanding dengan kualifikasi yang diminta</li>
          <li>Saat job description penuh dengan red flags</li>
          <li>Untuk hiburan dan kesenangan sesama pencari kerja</li>
        </ul>
        <p>
          <strong>Catatan:</strong> Aplikasi ini dibuat untuk tujuan hiburan. Kritik yang diberikan oleh AI bersifat sarkastik
          dan mungkin tidak sepenuhnya akurat. Gunakan dengan bijak!
        </p>
      </div>
      <div class="back-link">
        <router-link to="/">Kembali ke Beranda</router-link>
      </div>
    </div>
  </template>
  
  <style scoped>
  .about {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1 {
    color: #e74c3c;
    margin-bottom: 20px;
    border-bottom: 2px solid #e74c3c;
    padding-bottom: 10px;
  }
  
  .about-content {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  p {
    margin-bottom: 15px;
    line-height: 1.6;
  }
  
  ul {
    margin-bottom: 20px;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  .back-link {
    margin-top: 20px;
    text-align: center;
  }
  
  .back-link a {
    display: inline-block;
    padding: 10px 20px;
    background-color: #e74c3c;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  
  .back-link a:hover {
    background-color: #c0392b;
  }
  </style>