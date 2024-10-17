const Question = require('../../models/Question');

module.exports = async(req, res) =>{
    const {questionTags} = req.body;

    if(!questionTags) return res.status(400).json({msg: 'Falta tags!'});

    const questions = await Question.find({
        tags: { $all: questionTags
        }}
    );

    if(!questions) return res.status(404).json({msg: 'Nenhuma pergunta encontrada!'});

    res.status(200).json({questions});
};