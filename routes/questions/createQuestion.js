const mongoose = require('mongoose');
const Question = require('../../models/Question');


module.exports = async(req, res) =>{

    const {question} = req.body;

    if (!question.body || !question.answers || !question.tags || !question.subject) return res.status(400).json({msg: "A pergunta é obrigatória!"});

    await checarTags();

    const dbQuestion = new Question({
        body: question.body,
        answers: question.answers,
        tags: question.tags,
        subject: question.subject 
    });

    try{
        await dbQuestion.save();
        res.status(201).json({msg:"Pergunta salva com sucesso!"});
    }catch(e){
        console.log(e);
        res.status(500).json({msg: e});
    }
}