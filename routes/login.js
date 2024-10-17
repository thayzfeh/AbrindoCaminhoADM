const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const Admin = require('../models/Admin')


module.exports = async(req, res) =>{
    const {username, password} = req.body;

    if(!username, !password) return res.status(400).json({msg: 'faltam parâmetros obrigatórios!'});

    const admin = await Admin.findOne({username: username});

    if(!admin) return res.status(404).json({msg: 'admin não encontrado'});

    const checkPassword = await bcrypt.compare(password, admin.password);

    if(!checkPassword) return res.status(401).json({msg: 'senha inválida!'});

    try{
        const secret = process.env.SECRET;

        const token = jsonwebtoken.sign({
            id: admin._id
        }, secret);
        
        res.status(200).json({token, admin});
    }catch(e){
        console.log(e);
        res.status(500).json({msg: e})
    }
}