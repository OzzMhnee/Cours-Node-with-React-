const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

const corsOptions = {
    // liste des origines autorisées
    origin: [
        'http://localhost:3000', // server frontend
        'http://localhost:8081', // server backend
    ],    
    optionsSuccessStatus: 200,
    // liste des méthodes autorisées pourrequêtes autorisées corss-origin 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    headers: 'Content-Type,Authorization',
    // autorisation des cookies
    credentials: true,
};
const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crudnode'
})
// app.get('/', (req, res) => { // req requete res response
//     res.json('Salut à toi depuis le backend');
// })
app.get('/', (req, res) => {
    const sql = 'SELECT * FROM student';
    database.query(sql, (err, data) => {
        if (err) { return res.json('Error'); };
        return res.json(data);
    });
});

// app.use(express.json());




app.listen(8081, () => {
    console.log('Server is running on port 8081');
})