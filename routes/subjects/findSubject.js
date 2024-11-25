const Subject = require('../../models/Subject');

module.exports = async(req,res)=>{
    const subjects = await Subject.find({});

    if(!subjects || subjects.length == 0) return res.status(404).json({msg: 'Nenhuma disciplina encontrada!'});

    res.status(200).json({subjects});
}