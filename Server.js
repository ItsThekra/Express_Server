const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// To show images inside public folder 
app.use(express.static('public'));

// index.html : 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// redirection :
app.get('/redirectRoute', (req, res) => {
  res.redirect('https://images.pexels.com/photos/305819/pexels-photo-305819.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load');
});

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});
