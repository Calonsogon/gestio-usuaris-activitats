const express = require('express');
const mongoose = require('mongoose');
const activityRoutes = require('./routes/activityRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

app.use(express.json()); 


mongoose.connect('mongodb://localhost:27017/gestioUsuarisActivitats', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexió a MongoDB exitosa');
}).catch(err => {
    console.error('Error al conectar a MongoDB:', err);
});


app.use('/appActivitats/activities', activityRoutes);
app.use('/appActivitats/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
