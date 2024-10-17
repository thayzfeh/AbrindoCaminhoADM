const Question = require('../../models/Question');

module.exports = async(req, res) =>{
    const {questionSubject} = req.body;

    if(!questionSubject) return res.status(400).json({msg: 'Falta a disciplina!'});

    const questions = await Question.find({
        subject: questionSubject
    });

    if(!questions) return res.status(404).json({msg: 'Nenhuma pergunta encontrada!'});

    res.status(200).json({questions});
}