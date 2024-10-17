const Question = require('../../models/Question');

module.exports = async(req, res) =>{
    const {questionId} = req.body;

    if(!questionId) return res.status(400).json({msg: 'Falta ID da pergunta!'});

    const question = await Question.findById(questionId);

    if(!question) return res.status(404).json({msg: 'Pergunta não encontrada!'});

    res.status(200).json({question});
}