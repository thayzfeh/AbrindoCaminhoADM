const User = require("../../models/User");

module.exports = async(req, res) =>{
    const {username, test} = req.body;

    if(!username) res.status(422).json({msg:'Falta usuário!'});

    const user = await User.findOne({username: username});
    
    if(!user) res.status(404).json({msg:'usuário não encontrado!'});

    try{
        user.tests.push(test);
        await user.save();
        res.status(200).json({msg:'concluído!',test});
    }catch(e){
        res.status(500).json({msg:e})
    }
}