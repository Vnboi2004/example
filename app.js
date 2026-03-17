const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('index'));
app.get('/gallery', (req, res) => res.render('gallery'));
app.get('/news', (req, res) => res.render('news'));
app.get('/blog', (req, res) => res.render('blog'));
app.get('/contact', (req, res) => res.render('contact'));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));