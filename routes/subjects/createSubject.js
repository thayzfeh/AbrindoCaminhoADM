const Subject = require('../../models/Subject');

module.exports = async(req, res) =>{
    const {subject} = req.body;

    if(!subject) return res.status(400).json({msg: 'Falta a disciplina!'});

    const dbSubject = new Subject({
        name: subject
    });

    try{
        await dbSubject.save();
        res.status(201).json({msg:"Disciplina salva com sucesso!"});
    }catch(e){
        console.log(e);
        res.status(500).json({msg: e});
    }
}