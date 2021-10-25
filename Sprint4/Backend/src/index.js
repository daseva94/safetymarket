//IMPORTAR SCRIPS NECESARIOS
const express = require('express');
const mongoose = require('./database/connection');
const ventasModel = require('./database/ventas');
const ventas = require('./database/ventas');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());

// LISTAR VENTAS
app.get('/ventas', (req, res) => {
  console.log(req.params);
  ventasModel.find().then((data)=>{
    res.json(data);
  }).catch(err =>{
    res.send(err);
  });
});

//LISTAR VENTA INDIVIDUAL
app.get('/ventas/:id', (req, res) => {
  console.log(req.params);
  ventasModel.find({ _id: req.params.id }).then((data)=>{
    res.json(data);
  }).catch(err =>{
    res.send(err);
  });
});

//INGRESAR VENTA
app.post('/ventas', (req, res) => {
  console.log(req.params, req.body, req.headers);
  ventasModel.create(
    { 
      id:345633
      }
  ).then((data)=>{
    res.json(data);
  }).catch(err =>{
    res.status(500).send(err);
  });
});

//MODIFICAR VENTA
app.put('/ventas/:id', (req, res) => {
  console.log(req.params, req.body, req.headers);
  ventasModel.findByIdAndUpdate(req.params.id, req.body).then((data)=>{
    res.json(data);
  }).catch(err =>{
    res.send(err);
  });
});


app.listen(5000, () => {
  console.log('El servidor esta corriendo');
});