const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');


module.exports = async(req, res)=>{
    const {username, password} = req.body;

    if(!username, !password) return res.status(400).json({msg: 'faltam parâmetros obrigatórios!'});

    const adminExists = await Admin.findOne({username: username});

    if(adminExists) return res.status(409).json({msg: 'já existe um admin com este nome.'});

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const admin = new Admin({
        username, 
        password: passwordHash
    });

    try{

        await admin.save();
        res.status(201).json({msg:'admin criado com sucesso!'});
    }catch(e){
        console.log(e);
        res.status(500).json({msg: `${e}`});
    }
}