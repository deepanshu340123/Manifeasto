const mongoose = require('mongoose');          //write req and press enter


const dbName = 'CompanyProfile_Pro';       //no space between name

const url = `mongodb+srv://guptadeepanshu340:1234@cluster0.8iybpqw.mongodb.net/Manifesto?retryWrites=true&w=majority`;

mongoose.connect(url)
//write thenc and press enter
.then((result) => {
    console.log('database connected')
})
.catch((err) => {
    console.log(err);
});

//from line 8 to 15 are in same line, dont use semicolon in line 8.



module.exports = mongoose;               //to export mongoose
