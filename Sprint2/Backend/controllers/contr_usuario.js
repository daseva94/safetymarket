const Usuarios = require("../models/mode_usuarios");

exports.getUsuarios = (req, res) => {
  Usuarios.find().then((usuarioResult) => {
    res.status(200).json(usuarioResult);
  });
};

exports.addUsuario = (req, res) => {
  const usuarioadd = new Usuarios({
    Documento: req.body.Documento,
    NombreApellido: req.body.NombreApellido,
    Telefono: req.body.Telefono,
    Correo: req.body.Correo,
    Sucursal: req.body.Sucursal,
    Rol: req.body.Rol,
  });

  usuarioadd.save().then((createdUser) => {
    console.log(createdUser);
    res.status(201).json("Created satisfied");
  });
};

exports.getUsuatioId = (req, res) => {
  Usuarios.findById(req.params.id).then((usuarioResult) => {
    if (usuarioResult) {
      res.status(200).json(usuarioResult);
    } else {
      res.status(404).json("No Encontrado");
    }
  });
};