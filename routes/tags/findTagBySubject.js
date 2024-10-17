const Tag = require('../../models/Tag');

module.exports = async(req, res)=>{

    const {tagSubject} = req.body;

    if(!tagSubject) return res.status(400).json({msg: 'Falta a disciplina!'});

    const tags = await Tag.find({
        subject: tagSubject
    });

    if(!tags) return res.status(404).json({msg: 'Nenhuma tag encontrada!'});

    res.status(200).json({tags});
}