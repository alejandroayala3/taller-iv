const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = 3000

//endpooint
app.get('/api/health', (req, res) => {
    res.json({ message: 'El api funciona correctamente' })
})

    //endpint info de integrantes
    app.get('/api/info', (req, res) => {
        res.json({
            message: 'El api esta funcionando correctamente',
            integrantes: [
                {nombre: 'Alejandro Ayala', edad: 19, carrera: 'Ingeniería Informática', materiasAprobadas: 10},
                {nombre: 'Diego Guzman', edad: 21, carrera: 'Ingeniería Informática', materiasAprobadas: 13},
            ]
        })
    })

    app.listen(PORT, () => {
        console.log('Servidor corriendo en http://localhost:${port}')
    })