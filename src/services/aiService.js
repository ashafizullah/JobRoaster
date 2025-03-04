import axios from 'axios'

// Base URL dan API key diambil dari file .env
const apiKey = import.meta.env.VITE_DEEPSEEK_API_KEY
const apiUrl = import.meta.env.VITE_DEEPSEEK_API_URL || 'https://api.deepseek.com'

// Buat instance axios
const apiClient = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  }
})

/**
 * Fungsi untuk mengirim job description ke API DeepSeek untuk di-roast
 * @param {string} jobDescription - Deskripsi lowongan kerja yang akan di-roast
 * @returns {Promise} - Hasil response dari API
 */
export async function roastJobDescription(jobDescription) {
  try {
    // Prompt untuk AI
    const prompt = `
      Tolong roast lowongan kerja berikut dengan gaya kasar dan sarkastik. 
      Kritik semua aspek yang tidak masuk akal seperti: gaji tidak sesuai dengan kualifikasi, 
      terlalu banyak persyaratan, ekspektasi yang tidak realistis, dll.
      
      Lowongan kerja:
      ${jobDescription}
    `
    
    // Request ke API DeepSeek
    const response = await apiClient.post('/v1/chat/completions', {
      model: 'deepseek-chat', // Sesuaikan dengan model yang tersedia di DeepSeek
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 1000,
      temperature: 0.7
    })
    
    // Return hasil dari AI
    return response.data.choices[0].message.content
  } catch (error) {
    console.error('Error calling DeepSeek API:', error)
    throw new Error('Gagal berkomunikasi dengan AI. Silakan coba lagi nanti.')
  }
}