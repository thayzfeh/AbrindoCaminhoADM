require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.static('public'));

const checkToken = require('./middlewares/checkToken');

const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const createQuestion = require('./routes/questions/createQuestion');
const deleteQuestion = require('./routes/questions/deleteQuestion');
const findQuestionById = require('./routes/questions/findQuestionById');
const findQuestionBySubject = require('./routes/questions/findQuestionBySubject');
const findQuestionByTag = require('./routes/questions/findQuestionByTag');

const createTag = require('./routes/tags/createTag');
const findTagBySubject = require('./routes/tags/findTagBySubject');

const createSubject = require('./routes/subjects/createSubject');
const findSubject = require('./routes/subjects/findSubject');
const submitTest = require('./routes/tests/submitTest');



app.get('/', (req, res)=>{
    res.status(200).json({
        msg: 'Bem-vindo à nossa api!'
    })    
})

app.post('/register',registerRoute);
app.post('/login',loginRoute);


app.get('/question/find/id',checkToken,findQuestionById);
app.get('/question/find/subject',checkToken,findQuestionBySubject);
app.get('/question/find/tag',checkToken,findQuestionByTag);
app.post('/question/create',checkToken, createQuestion);
app.post('/question/delete',checkToken,deleteQuestion);


app.post('/tag/create',checkToken, createTag);
app.get('/tag/find/subject',checkToken,findTagBySubject);

app.post('/subject/create',checkToken,createSubject);
app.get('/subject/get',checkToken,findSubject);

app.post('/tests/submit',checkToken,submitTest);


db_user = process.env.DB_USER;
db_pass = process.env.DB_PASS;


mongoose.connect(
    `mongodb+srv://${db_user}:${db_pass}@abrindocaminho.k4lyvjh.mongodb.net/?retryWrites=true&w=majority&appName=AbrindoCaminho`
).then(()=>{
    app.listen(process.env.PORT || 3002);
    console.log('API rodando!');
}).catch((e)=>{
    console.log(e);
})