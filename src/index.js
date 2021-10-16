'use strict'
const express = require('express');
const mongoose = require('./database/conection');
const myapp = require('./database/products')
const productModel = require('./database/products')


const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());


//conectarse a mongo, consultar datos y retornarlos
app.get('/safetymarket',(req,res)=>{
    console.log(req.params);
    productModel.find().then((data) => {
        res.json(data);
    }).catch(err => {
        res.send(err);
    });
})

app.get('/safetymarket/:id',(req,res)=>{
    console.log(req.params);
    productModel.find({_id: req.params.id}).then((data) => {
        res.json(data);
    }).catch(err => {
        res.send(err);
    });
})

app.post('/safetymarket',(req,res)=>{
    console.log(req.params, req.body);
    productModel.create(req.body). then((data)=>{
        console.log('todo perfect', data)
        res.json(data);
    }).catch(err=>{
        res.status(500).send(err);
    })
    })


app.put('/safetymarket/:id',(req,res)=>{
    console.log(req.params, req.body, req.headers);
    productModel.findByIdAndUpdate(req.params.id, req.body).then((data) => {
        res.json(data);
    }).catch(err => {
        res.send(err);
    });
});

app.delete('/safetymarket/:id',(req,res)=>{
    console.log(req.params);
    productModel.findByIdAndDelete(req.params.id).then((data) => {
        res.json(data);
    }).catch(err => {
        res.send(err);
    });
});



app.listen(3001,()=>{
    console.log('Iniciando server por el puesto 3001'
    )
})