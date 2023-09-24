const mongoose=require('mongoose');

// Connect Database
mongoose.connect("mongodb://localhost:27017/Employee",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Database Connected....");
}).catch((error)=>{
    console.log(error);
});