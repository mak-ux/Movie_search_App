const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://kanhaiya:asqPXt5aaYPZO4Jx@cluster0.xzm7l.mongodb.net/Movie_web_App?retryWrites=true&w=majority',
{
    useCreateIndex:true ,useNewUrlParser:true,useUnifiedTopology: true }).then(
    console.log('connected')
)



