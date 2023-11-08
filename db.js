const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rakshashetty66:Raksha8050840768@cluster0.rdi3hmr.mongodb.net/?retryWrites=true&w=majority',
{
    useUnifiedTopology: true,
    useNewUrlParser: true,
}
).then((response)=>{
    console.log('Connected To Database');
})
.catch((error)=>{
    console.log(error);
})