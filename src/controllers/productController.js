//conectarse a mongo, consultar datos y retornarlos
listProduct = (req,res)=>{
    console.log(req.params);
    productModel.find().then((data) => {
        res.json(data);
    }).catch(err => {
        res.send(err);
    });
};

getProduct = (req,res)=>{
    console.log(req.params);
    productModel.find({_id: req.params.id}).then((data) => {
        res.json(data);
    }).catch(err => {
        res.send(err);
    });
};

createProduct = (req,res)=>{
    console.log(req.params, req.body, req.headers);
    productModel.create({
       
        dni: 270000,
        descripcion: "prr1111",
        valor: 5555555,
        estado: 1
    
    }).then((data) => {
        res.json(data);
    }).catch(err => {
        res.send(err);
    })
};

modifyProduct = (req,res)=>{
    console.log(req.params, req.body, req.headers);
    productModel.findByIdAndUpdate(req.params.id, req.body).then((data) => {
        res.json(data);
    }).catch(err => {
        res.send(err);
    });
};

deleteProduct = (req,res)=>{
    console.log(req.params);
    productModel.findByIdAndDelete(req.params.id).then((data) => {
        res.json(data);
    }).catch(err => {
        res.send(err);
    });
};

module.exports = {
    listProduct,
    getProduct,
    createProduct,
    deleteProduct,
    modifyProduct
}
