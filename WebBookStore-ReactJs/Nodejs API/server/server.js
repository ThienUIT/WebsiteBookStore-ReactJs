const express = require('express');

//express-session
const session = require('express-session')

const userRouter = require('./api/users/user.router');
const authorRouter = require('./api/author/author.router')
const bookRouter = require('./api/Book/book.router')

const TWO_HOURS = 1000 * 60 * 60 * 2
const {
    SESS_LIFETIME = TWO_HOURS,
    NODE_ENV = 'development',
    SESS_NAME = 'sid',
    SESS_SECRET = "It's a secret"
} = process.env

const IN_PROD = NODE_ENV === 'production'

const app = express();

app.use(express.json());
app.use(session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SESS_SECRET,
    cookie:{
        maxAge: SESS_LIFETIME,
        sameSite: true,
        secure: IN_PROD
    }
}))

app.use('/api/users', userRouter);
app.use('/api/authors',authorRouter);
app.use('/api/allbook',bookRouter);

 app.listen(process.env.PORT || '5000', () => {
     console.log(`Server started on port: ${process.env.PORT || '5000'}`);
 });