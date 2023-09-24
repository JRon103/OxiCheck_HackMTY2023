const express = require('express');
const router = express.Router();
const pool = require('./database');
const axios = require('axios');

router.post('/api', async (req, res, next) => {
        
    const {Alta, Baja, Promedio} = req.body;

    try{
        const connection = await pool.getConnection();
        const insertQuery = 'INSERT INTO `data` (Alta, Baja, Promedio) VALUES (?,?,?)';
        const dataRegistration = await connection.query(insertQuery, [Alta, Baja, Promedio]);
    
        connection.release();
        console.log('OK: ', dataRegistration);
        res.send('Data registered');
        
    }catch(error){
        console.log(error);
        res.send('Error: ', error);
    }
});

/*router.get('/api', async (req, res, next) => {

    // const {Dia} = req.body;

    try{
            const connection = await pool.getConnection();
            // const requestQuery = 'SELECT `Alta`, `Baja`, `Promedio` FROM `data` WHERE `Dia` = ?';
            
            const requestQuery = 'SELECT * FROM `data` ORDER BY `Dia` DESC LIMIT 5';
            
            // const [dataCollection] = await connection.query(requestQuery, [Dia]);
            const dataCollection = await connection.query(requestQuery);
            
            connection.release();
            console.log('OK: ', dataCollection);
            // res.send('Data Collected');
            
            // Manipulación de datos para entregarlos
            // en un formato legible por Streamlit
            const json = {};

            const datos = dataCollection;
            for (const dato of datos) {
                const dia = `Dia ${dato.Dia}`;
                const valores = [dato.Alta, dato.Baja, dato.Promedio];

                // Agregamos los valores del objeto actual al arreglo correspondiente del JSON
                json[dia] = json[dia] || [];
                json[dia].push(...valores);
            }
            
            console.log(json);
            res.send(json);
            
    }catch(error){
        console.log(error);
        res.send('Error: ', error);
    }
});*/

/*router.get('/api', async (req, res, next) => {

    try{

        const json = await axios.get("http://35.238.147.212:3000/api");
        console.log(json);

        const datos = json;
            for (const dato of datos) {
                const dia = `Dia ${dato.Dia}`;
                const valores = [dato.Alta, dato.Baja, dato.Promedio];

                // Agregamos los valores del objeto actual al arreglo correspondiente del JSON
                json[dia] = json[dia] || [];
                json[dia].push(...valores);
            }

        console.log(datos);
        res.send('Recibido');

        // res.send('Recibido');
            
    }catch(error){
        console.log(error);
        res.send('Error: ', error);
    }
});*/

router.get('/api', async (req, res, next) => {
    try {
        const response = await axios.get("http://35.238.147.212:3000/api");
        const json = response.data;
        console.log(json);

        /*for (const dia in json) {
            const valores = json[dia];
            console.log(`${dia}:`, valores);
        }*/


        // res.send('Recibido');
        res.send(json);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error: ' + error.message);
    }
});



module.exports = router;
