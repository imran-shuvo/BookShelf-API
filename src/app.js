const express = require('express');
const app = express();
require('./db/mongoose');
const userRouter =require('./router/user');
const bookRouter = require('./router/book')
const port = process.env.port||3000;



app.use(express.json());
app.use('/user/',userRouter);
app.use('/book/',bookRouter)







app.listen(port,()=>{
    console.log('Server is Running');
})
