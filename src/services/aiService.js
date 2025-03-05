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

// Variabel untuk menyimpan controller dari fetch API untuk pembatalan
let abortController = null;

/**
 * Fungsi untuk membatalkan streaming yang sedang berjalan
 */
export function cancelRoastStreaming() {
  if (abortController) {
    abortController.abort();
    abortController = null;
    return true;
  }
  return false;
}

/**
 * Fungsi untuk mengirim job description ke API DeepSeek untuk di-roast dengan streaming
 * @param {string} jobDescription - Deskripsi lowongan kerja yang akan di-roast
 * @param {function} onChunkReceived - Callback untuk menerima potongan respons streaming
 * @returns {Promise} - Hasil response dari API
 */
export async function roastJobDescription(jobDescription, onChunkReceived) {
  try {
    // Prompt untuk AI
    const prompt = `
      Tolong roast lowongan kerja berikut dengan gaya kasar dan sarkastik. 
      Kritik semua aspek yang tidak masuk akal seperti: gaji tidak sesuai dengan kualifikasi, 
      terlalu banyak persyaratan, ekspektasi yang tidak realistis, dll.
      
      Lowongan kerja:
      ${jobDescription}
    `
    
    // Jika ada callback untuk streaming, gunakan fetch API untuk streaming
    if (onChunkReceived) {
      // Buat AbortController baru untuk request ini
      abortController = new AbortController();
      const signal = abortController.signal;
      
      // Implement streaming with fetch API instead of axios
      const response = await fetch(`${apiUrl}/v1/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            {
              role: 'user',
              content: prompt
            }
          ],
          max_tokens: 1000,
          temperature: 0.7,
          stream: true
        }),
        signal // Tambahkan signal untuk pembatalan
      });
      
      // Check if response is ok
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      
      // Get the reader from the response body
      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let accumulatedResponse = '';
      
      try {
        // Read the stream
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          // Decode the chunk
          const chunk = decoder.decode(value, { stream: true });
          
          // Process the chunk - DeepSeek sends data as "data: {JSON}" format
          const lines = chunk.split('\n').filter(line => line.trim() !== '');
          
          for (const line of lines) {
            // Skip [DONE] marker
            if (line.includes('[DONE]')) continue;
            
            // Process data lines
            if (line.startsWith('data: ')) {
              try {
                const jsonData = JSON.parse(line.substring(6));
                const content = jsonData.choices?.[0]?.delta?.content || '';
                
                if (content) {
                  accumulatedResponse += content;
                  onChunkReceived(content, accumulatedResponse);
                }
              } catch (error) {
                console.error('Error parsing JSON:', error, line);
              }
            }
          }
        }
      } catch (error) {
        // Cek apakah error karena pembatalan
        if (error.name === 'AbortError') {
          console.log('Streaming dibatalkan oleh pengguna');
          throw new Error('Streaming dibatalkan oleh pengguna');
        } else {
          throw error;
        }
      } finally {
        // Pastikan kita selalu mengatur controller ke null setelah selesai
        abortController = null;
      }
      
      return accumulatedResponse;
    } 
    // Jika tidak ada callback streaming, gunakan cara biasa
    else {
      const response = await apiClient.post('/v1/chat/completions', {
        model: 'deepseek-chat',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 1000,
        temperature: 0.7,
        stream: false // Tidak menggunakan streaming
      });
      
      // Return hasil dari AI
      return response.data.choices[0].message.content;
    }
  } catch (error) {
    console.error('Error calling DeepSeek API:', error);
    
    // Jika error disebabkan oleh pembatalan, jangan tampilkan pesan error generic
    if (error.message === 'Streaming dibatalkan oleh pengguna') {
      throw error;
    } else {
      throw new Error('Gagal berkomunikasi dengan AI. Silakan coba lagi nanti.');
    }
  }
}