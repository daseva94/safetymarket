const { OAuth2Client } =require("google-auth-library");
const mode_usuarios = require("../database/mode_usuarios");
const jwt = require("jsonwebtoken");
const CLIENT_ID = "195873101262-op586g7jgd6i541qfl9qnllulp9tjfbs.apps.googleusercontent.com";
const JWT_KEY = "miClave";
const userModel = require("../database/mode_usuarios")
googleAuth = (req, res) => {
    console.log(req.headers, req.body, req.params);
    const {token}=req.body;
    const client = new OAuth2Client(CLIENT_ID);
    client.verifyIdToken({
        idToken:token,
        audience: CLIENT_ID
    }).then(resp =>{
        console.log(resp);
        const {name, email} = resp.payload;
        console.log(name, email);
        return userModel.findOneAndUpdate({name: name},{email: email},{new: true, upsert: true})
    }).then(user=>{
        console.log(user);
        var appToken = jwt.sign({user: user},JWT_KEY);
        res.json(appToken)

    }).catch(err => {
        console.log(err);
        res.status(500).send(err);
    });
}

module.exports = { googleAuth };