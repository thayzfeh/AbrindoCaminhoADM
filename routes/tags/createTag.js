const Tag = require('../../models/Tag');

module.exports = async(req, res) =>{
    const {tag} = req.body;

    if(!tag.tag || !tag.subject) return res.status(400).json({msg: 'Falta tag!'});

    const dbTag = new Tag({
        tag: tag.tag,
        subject: tag.subject
    });

    try{
        await dbTag.save();
        res.status(201).json({msg:"Tag salva com sucesso!"});
    }catch(e){
        console.log(e);
        res.status(500).json({msg: e});
    }
}