const express = require('express');          //method to import any package, here express is imported

//import userRouter
const userRouter = require('./routers/userRouter');
const companyRouter = require('./routers/companyRouter');
const feedbackRouter = require('./routers/feedbackRouter');
const utilRouter = require('./routers/util');

// const feedbackRouter = require('./routers/feedbackRouter');



const cors = require('cors');         //to allow request from frontend to backend
// const feedBackModel = require('./models/feedBackModel');









//initilizing express
const app = express();                 
const port = 5000;                    //can be anything at the place of 5000







//middlewares

app.use(cors({
    origin : ['http://localhost:3000']
}));

app.use(express.json());                 //convert data from json to js
app.use('/user', userRouter);            //sending request to userRouter
app.use('/company', companyRouter);
app.use('/feedback', feedbackRouter);
app.use('/util', utilRouter);

// app.use('/feedback', feedbackRouter)
app.use(express.static('./static/uploads'));       //to make public folder as static folder


//to start express server
app.listen(port, () => {console.log('express server started')});