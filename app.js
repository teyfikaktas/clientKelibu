// Express modülünü dahil et
const express = require('express');
const app = express();

// Anasayfa için bir rota tanımla
app.get('/', (req, res) => {
  res.send('Merhaba Dünya!');
});

// Uygulamayı belirli bir port üzerinde çalıştır
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor...`);
});
