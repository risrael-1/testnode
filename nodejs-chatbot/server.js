const express = require('express');

const PORT = 3000;

// TODO: instancier le serveur applicatif "express"
const app = express();

// TODO: définir le point d'entrée `GET /` qui répond "Bonjour !" à chaque requête reçue
app.get('/', (req, res) => {
    res.send("Bonjour !");
})

// TODO: demander au serveur applicatif d'attendre des requêtes depuis le port spécifié plus haut
app.listen(PORT, () => {
    
})

// TODO: ajouter le point d'entrée `GET /hello?nom=XXX` comme spécifié dans l'énoncé
app.get('/hello', function (req, res) {
  const nom = req.query.nom
  if (nom) {
    res.send('Bonjour, ' + nom + ' !')
  } else {
    res.send('Quel est votre nom ?')
  }
})
// TODO: ajouter le point d'entrée `POST /chat` comme spécifié dans l'énoncé
app.use(express.json()); // for parsing application/json

app.post('/chat', function (req, res) {
    const msg = req.body.msg;

    if (msg === 'ville') {
        res.send('Nous sommes à Paris');
    } else if (msg === 'météo') {
        res.send('Il fait beau');
    }
})