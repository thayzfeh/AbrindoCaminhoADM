const Question = require('../../models/Question');

module.exports = async(req, res) =>{
    const {questionId} = req.body;

    if(!questionId) return res.status(400).json({msg: 'Falta ID da pergunta!'});

    try{
        await Question.deleteOne({
            _id : questionId
        });
        res.status(202).json({msg: 'Pergunta deletada com sucesso!'});
    }catch(e){
        console.log(e);
        res.status(500).json({msg: e});
    }
    
    
}