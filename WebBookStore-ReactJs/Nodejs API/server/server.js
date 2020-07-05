const express = require('express');

// biến môi trường env
require('dotenv').config();
//express-session

//express - validator
const userRouter = require('./api/users/user.router');
const authorRouter = require('./api/author/author.router')
const bookRouter = require('./api/Book/book.router')
const categoryRouter = require('./api/category/category.router')
const orderRouter = require('./api/order/order.router')
const orderItemRouter = require('./api/orderitem/orderitem.route')






const app = express();

app.use(express.json());



app.use('/api/users', userRouter);
app.use('/api/authors',authorRouter);
app.use('/api/allbook' ,bookRouter);
app.use('/api/category', categoryRouter);
app.use('/api/order', orderRouter);
app.use('/api/orderitem', orderItemRouter)


 app.listen(process.env.PORT || '5000', () => {
     console.log(`Server started on port: ${process.env.PORT || '5000'}`);
 });